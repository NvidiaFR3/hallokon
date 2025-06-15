const fs = require("fs");
const os = require("os");

let handler = async (m, Nvidia) => {
  const text = `
 *✨ *Fitur Tambahan dan Tools Baru:*

- Penambahan Fitur Up Github Otomatis 
`;

  await Nvidia.sendMessage(m.chat, {
    footer: `© 2025 ${global.botname || "Bot"}`,
    buttons: [
      {
        buttonId: ".buyscript",
        buttonText: { displayText: "Buy Script" },
        type: 1
      },
      {
        buttonId: ".owner",
        buttonText: { displayText: "Owner" },
        type: 1
      }
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `By ${global.namaOwner || "Dev"} </>`,
    mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
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
        title: `${global.botname || "Bot"} - ${global.versi || "1.0"}`,
        thumbnailUrl: global.image?.menu || "",
        sourceUrl: global.linkSaluran || "",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.command = ["fiturnew", "newfitur"];
module.exports = handler;