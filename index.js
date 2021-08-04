let marvel = require('marvel-characters');
console.log(marvel()); //test to see if it works
let fs = require ('fs');
let PDFDocument = require('pdfkit');
let spdfText;

for (character of marvel.characters){
    spdfText += `A charcter: ${character}\n`;
}
console.log(spdfText);

let makePDF = new PDFDocument;
makePDF.pipe(fs.createWriteStream('characters.pdf'))
makePDF.font('Times-Roman')
    .fontSize(25)
    .text(spdfText, 50, 50);
makePDF.end();