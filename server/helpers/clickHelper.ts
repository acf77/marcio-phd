import { Page } from "puppeteer";
import { animalToNumber } from "./animalsCode";




export const ClickHelper = (
  animals: [{ type: string; signal: number[] }],
  page: Page
) => {
  animals.forEach(async (animal) => {
    const placeToClick = await page.$(
      `#especieAfetada_${animalToNumber(animal.type)}`
    );
    // @ts-ignore
    await placeToClick?.evaluate((c) => c?.click());
    console.log(`#especieAfetada_${animalToNumber(animal.type)}`);
  });
};
export const DiseaseClickHelper = (
  animals: [{ type: string; signal: number[] }],
  page: Page
) => {
  animals.forEach(async (animal) => {
    if (animal.signal.length === 0) {
      const placeToClick = await page.$("#stSinalDoencaN");
      // @ts-ignore
      await placeToClick?.evaluate((c) => c?.click());
    }

    animal.signal.forEach(async (signal) => {
      const placeToClickDisease = await page.$("#stSinalDoencaS");
      // @ts-ignore
      await placeToClickDisease?.evaluate((c) => c?.click());

      const placeToClick = await page.waitForXPath(
        `//*[@id="sinalClinico_${animalToNumber(animal.type)}|${signal}"]`
      );
      // @ts-ignore
      await placeToClick?.evaluate((c) => c?.click());
      console.log(
        `//*[@id="sinalClinico_${animalToNumber(animal.type)}|${signal}"]`
      );
    });
  });
};

export const NumberOfAnimalsFiller = async (
  animals: [{ type: string; signal: number[] }],
  page: Page
) => {

  console.log("FILLING N OF ANIMALS", animals.length);

  await page.type('#qtdAnimais', String(animals.length));

};
