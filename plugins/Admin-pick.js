let handler = async (m, { text, args, participants, command }) => {
    if (args[0] < 0, args.length < 2) throw 'Example: #pick 5 anggota 1 tim'
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*🎉 Kamu Ter${command} sebagai ${text.replace(args, '').trimStart()}*
    
${new Array(Math.min(users.length, args[0])).fill().map(() => {
    let index = Math.floor(Math.random() * users.length)
    return `@${users.splice(index, 1)}`
}).join`\n`.replace(/@s.whatsapp.net/g,'')}`)
}
handler.help = ['pick <jumlah> <teks>']
handler.tags = ['group']
handler.command = /^pick/i
handler.admin = true
export default handler
