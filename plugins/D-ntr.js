import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.netorare()
     conn.sendFile(m.chat, url, 'netorare.jpg', 'Nih Kak', m, false)
}
handler.help = ['ntr']
handler.tags = ['nsfw']
handler.command = /^ntr$/i
export default handler
