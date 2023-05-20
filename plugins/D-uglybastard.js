import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.uglyBastard()
     conn.sendFile(m.chat, url, 'uglybastard.jpg', 'Nih Kak', m, false)
}
handler.help = ['ugly']
handler.tags = ['nsfw']
handler.command = /^ugly$/i
export default handler
