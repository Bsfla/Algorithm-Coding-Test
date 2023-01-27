function calculateExpire(todayDate, date, validPeriod) {
  const [todayYear, todayMonth, today] = todayDate.split(".").map(Number);
  let [year, month, day] = date.split(".").map(Number);

  month += validPeriod;
  day -= 1;

  if (day < 1) {
    day = 28;
    month -= 1;
  }

  if (month > 12) {
    year += Math.floor(month / 12);
    month %= 12;

    if (!month) {
      month = 12;
      year -= 1;
    }
  }

  if (todayYear > year) return false;
  if (todayYear === year) {
    if (todayMonth > month) {
      return false;
    } else if (todayMonth === month) {
      if (today > day) return false;
    }
  }

  return true;
}

function solution(today, terms, privacies) {
  const validPeriod = {};
  const result = [];

  terms.forEach((el) => {
    const term = el.split(" ");
    validPeriod[term[0]] = Number(term[1]);
  });

  privacies.forEach((el, index) => {
    const [date, type] = el.split(" ");

    const expire = calculateExpire(today, date, validPeriod[type]);

    if (!expire) result.push(index + 1);
  });

  return result;
}
