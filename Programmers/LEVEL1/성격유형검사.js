function handleCompareScore(scores, personalityType) {
  const indicators = handleArrayDivision(scores);
  let answer = "";

  indicators.forEach((indicator) => {
    if (personalityType[indicator[0]] > personalityType[indicator[1]])
      answer += indicator[0];
    else if (personalityType[indicator[0]] < personalityType[indicator[1]])
      answer += indicator[1];
    else {
      answer += indicator[0];
    }
  });

  return answer;
}

function handleAddScore(choice) {
  const score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };

  return score[choice];
}

function handleArrayDivision(arr) {
  const length = arr.length;
  const divide = Math.floor(length / 2) + (Math.floor(length % 2) > 0 ? 1 : 0);
  const result = [];

  for (let i = 0; i <= divide; i++) {
    if (arr.length) result.push(arr.splice(0, 2));
  }

  return result;
}

function solution(survey, choices) {
  const personalityType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const typeScores = [];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 0 && choices[i] < 4)
      personalityType[survey[i][0]] += handleAddScore(choices[i]);
    else if (choices[i] > 4 && choices[i] < 8)
      personalityType[survey[i][1]] += handleAddScore(choices[i]);
  }

  for (let type in personalityType) {
    typeScores.push(type);
  }

  return handleCompareScore(typeScores, personalityType);
}

//2

function handleCompareScore(personalityType) {
  const typePoints = Object.entries(personalityType);
  let answer = "";

  for (let i = 0; i < typePoints.length; i += 2) {
    const [curType, curPoint] = typePoints[i];
    const [nextType, nextPoint] = typePoints[i + 1];

    if (curPoint < nextPoint) answer += nextType;
    else answer += curType;
  }

  return answer;
}

function handleAddScore(choice) {
  const score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };

  return score[choice];
}

function solution(survey, choices) {
  const typeScoreBoard = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 0 && choices[i] < 4)
      typeScoreBoard[survey[i][0]] += handleAddScore(choices[i]);
    else if (choices[i] > 4 && choices[i] < 8)
      typeScoreBoard[survey[i][1]] += handleAddScore(choices[i]);
  }

  return handleCompareScore(typeScoreBoard);
}
