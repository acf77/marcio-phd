export const FormatDate = (date: string) => {
  const adjustedDate = date?.slice(0, 10);
  const splitDate = adjustedDate?.split("-");

  console.log("date", date);
  console.log("splitDate", splitDate);

  return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
};
