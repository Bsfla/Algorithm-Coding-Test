function solution(babbling) {
  const pronounces = ["aya", "ye", "woo", "ma"];
  let str = "";
  let babblingStr = [];
  let count = 0;

  babbling.forEach((el) => {
    el.split("").forEach((element) => {
      str += element;
      if (pronounces.includes(str)) {
        if (babblingStr[babblingStr.length - 1] !== str) {
          babblingStr.push(str);
          str = "";
        }
      }
    });
    if (el === babblingStr.join("")) count += 1;
    str = "";
    babblingStr = [];
  });
  return count;
}
