module.exports = {
  clickHelper: (animals, page) => {
    const clicker = async (d) => {
      const placeToClick = await page.$(`#especieAfetada_${animals[d]}`);
      await placeToClick?.evaluate((c) => c?.click());
    };

    const functionLoop = (data) => {
      for (let i = 0; i < data.length; i++) {
        clicker(i);
      }
    };

    functionLoop(animals);
  },
};
