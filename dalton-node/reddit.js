const fs = require("fs");
const path = require("path");
const rp = require("request-promise");

const redditPath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json").then(reddit => {
  let pop = JSON.parse(reddit);
  let redditInfo = [];
  pop.data.children.forEach(article => {
    let articleInfo = {
      title: article.data.title
    };
    redditInfo.push(articleInfo);
  });
  //    fs.write file here!!
  fs.writeFile(redditPath,JSON.stringify(redditInfo) , (err)=>{
      if(err) console.log(err)
      console.log('It Worked')
  })
});
