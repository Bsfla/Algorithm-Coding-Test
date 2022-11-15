function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridgeSum = 0;

  time++;
  bridge.shift();
  bridgeSum += truck_weights[0];
  bridge.push(truck_weights.shift());

  while (bridgeSum > 0) {
    time++;
    bridgeSum -= bridge.shift();

    if (truck_weights.length > 0 && bridgeSum + truck_weights[0] <= weight) {
      bridgeSum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else bridge.push(0);
  }

  return time;
}

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let que = [[0, 0]];
  let bridgeWeight = 0;

  while (que.length > 0 || truck_weights.length > 0) {
    if (que[0][1] === time) {
      bridgeWeight -= que[0][0];
      que.shift();
    }

    if (bridgeWeight + truck_weights[0] <= weight) {
      bridgeWeight += truck_weights[0];
      que.push([truck_weights.shift(), bridge_length + time]);
    }

    time++;
  }

  return time;
}
