function solution(n, arr1, arr2) {
  const answer = [];
  const result = [];

  let sum = 0;
  let str = "";

  for (let i = 0; i < arr1.length; i++) {
    sum = arr1[i] | arr2[i];
    sum = sum.toString(2);
    answer.push(sum);
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[i][j] === "1") str += "#";
      else if (answer[i][j] === "0") str += " ";
    }

    if (answer[i].length !== n) {
      for (let k = 0; k < n - answer[i].length; k++) {
        str = " " + str;
      }
    }
    result.push(str);
    str = "";
  }
  return result;
}
//

function solution(n, arr1, arr2) {
  const result = arr1.map((el, idx) => {
    return (el | arr2[idx]).toString(2);
  });
  let str = "";

  return result.map((el, idx) => {
    str = el;
    if (el.length !== n) {
      for (let i = 0; i < n - el.length; i++) {
        str = "0" + str;
      }
    }
    return str
      .split("")
      .map((num) => {
        if (num === "0") return (num = " ");
        else if (num === "1") return (num = "#");
      })
      .join("");
  });
}

function solution(n, arr1, arr2) {
  const maps = arr1.map((element, index) => {
    const map = (element | arr2[index]).toString(2);
    return map.padStart(n, "0");
  });

  return maps.map((map) => {
    return map
      .split("")
      .map((password) => {
        if (password === "1") return "#";
        else return " ";
      })
      .join("");
  });
}
