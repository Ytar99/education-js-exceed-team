function searchString(obj) {
  const forbidden = [undefined, null, ''];
  const queueString = Object.keys(obj).reduce((str, prop) => {
    if (!forbidden.includes(obj[prop])) {
      return str + `&${prop}=${obj[prop]}`;
    }
    return str;
  }, '');

  if (queueString === '') return queueString;
  return '?' + queueString.slice(1, queueString.length);
}

window.searchString = searchString;

export default searchString;
