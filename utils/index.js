const puppeteer = require('puppeteer');
const PDFMerger = require('pdf-merger-js');
const path = require("path");

const createPdf = async (pdfUrls, hostname) => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        let files = [];
        for (const url of pdfUrls) {          
            const pdfPath = `pdf/${url}.pdf`;            
            await page.goto(`${hostname}${url}`, {waitUntil: 'networkidle2', timeout: 0});
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

const mergePdf = async (pdfFiles, output) => {
    const merger = new PDFMerger();
    pdfFiles.forEach(pdf => {
        merger.add(pdf);
    });
    await merger.save(output);
  };

module.exports = {
    createPdf,
    mergePdf
}