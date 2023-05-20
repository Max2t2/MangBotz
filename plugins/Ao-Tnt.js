import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/Tnt.m4a'
conn.sendFile(m.chat, vn, 'Tnt.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Tnt/
handler.help = ['Tnt']
handler.tags = ['audio']
handler.owner = true
handler.command = new RegExp
export default handler
