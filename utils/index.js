const puppeteer = require('puppeteer');
const merge = require('easy-pdf-merge');
const path = require("path");

const createPdf = async (pdfUrls, hostname) => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        let files = [];
        for (const url of pdfUrls) {          
            const pdfPath = `pdf/${url}.pdf`;            
            await page.goto(`${hostname}${url}`, {waitUntil: 'networkidle2'});
            await page.pdf({
                path: pdfPath, 
                format: 'Legal',
                printBackground: true
            });
            files.push(pdfPath);
        };
        await browser.close(); 
        return files;     
    } catch (error) {
        console.log(error);
    }
}

const mergePdf = (pdfFiles, output) => {
    return new Promise((resolve, reject) => {
        merge(pdfFiles, output, function(err) {
            if(err) reject(err);
            resolve();
        });
    });
  };

module.exports = {
    createPdf,
    mergePdf
}