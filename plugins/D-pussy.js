import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-pictures/main/puss.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`;
      let json = await res.json();
        let url = json[Math.floor(Math.random() * json.length)]
          await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'wangy wangy', '©KBOT', 'Get Again', '/pussy', m)
          }
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(pussy)$/i
export default handler