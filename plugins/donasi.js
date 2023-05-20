let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Three:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Ovo:* [${global.povo}]
│ • *Gopay:* [${global.pgopay}]
│ • *Dana:* [${global.pdana}]
❏────
`
let tm = {
text: text,
footer: global.wm,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
