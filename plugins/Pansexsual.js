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

  let pansexsual = `https://some-random-api.com/canvas/misc/pansexual?avatar=${url}`

  let stiker = await sticker(null, pansexsual, 'pansexsual', wm)

  conn.sendFile(m.chat, stiker, m)

}

handler.help = ['pansexsual (caption|reply media)']

handler.tags = ['sticker']

handler.command = /^pansexsual$/i

export default handler
