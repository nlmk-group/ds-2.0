export const quarterFormatInput = (date: Date) =>
  `${Math.floor((date.getMonth() + 3) / 3)} квартал ${date.getFullYear()}`;
