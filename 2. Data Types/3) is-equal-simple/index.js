function isEqual(a, b) {
  if (a === null || b === null) return false;
  const arr = { ...a, ...b };
  for (let x of Object.keys(arr)) {
    if (!Object.keys(a).includes(x) || !Object.keys(b).includes(x))
      return false;
    if (a[x] !== b[x]) return false;
  }
  return true;
}

window.isEqual = isEqual;

export default isEqual;
