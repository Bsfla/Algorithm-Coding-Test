function solution(cacheSize, cities) {
  const buffer = [];
  let playTime = 0;

  for (let i = 0; i < cities.length; i++) {
    const cacheIndex = buffer.indexOf(cities[i].toLowerCase());

    if (cacheIndex !== -1) {
      buffer.splice(cacheIndex, 1);
      playTime += 1;
    } else {
      playTime += 5;
    }

    buffer.push(cities[i].toLowerCase());

    if (buffer.length > cacheSize) buffer.shift();
  }

  return playTime;
}
