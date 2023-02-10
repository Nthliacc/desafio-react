export function currency (value: number) {
  const locale = "pt-BR";
  const currency = "BRL";
  const formattedValue = value.toLocaleString(locale, {
    style: "currency",
    currency,
  });
  
  return formattedValue;
};
