let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
*WELCOME TO MY GROUP*

Silahkan di isi intro di bawah ini.

╭════•›℘ ━ ━ ━ ━ ℘‹•════
│       *INTRO*
 |々 _Nama_ *:* 
 |々 _Umur_ *:* 
 l々 _Gender_ *:* 
 l々 _Asal_ *:* 
 |々 _Husbu/Waifu_ *:* 
 l々 _Anime favorit_ *:* 
 |々 _Tujuan masuk gc_ *:* 
╰════•›℘ ━ ━ ━ ━ ℘‹•════

*Selamat bergabung dan semoga betah.*
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i
handler.group = true

export default handler 
