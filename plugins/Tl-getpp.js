import fetch from 'node-fetch'
let handler = async(m) => {
    try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let url = await conn.profilePictureUrl(who, 'image')
    await conn.sendFile(m.chat, url, 'profile.jpg', `@${who.split`@`[0]}`, m, null, { mentions: [who]})
    }catch (e) {
                await m.reply('profile private')
            }
}
handler.command = /^(get(pp|profile))$/i
handler.help = ['getprofile [@users]']
handler.tags = ['tools']
export default handler
