function solution(votes) {
  const candidate = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  for (let vote of votes) {
    candidate[vote] += 1;
  }

  return Object.entries(candidate).sort((a, b) => b[1] - a[1])[0][0];
}

/**
 * new Map() – 맵을 만듭니다.
    map.set(key, value) – key를 이용해 value를 저장합니다.
    map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
    map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
    map.delete(key) – key에 해당하는 값을 삭제합니다.
    map.clear() – 맵 안의 모든 요소를 제거합니다.
    map.size – 요소의 개수를 반환합니다.
 */
function solution(s) {
  const map = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  for (let el of s) {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  }

  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      result = key;
    }
  }

  return result;
}

//3
function solution(votes) {
  const candidate = {};
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  for (let vote of votes) {
    if (vote in candidate) candidate[vote] += 1;
    else candidate[vote] = 1;
  }

  for (let key in candidate) {
    if (candidate[key] > max) {
      max = candidate[key];
      result = key;
    }
  }

  return result;
}
