import fetch from 'node-fetch'

import axios from 'axios'

import cheerio from 'cheerio'

import { 

AniPlanetSearch,

AntaraNews,

CNBCNews,

CNNNews,

Cerpen,

DailyNews,

DetikNews,

FajarNews,

IndozoneNews,

JalanTikusMeme,

KiryuuSearch,

KissMangaSearch,

KlikMangaSearch,

KompasNews,

KontanNews,

MangakuSearch,

Mangatoon,

MerdekaNews,

OkezoneNews,

Quotes,

TribunNews,

iNews,

 } from 'dhn-api'

let handler = async (m, { text, args, usedPrefix, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())

let name = await conn.getName(who)

if (!args[0]) {

let hasil = [

"AniPlanetSearch",

"AntaraNews",

"CNBCNews",

"CNNNews",

"Cerpen",

"DailyNews",

"DetikNews",

"FajarNews",

"IndozoneNews",

"JalanTikusMeme",

"KiryuuSearch",

"KissMangaSearch",

"KlikMangaSearch",

"KompasNews",

"KontanNews",

"MangakuSearch",

"Mangatoon",

"MerdekaNews",

"OkezoneNews",

"Quotes",

"TribunNews",

"iNews",

]

	let row = Object.keys(hasil).map((v, index) => ({		title: 'Scraper ' + hasil[v],

		description: '\nNo. ' + index,

		rowId: usedPrefix + 'dhn ' + hasil[v] + ' |naruto'

	}))

	let button = {

		buttonText: `☂️ Scraper Disini ☂️`,

		description: `⚡ Silakan pilih Scraper di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,

		footerText: wm

	}

	return await conn.sendListM(m.chat, button, row, m)

	}

let blum = 'Fitur Ini Belum ditambahkan'

let kueri =  'Masukkan Query\nEx. ' + usedPrefix + command + ' anime |naruto'

let urut = text.split`|`

  let one = urut[1]

  let two = urut[2]

  let three = urut[3]

  

if (args[0] == 'AniPlanetSearch') {

if (!one) throw kueri

let gas = await AniPlanetSearch(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'AntaraNews') {

if (!one) throw kueri

let gas = await AntaraNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'CNBCNews') {

if (!one) throw kueri

let gas = await CNBCNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'CNNNews') {

if (!one) throw kueri

let gas = await CNNNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'Cerpen') {

if (!one) throw kueri

let gas = await Cerpen(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'DailyNews') {

if (!one) throw kueri

let gas = await DailyNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'DetikNews') {

if (!one) throw kueri

let gas = await DetikNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'FajarNews') {

if (!one) throw kueri

let gas = await FajarNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'IndozoneNews') {

if (!one) throw kueri

let gas = await IndozoneNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'JalanTikusMeme') {

if (!one) throw kueri

let gas = await JalanTikusMeme(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'KiryuuSearch') {

if (!one) throw kueri

let gas = await KiryuuSearch(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'KissMangaSearch') {

if (!one) throw kueri

let gas = await KissMangaSearch(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'KlikMangaSearch') {

if (!one) throw kueri

let gas = await KlikMangaSearch(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'KompasNews') {

if (!one) throw kueri

let gas = await KompasNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'KontanNews') {

if (!one) throw kueri

let gas = await KontanNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'MangakuSearch') {

if (!one) throw kueri

let gas = await MangakuSearch(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'Mangatoon') {

if (!one) throw kueri

let gas = await Mangatoon(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'MerdekaNews') {

if (!one) throw kueri

let gas = await MerdekaNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'OkezoneNews') {

if (!one) throw kueri

let gas = await OkezoneNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'Quotes') {

if (!one) throw kueri

let gas = await Quotes(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'TribunNews') {

if (!one) throw kueri

let gas = await TribunNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

if (args[0] == 'iNews') {

if (!one) throw kueri

let gas = await iNews(one)

throw await clean(JSON.stringify(gas, null, 4))

}

}

handler.tags = ["tools"]

handler.help = ["dhn <args> |query"]

handler.command = ["dhn"]

export default handler

function clean(string) {

    return string.replace(/{/g, '').replace(/}/g, '')

                 .replace(/"/g, '')

}
