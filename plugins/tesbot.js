import util from 'util'
import path from 'path'
let handler  = async (m, { conn }) => {
let info = `Nani? (・o・)`
conn.reply(m.chat, info, m)
let vn = './src/sound/onichan.mp3'
conn.sendFile(m.chat, vn, 'onichan.mp3', null, m, true, {
type: 'audioMessage',
ptt: true
})
}
handler.customPrefix = /^p$/i
handler.command = new RegExp
export default handler
