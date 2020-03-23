import express from "express";
import compression from "compression";
import Utils from './utils/index';
import path from "path";
import { Resume } from './data';

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/download", (req, res) => {  
  (async () => {
    const hostname = `${req.protocol}://${req.headers.host}/`;  
    const mergePdfName = `${__dirname}/resume.pdf`;
    const pdfUrls = Object.keys(Resume);
    try {
      const pdfFiles = await Utils.createPdf(pdfUrls, hostname);
      //await Utils.mergePdf(pdfFiles, mergePdfName);

      res.download(pdfFiles[0],  (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Download");
        }
      });
    } catch (error) {
      console.log(error);
    }
  })();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));