import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/ara.mp3'
conn.sendFile(m.chat, vn, 'ara.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Ara/
handler.help = ['Ara']
handler.tags = ['audio']
handler.command = new RegExp
export default handler
