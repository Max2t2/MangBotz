let handler = async (m, { conn }) => {
let caption = `*HALO*\n*Saya MangBotz*\n*Pilih Menu Di Bawah Ya*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttps://chat.whatsapp.com/H9TCBJM85XwFgU8baLwl5U\n\n*Subscribe YT Owner*\nhttps://youtube.com/c/KomangComics`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nMangBotz Created By MangDTech\n`.trim(), '📃Menu', '.menu', '👤Owner', '.owner', '📄Sewa', '.sewabot', m)
}
handler.customPrefix = /^(help|bot)/i
handler.command = new RegExp
handler.tags = ['main']
handler.help = ['help', 'bot']
export default handler
