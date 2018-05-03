const validISBN10 = isbn => {
    if (isbn.length !== 10) return false;
    const isbnArray = isbn
      .split('')
      .map((number, index) => {
        if (number === 'X' && index === isbn.length - 1) return 10;
        return number;
      })
      .map(Number);
    if (isbnArray.includes(NaN)) return false;
    return isbnArray.reduce((total, number, index) => total + number * (index + 1)) % 11 === 0;
};