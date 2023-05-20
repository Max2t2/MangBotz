import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw `Contoh  ${usedPrefix + command} https://s.id`

	let lis = [
'https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=' + args[0] + '&full_page=true&fresh=true&output=image&file_type=jpg',
'https://api.popcat.xyz/screenshot?url=' + args[0],
'https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=' + args[0]
]
let liss = [
'shot.screenshotapi',
'api.popcat',
'api.apiflash'
]
let row = Object.keys(lis, liss).map((v, index) => ({
		title: 'By ' + liss[v],
		description: 'Bot ' + author,
		rowId: usedPrefix + 'get ' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t|sswebdown$/i

export default handler
