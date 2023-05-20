import fetch from 'node-fetch'

let zzz = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© MangBotz', m, 0, { thumbnail: await (await fetch(img)).buffer() }) 
    }
handler.help = ['ukhty']
handler.tags = ['internet']
//handler.limit = false
handler.command = /^(ukhty)$/i

export default handler

