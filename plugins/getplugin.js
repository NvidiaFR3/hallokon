const fs = require("fs");

const handler = async (m, Nvidia, { isOwner, text, command }) => {
try {
if (!isOwner) return m.reply("Fitur ini hanya untuk developer bot!")
const Plugin = await fs.readdirSync("./plugin")
if (Plugin.length < 1) return m.reply("Tidak ada file plugin")
if (!text || !text.endsWith(".js")) return m.reply(`Contoh: *.${command}* ping.js`)
if (!Plugin.includes(text)) return m.reply("Plugin tidak ditemukan")
const result = Plugin.find(i => i == text.toLowerCase().trim())
const teks = await fs.readFileSync(`./plugin/${text.toLowerCase().trim()}`).toString()
return m.reply(teks)
} catch (err) {
console.log(err)
}
}

handler.command = ["getp", "gp", "getplugin", "getplugins"]
module.exports = handler