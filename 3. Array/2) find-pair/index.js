function findPair(arr) {
  const hash = {};
  arr.forEach((num) => {
    if (!hash[num]) hash[num] = 0;
    hash[num] += 1;
  });

  const pair = Object.keys(hash).find((key) => hash[key] === 2);
  if (isNaN(pair)) return null;
  return Number(pair);
}

window.findPair = findPair;

export default findPair;
