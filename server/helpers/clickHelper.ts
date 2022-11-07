import { Page } from "puppeteer";

const animalToNumber = (animal: string) => {
  switch (animal) {
    case "Abelhas":
      return 22119;
    case "Asinino":
      return 20583;

    default:
      return 0;
  }
};

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
