const fs = require("fs");

const handler = async (m, Nvidia, { isOwner, text, command }) => {
try {
if (!isOwner) return m.reply("Fitur ini hanya untuk developer boy!")
if (!text || !m.quoted || !m.quoted.text) return m.reply(`Contoh: *.${command}* namafile.js dengan reply codenya`)
if (!text.endsWith(".js")) return m.reply(`Contoh: *.${command}* namafile.js dengan reply codenya`)
const res = ["saveplugin", "saveplugins", "svp"]
const action = res.includes(command) ? "save" : "menambah"
await fs.writeFileSync(`./plugin/${text.trim()}`, m.quoted.text)
return m.reply(`Berhasil ${action} plugin *${text}*`)
} catch (err) {
console.log(err)
}
}

handler.command = ["addp", "addplugin", "addplugins", "saveplugin", "saveplugins", "svp"]
module.exports = handler