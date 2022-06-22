function baseExpect(num) {
  if (!typeof num === 'number') {
    throw new Error('Wrong type of arguments');
  }

  const toBe = (equal) => num === equal;
  toBe.not = (notEqual) => num !== notEqual;

  return { toBe };
}

window.baseExpect = baseExpect;

export default baseExpect;
