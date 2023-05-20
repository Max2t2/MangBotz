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

  let tonikawa = `https://some-random-api.com/canvas/misc/tonikawa?avatar=${url}`

  let stiker = await sticker(null, tonikawa, 'tonikawa', wm)

  conn.sendFile(m.chat, stiker, m)

}

handler.help = ['tonikawa (caption|reply media)']

handler.tags = ['sticker']

handler.command = /^tonikawa$/i

export default handler
