import express, { Request, Response } from "express";
import p from "puppeteer";

import { FormatDate } from "./helpers/formatDate";
import { ConvertAgentNotif } from "./helpers/notifAgents";
import {
  ClickHelper,
  DiseaseClickHelper,
  NumberOfAnimalsFiller,
} from "./helpers/clickHelper";

const adjustDate = FormatDate;
const agentConvert = ConvertAgentNotif;
const clicker = ClickHelper;
const diseaseClicker = DiseaseClickHelper;
const fillAnimalNumber = NumberOfAnimalsFiller;
const app = express();

export type ReqTypeProps = {
  date: string;
  agent:
  | "Propietário ou responsável pelos animais"
  | "Funcionário"
  | "Pessoal de laboratório ou de diagnóstico"
  | "Médico Veterinário de Clínica Privada"
  | "Médico Veterinário habilitado pelo SVO"
  | "Médico Veterinário da AGED";
  animals: [{ type: string; signal: number[] }];
  // disease: boolean;
  // signals: number[];
};

app.use(express.json());

app.get("/", (req: Request, res: Response) => res.json("Running..."));

app.post("/scrape", async (req: Request, res: Response) => {
  const { date, agent, animals } = req.body as ReqTypeProps;

  if (!date || !agent || !animals) {
    return res.status(400).json({ error: "Missing parameters" })
  }

  const browser = await p.launch({ headless: false });
  const page = await browser.newPage();

  // await page.setViewport({ width: 1024, height: 1600 });

  await page.goto(
    "https://sistemasweb4.agricultura.gov.br/sisbravet/manterNotificacao!abrirFormularioInternet.action"
  );

  const l = await page.$(`#tipoNotificante_${agentConvert(agent)}`);
  await l?.evaluate((c: any) => c?.click());

  await page.type("#dataInicioProblema", adjustDate(date));
  const dateType = await page.$("#dataInicioProblema");
  await dateType?.press("Enter");

  clicker(animals, page);
  diseaseClicker(animals, page);
  setTimeout(() => {
    fillAnimalNumber(animals, page);
  }
    , 2000);
});

app.listen(8080, () => console.log("Server is running!"));
