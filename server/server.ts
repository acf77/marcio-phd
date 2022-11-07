import express, { Request, Response } from "express";
import p from "puppeteer";

import { FormatDate } from "./helpers/formatDate";
import { ConvertAgentNotif } from "./helpers/notifAgents";
import { ClickHelper } from "./helpers/clickHelper";
import { AbelhaClicker } from "./helpers/abelhaClicker";

const adjustDate = FormatDate;
const agentConvert = ConvertAgentNotif;
const clicker = ClickHelper;
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
  disease: boolean;
  signals: number[];
};

app.use(express.json());

app.get("/", (req: Request, res: Response) => res.json("Running..."));

app.post("/scrape", (req: Request, res: Response) => {
  const { date, agent, animals, disease, signals } = req.body as ReqTypeProps;

  (async () => {
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

    if (disease) {
      const placeToClick = await page.$("#stSinalDoencaS");
      // @ts-ignore
      await placeToClick?.evaluate((c) => c?.click());
      // @ts-ignore
      if (animals.includes("Abelhas")) {
        AbelhaClicker(page);
      }
      // @ts-ignore
      if (animals.map((a) => a.type.includes("Asinino"))) {
        animals.map(async (signal) => {
          signal.signal.map(async (s) => {
            const placeToClick = await page.waitForXPath(
              `//*[@id='sinalClinico_20583|${s}']`
            );
            console.log(`//*[@id='sinalClinico_20583|${s}']`);
            // @ts-ignore
            await placeToClick?.evaluate((c) => c?.click());
          });
        });
      }

      // @ts-ignore
    } else {
      const placeToClick = await page.$("#stSinalDoencaN");
      // @ts-ignore
      await placeToClick?.evaluate((c) => c?.click());
    }
  })();
});

app.listen(8080, () => console.log("Server is running!"));
