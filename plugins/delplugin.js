const fs = require("fs");

const handler = async (m, Nvidia, { isOwner, text, command }) => {
try {
if (!isOwner) return m.reply("Fitur ini hanya untuk developer boy!")
const Plugin = await fs.readdirSync("./plugin")
if (Plugin.length < 1) return m.reply("Tidak ada file plugin")
if (!text || !text.endsWith(".js")) return m.reply(`Contoh: *.${command}* ping.js`)
if (!Plugin.includes(text)) return m.reply("Plugin tidak ditemukan")
await fs.unlinkSync(`./plugin/${text.toLowerCase().trim()}`)
return m.reply(`Berhasil menghapus plugin *${text.toLowerCase().trim()}*`)
} catch (err) {
console.log(err)
}
}

handler.command = ["delp", "dp", "delplugin", "delplugins"]
module.exports = handler