export function inputValidation(value: string) {
  //input max length 8 digits
  if (value.length > 8) {
    value = value.slice(0, 8);
  }
  //only digits and just one dot
  if (value.match(/[^.0-9]/) || value.match(/\.\./)) {
    value = value.slice(0, -1);
  }
  //max 2 digits after dot
  if (value.match(/\./)) {
    value = value.slice(0, value.indexOf(".") + 3);
  }
  return value;
}
