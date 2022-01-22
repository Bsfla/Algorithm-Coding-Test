function solution(array, commands) {
  const newArray = [];

  for (let i = 0; i < commands.length; i++) {
    newArray.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
        return a - b;
      })[commands[i][2] - 1]
    );
  }

  return newArray;
}
