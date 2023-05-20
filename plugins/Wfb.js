let handler = async (m, { conn }) => {

let text = `

     WhatsApp For Bot 🤖
 

    --------Kelebihan--------

• Bisa Lihat menu bot✔️

• Anti Virtex✔️

• Anti lag✔️

• Fitur war✔️

• Anti Bug troli, slayer Dll✔️

• No Password ✔️

• Pesan anti hapus✔️

• Status Anti hapus✔️

• Anti blokir✔️

• Fitur Blokir panggilan✔️

• Status Hd✔️

• Sembunyikan Online✔️

• Boom chat✔️

• Anti kadaluarsa ✔️

• Pengubah suara Vn✔️

• Status mod variasi✔️

• No delay✔️

• Status Warna warni✔️

• Dll

`

conn.reply(m.chat, text, m) 

let link = `https://drive.google.com/file/d/1AD5SfVdPDPQLrDkZ3ds4FuG7-rbYXVNR/view?usp=drivesdk`

conn.reply(m.chat, link, m)

}

handler.command = /^wfb$/i

handler.help = ['wfb']

handler.tags = ['main']

export default handler
