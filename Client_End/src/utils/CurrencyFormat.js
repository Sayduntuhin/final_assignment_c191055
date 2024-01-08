export function CurrencyFormat(value) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  }
  