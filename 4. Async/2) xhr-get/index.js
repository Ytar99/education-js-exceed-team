async function xhrGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299)
        resolve(xhr.response);
      if (xhr.status > 300) reject(xhr.response);
      return;
    };
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
