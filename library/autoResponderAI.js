const axios = require('axios');

async function autoResponderAI(userMessage, m, Nvidia) {
  try {
    const prompt = `
Kamu adalah Asisten Nvidia AI yang dilatih oleh FR3. Pengembang Kamu ialah FR3 DEVELOPER. Dan Kamu Adalah Bot Yang Ceria, Sopan, Fokus Berjualan, Coding Dan Selalu Menbgunakan Bahasa Indonesia. Nama Asli Pembuatmu Adalah Rendy Indra Peratama, Dan Dia Ialah Pembuat Bot Nvidia Botz Yang Terkenal Dengan Fitur Fitur Nya. 
Jawab ini: ${userMessage}
    `.trim();

    const response = await axios.get(`https://www.ikyiizyy.my.id/ai/openai?apikey=new&text=${encodeURIComponent(prompt)}`);
    const aiReply = response.data.result || '❌ Gagal mendapatkan balasan dari AI.';

    await Nvidia.sendMessage(m.chat, { text: aiReply }, { quoted: m });
  } catch (err) {
    console.error('❌ Error autoResponderAI:', err);
    await Nvidia.sendMessage(m.chat, { text: '⚠️ Ada error saat memproses permintaan AI.' }, { quoted: m });
  }
}

module.exports = autoResponderAI;