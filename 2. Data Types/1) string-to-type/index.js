function stringToType(str) {
  const values = {
    'null': null,
    'undefined': undefined,
    'true': true,
    'false': false,
  };

  if (str === '') return '';

  if (!isNaN(Number(str))) {
    return Number(str)
  }

  if (Object.keys(values).includes(str)) {
    return values[str];
  }

  return str;
}

window.stringToType = stringToType;

export default stringToType;
