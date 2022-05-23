const express = require("express");
const p = require("puppeteer");

const formatDate = require("./helpers/formatDate");
const adjustAgent = require("./helpers/notifAgents");
const clickHelper = require("./helpers/clickHelper");

const adjustDate = formatDate.formatDate;
const agentConvert = adjustAgent.convertAgentNotif;
const clicker = clickHelper.clickHelper;

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Running..."));

app.post("/scrape", (req, res) => {
  const { date, agent, animals } = req.body;

  const scrape = async () => {
    const browser = await p.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1024, height: 1600 });

    await page.goto(
      "https://sistemasweb4.agricultura.gov.br/sisbravet/manterNotificacao!abrirFormularioInternet.action"
    );

    const l = await page.$(`#tipoNotificante_${agentConvert(agent)}`);
    await l.evaluate((c) => c.click());

    await page.type("#dataInicioProblema", adjustDate(date));

    clicker(animals, page);
  };
  scrape();
});

app.listen(8080, () => console.log("Server is running!"));
