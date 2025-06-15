const fs = require("fs");
const os = require("os");

let handler = async (m, Nvidia) => {
  const textbug = `
╔══════════════════════════╗
║           🔰 Terima Kasih Kepada:
╠══════════════════════════╣
║ ▫️ 𝑹𝒆𝒏𝒅𝒚 𝑰𝒏𝒅𝒓𝒂 𝑷𝒆𝒓𝒂𝒕𝒂𝒎𝒂 (FR3)
║ ▫️ 𝑹𝒆𝒍𝒍
║ ▫️ 𝑫𝒂𝒏𝒛
║ ▫️ 𝑫𝒊𝒎𝒛
║ ▫️ 𝑳𝒆𝒕𝒐𝒏
║ ▫️ 𝑹𝒆𝒔𝒆𝒍𝒍𝒆𝒓 𝑮𝒂𝒎𝒊𝒏𝒈 
║ ▫️ 𝑭𝒂𝒉𝒎𝒊 
║ ▫️ 𝑽𝒐𝒙𝒚 
║ ▫️ 𝑭𝒊𝒅𝒛𝒛 
║ ▫️ 𝑾𝒂𝒓𝒌𝒛 
║ ▫️ 𝑨𝑳𝑳 𝑩𝑼𝒀𝑬𝑹 𝑵𝑽𝑰𝑫𝑰𝑨 𝑩𝑶𝑻𝒁
╠══════════════════════════╣
║ *🙏 Terima kasih sudah membantu dan*
║ *Mendukung Nvidia Botz*
╚══════════════════════════╝
`;

  await Nvidia.sendMessage(m.chat, {
    text: textbug,
    contextInfo: {
      mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
      externalAdReply: {
        title: `${global.botname || "Bot"} - ${global.versi || "1.0"}`,
        thumbnailUrl: global.image?.menu || "",
        sourceUrl: global.linkSaluran || "",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });

  await Nvidia.sendMessage(m.chat, {
    audio: fs.readFileSync("./media/musik.mp3"),
    mimetype: "audio/mpeg",
    ptt: true
  });
};

handler.command = ["tqto"];
module.exports = handler;