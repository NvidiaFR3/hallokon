const fs = require("fs");
const path = require("path");

let handler = async (m, Nvidia) => {
  try {
    let text = `
Hai @${m.sender.split("@")[0]},

*── PILIH TOMBOL DI BAWAH INI ──*
`;

    const interactiveMetaButton = {
      buttonId: "action",
      buttonText: { displayText: "ini pesan interactiveMeta" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "PILIH MENU",
          sections: [
            {
              title: "List Menu",
              highlight_label: "Recommended",
              rows: [
                { title: "ALLMENU", id: ".allmenu" },
                { title: "ALL MENU2", id: ".allmenu2" },
                { title: "SLIDE MENU", id: ".slidemenu" },
                { title: "BUG MENU", id: ".bugmenu" },
                { title: "THANK YOU TO", id: ".tqto" }
              ]
            },
            {
              title: "Menu Tambahan",
              rows: [
                { title: "Ping Bot", id: ".ping" },
                { title: "Script Bot WhatsApp", id: ".buysc" },
                { title: "New Fitur Nvidia", id: ".fiturnew" }
              ]
            }
          ]
        })
      }
    };

    let documentBuffer;
    try {
      documentBuffer = fs.readFileSync(path.join(__dirname, "../package.json"));
    } catch {
      documentBuffer = Buffer.from("File tidak ditemukan");
    }

    const buttonMessage = {
      document: documentBuffer,
      fileName: `By ${global.namaOwner || "Dev"} </>`,
      mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      fileLength: 99999999,
      pageCount: 1,
      caption: text,
      footer: global.botname || "Bot",
      buttons: [
        {
          buttonId: ".owner",
          buttonText: { displayText: "Contact Owner" },
          type: 1
        },
        interactiveMetaButton
      ],
      headerType: 1,
      viewOnce: true,
      contextInfo: {
        isForwarded: true,
        mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          newsletterName: global.namaSaluran
        },
        externalAdReply: {
          title: `${global.botname2 || "Bot"} - v${global.versi || "1.0"}`,
          thumbnailUrl: global.image?.menu || "",
          sourceUrl: global.linkWebsite || "",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    await Nvidia.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch (err) {
    console.error(err);
    await m.reply("Terjadi kesalahan dalam menampilkan menu.");
  }
};

handler.command = ["menu"];
module.exports = handler;