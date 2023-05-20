import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
var tes = await goLens(text)
throw tes
}
handler.help = ["glens"]
handler.tags = ["search"]
handler.command = /^(glens)$/i
export default handler

async function goLens(url) {
 return new Promise((resolve, reject) => {
   const options = {
     method: 'GET',
     url: 'https://google-reverse-image-search.p.rapidapi.com/imgSearch',
     params: { url },
     headers: {
      'X-RapidAPI-Host': 'google-reverse-image-search.p.rapidapi.com',
      'X-RapidAPI-Key': '53513471femsh11b7c46a7da0a85p119682jsncc66a4e30134'
     }
   };

   axios.request(options).then(function (response) {
      var result = {
         status: response.status,
         imgUrl: response.data.imgUrl,
         url: response.data.googleSearchResult
      }
      resolve(result)
   }).catch(function (error) {
      console.error(error);
      var tek = {
         status: 404,
         msg: 'Server Error!'
      }
      resolve(tek)
   });
 })
}
