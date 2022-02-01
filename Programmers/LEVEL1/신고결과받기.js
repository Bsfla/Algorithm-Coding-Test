function solution(id_list, report, k) {
  const result = id_list.map((el) => (el = 0));
  const reportList = report
    .filter((el, idx) => {
      return report.indexOf(el) === idx;
    })
    .map((el) => {
      return el.split(" ");
    });
  const reportCounts = {};
  let count = 0;

  for (let id of id_list) {
    for (let report of reportList) {
      if (id === report[1]) {
        count += 1;
      }
    }
    reportCounts[id] = count;
    count = 0;
  }

  for (let report of reportList) {
    if (reportCounts[report[1]] >= k) {
      result[id_list.indexOf(report[0])] += 1;
    }
  }

  return result;
}

function solution(id_list, report, k) {
  const result = id_list.map((el) => (el = 0));
  const reportList = {};

  id_list.map((user) => {
    reportList[user] = [];
  });

  report.map((reportUser) => {
    const [userId, reportId] = reportUser.split(" ");
    if (!reportList[reportId].includes(userId))
      reportList[reportId].push(userId);
  });

  for (let key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].map((el) => {
        result[id_list.indexOf(el)] += 1;
      });
    }
  }

  return result;
}
