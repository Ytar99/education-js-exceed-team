String.prototype.reverse = function () {
  let newStr = '';
  for (let char of this) {
    newStr = char + newStr;
  }
  return newStr;
};
