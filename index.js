var JSDOM = require('jsdom').JSDOM;
var Readability = require('readability');
JSDOM.fromURL("https://techcrunch.com/2019/10/01/instagram-vs-tiktok/").then(dom => {
    let reader = new Readability(dom.window.document);
    let article = reader.parse();
    
    console.log('title');
    console.log(article.title);
    console.log('content');
    console.log(article.content);
});