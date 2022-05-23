module.exports = {
  formatDate: (date) => {
    const adjustedDate = date.slice(0, 10);
    const splitDate = adjustedDate.split("-");

    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  },
};
