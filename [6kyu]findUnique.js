function findUnique(arr) {
    arr.sort((a,b) => { return a-b; });
    return (arr[0] !== arr[1]) ? arr[0] : arr[arr.length-1];
}
  