function sumCheck(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('Wrong arguments type!');
}

window.sumCheck = sumCheck;

export default sumCheck;
