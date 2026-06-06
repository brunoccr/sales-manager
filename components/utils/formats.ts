export const formatNumber = (
  value: number | undefined,
  precision: number = 0,
) => {
  if (value == undefined) {
    return "";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(value);
};

export const formatDate = (value: Date) => {
  const strDay = value.getDate().toString().padStart(2, "0");
  const strMonth = (value.getMonth() + 1).toString().padStart(2, "0");
  const strYear = value.getFullYear();

  return `${strDay}/${strMonth}/${strYear}`;
};

export const formatDateString = (value: string) => {
  return formatDate(new Date(value));
};
