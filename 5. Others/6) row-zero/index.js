function rowZero(str) {
  const zerosRegExp = new RegExp(/[0]+/g);
  const longestZerosRow = str.match(zerosRegExp);

  if (!longestZerosRow) return 0;

  return longestZerosRow.reduce((item, longest) => {
    return item > longest ? item : longest;
  }).length;
}

window.rowZero = rowZero;

export default rowZero;
