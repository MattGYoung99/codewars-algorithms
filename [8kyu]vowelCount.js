function getCount(str) {
  return (str.match(/[aeiou]/gi) === null) ? 0 : str.match(/[aeiou]/gi).length;
}