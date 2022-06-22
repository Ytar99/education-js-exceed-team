function fullSum(...args) {
  if (args.length === 0) return 0;

  return args.reduce((summ, num) => {
    if (typeof num === 'number') {
      return summ + num;
    }
    throw new Error('Wrong Argument Type');
  }, 0);
}

window.fullSum = fullSum;

export default fullSum;
