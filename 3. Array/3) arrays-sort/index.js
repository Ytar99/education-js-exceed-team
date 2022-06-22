function arraysSort(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => {
    return Math.max(...a) - Math.max(...b);
  });
  return newArr;
}

window.arraysSort = arraysSort;

export default arraysSort;
