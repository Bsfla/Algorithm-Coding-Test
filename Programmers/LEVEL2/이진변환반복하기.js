function solution(s) {
  let zeroCount = 0;
  let binaryTransformCount = 0;

  while (s !== "1") {
    zeroCount += s.split("").filter((el) => el === "0").length;
    s = s
      .split("")
      .filter((el) => el !== "0")
      .length.toString(2);
    binaryTransformCount += 1;
  }

  return [binaryTransformCount, zeroCount];
}
