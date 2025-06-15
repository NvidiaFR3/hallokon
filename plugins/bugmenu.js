const fs = require("fs");
const os = require("os");

let handler = async (m, Nvidia) => {
  const textbug = `
🛡️ *ʟɪsᴛ ʙᴜɢ ᴍᴇɴᴜ* 
> ✗ *.FCBUG*
> ✗ *.NVIDIA-CRASH*
> ✗ *.FCHARD*
> ✗ *.FLOWSC*
> ✗ *.INVISIBLE*
> ✗ *.TREDEX*
> ✗ *.ATTACK-UI*
> ✗ *. NYEDOT-KOUTA*
> ✗ *.ALLBUG*
> ✗ *.CRASH-CH*
> ✗ *.KILL-GC*
> ✗ *.FR3CRASH*
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

handler.command = ["bugmenu"];
module.exports = handler;