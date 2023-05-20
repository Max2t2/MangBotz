import { sticker } from '../lib/sticker.js'

import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

  await m.reply(global.wait)

  let q = m.quoted ? m.quoted : m

	let mime = (q.msg || q).mimetype || q.mediaType || ''
		
  if (!mime) throw 'Tidak ada foto'

  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`

  let img = await q.download()

  let url = await uploadImage(img)

  let trigger = `https://some-random-api.com/canvas/overlay/triggered?avatar=${url}`

  let stiker = await sticker(null, trigger, 'Triggered', wm)

  conn.sendFile(m.chat, stiker, m)

}

handler.help = ['trigger (caption|reply media)']

handler.tags = ['sticker']

handler.command = /^trigger$/i

export default handler
