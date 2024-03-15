export default function getFormattedNumber(number) {
  const result = "+998" + number.replace(/\D/g, "");
  return result;
}
