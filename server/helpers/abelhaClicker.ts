import { Page } from "puppeteer";
import { animalCodes } from "./animalsCode";

export const Clicker = async (page: Page, animal: string, signal: number) => {
  const placeToClick = await page.waitForXPath(
    // @ts-ignore
    `//*[@id='sinalClinico_${animalCodes[animal]}|${signal}']`
  );
  // @ts-ignore
  await placeToClick?.evaluate((c) => c?.click());
  console.log("#sinalClinico_22119|125");
};
export const AbelhaClicker = async (page: Page) => {
  const placeToClick = await page.waitForXPath(
    "//*[@id='sinalClinico_22119|125']"
  );
  // @ts-ignore
  await placeToClick?.evaluate((c) => c?.click());
  console.log("#sinalClinico_22119|125");
};

export const AsininoClicker = async (signal: number, page: Page) => {
  const placeToClick = await page.waitForXPath(
    `//*[@id='sinalClinico_20583|${signal}']`
  );
  // @ts-ignore
  await placeToClick?.evaluate((c) => c?.click());
  console.log("#sinalClinico_22119|125");
};
