const express = require("express");
const p = require("puppeteer");

const app = express();

app.get("/", (req, res) => res.json("Running..."));

app.post("/scrape", (req, res) => {
  const scrape = async () => {
    const browser = await p.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://sistemasweb4.agricultura.gov.br/sisbravet/manterNotificacao!abrirFormularioInternet.action"
    );

    // const title = await page.waitForSelector(
    //   "#manterNotificacaoForm_notificacaointernet_subtitulo_um"
    // );
    // const titleText = await page.evaluate((text) => text.textContent, title);
    // console.log(titleText);

    await page.click(
      "#manterNotificacaoForm > div:nth-child(24) > label:nth-child(3)"
    );

    await page.type("#dataInicioProblema", "30/12/1991");
    await page.click("#especieAfetada_20583");
    // const doneByText = await page.evaluate((text) => text.textContent, doneBy);
  };
  scrape();
});

app.listen(8080, () => console.log("Server is running!"));
