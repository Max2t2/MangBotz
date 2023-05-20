import  { readdirSync, rmSync } from 'fs'

let handler = async (m, { conn, text }) => {
 const dir = './images'
 readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
 let pesan = "The *tmp* folder has been cleaned"
 await m.reply(pesan)
}
handler.help = ['clearimg']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(clearimg)$/i
export default handler
