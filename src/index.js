let marvel = require('marvel-characters');
let https = require ('https');

console.log(marvel()); //test to see if it works
let fs = require ('fs');
let PDFDocument = require('pdfkit');
let spdfText;

for (character of marvel.characters){
    spdfText += `A charcter: ${character}\n`;
}
console.log(spdfText);

let makePDF = new PDFDocument;
makePDF.pipe(fs.createWriteStream('src/characters.pdf'))
makePDF.font('Times-Roman')
    .fontSize(25)
    .text(spdfText, 50, 50);
makePDF.end();


let photoURL = 'https://miro.medium.com/max/1200/1*m5RYM_Wkj4LsZewpigV5tg.jpeg';
https.get(photoURL, (res) =>{
    res.pipe(fs.createWriteStream(__dirname + '/nodejs-logo.jpeg'))
})