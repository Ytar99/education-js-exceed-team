function factorial(n) {
  return n === 1 ? 1 : factorial(n - 1) * n;
}

window.factorial = factorial;

export default factorial;
