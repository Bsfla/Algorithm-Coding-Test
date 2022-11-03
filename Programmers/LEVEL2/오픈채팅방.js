function solution(record) {
  const messages = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };
  const users = {};
  const result = [];

  record.forEach((chatting) => {
    const message = chatting.split(" ");

    if (message[0] === "Enter" || message[0] === "Change")
      users[message[1]] = message[2];
    if (message[0] === "Enter" || message[0] === "Leave") {
      result.push([message[0], message[1]]);
    }
  });

  return result.map((chatting) => {
    const [action, user] = chatting;
    return `${users[user]}${messages[action]}`;
  });
}
