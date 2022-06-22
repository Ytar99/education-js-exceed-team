async function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }
      reject('Wrong type of data!');
    }, 1000);
  });
}

window.asyncSum = asyncSum;

export default asyncSum;
