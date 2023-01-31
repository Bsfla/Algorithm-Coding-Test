function filterSplitStr(str) {
  const arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].match(/[a-zA-Z]/) && str[i + 1].match(/[a-zA-Z]/))
      arr.push(str[i] + str[i + 1]);
  }

  return arr.sort();
}

function solution(str1, str2) {
  const strOneUpper = str1.toUpperCase();
  const strTwoUpper = str2.toUpperCase();

  const splitOneList = filterSplitStr(strOneUpper);
  const splitTwoList = filterSplitStr(strTwoUpper);

  const union = [];
  const intersection = [];

  splitOneList.forEach((el, index) => {
    if (splitTwoList.includes(el)) {
      intersection.push(splitTwoList.splice(splitTwoList.indexOf(el), 1));
    }
    union.push(el);
  });

  splitTwoList.forEach((el) => union.push(el));

  if (!union.length) return 65536;

  return Math.floor((intersection.length / union.length) * 65536);
}
