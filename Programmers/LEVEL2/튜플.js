function solution(s) {
  const set = new Set();

  s.replace(/{/g, "")
    .split("}")
    .filter((el) => el !== "")
    .map((el) => {
      if (el[0] === ",") return el.replace(",", "").split(",");
      return el.split(",");
    })
    .sort((a, b) => a.length - b.length)
    .forEach((el) => {
      el.forEach((el) => set.add(Number(el)));
    });

  return Array.from(set);
}
