const cheerio = require('cheerio')
async function titleScrape(url){
       try {
        await fetch(url)
        .then((res) => res.text())
        .then((html) => {
           const $ = cheerio.load(html)
           const pages = $("#pages")
           const innerPages = $(pages).find(".page")
           const titleArr = []
           $(innerPages).each((i, element) => {
            let title = $('.page-title', element).children('a').text()
            titleArr[i] = title
           })
           
           return console.log(titleArr)
        })
       }
       catch (err) {
            return console.log("ERROR:", err)
       }
}

titleScrape("https://www.scrapethissite.com/pages/")