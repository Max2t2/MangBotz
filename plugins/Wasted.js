import { sticker } from '../lib/sticker.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  await m.reply(global.wait)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.com/canvas/overlay/wasted?avatar=${url}`
  let stiker = await sticker(null, wasted, 'Wasted', wm)
  conn.sendFile(m.chat, stiker, m)
}
handler.help = ['wasted (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^wasted$/i
export default handler
