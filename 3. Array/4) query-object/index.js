import stringToType from '../../2. Data Types/1) string-to-type/index.js';

function queryToObject(query) {
  const arrOfProps = query.slice(1, query.length).split('&');
  const objFromArray = Object.fromEntries(
    arrOfProps.map((x) => x.split('='))
  );
  Object.keys(objFromArray).map(
    (key) => (objFromArray[key] = stringToType(objFromArray[key]))
  );
  return objFromArray;
}

window.queryToObject = queryToObject;

export default queryToObject;
