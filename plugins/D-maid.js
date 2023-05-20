import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.maid()
     conn.sendFile(m.chat, url, 'maid.jpg', 'Nih Kak', m, false)
}
handler.help = ['maid']
handler.tags = ['nsfw']
handler.command = /^maid$/i
export default handler
