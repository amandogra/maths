const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
}

const getListOfQuestions = (firstNum, symbl = 'X', maxSecondNum, maxFirstNum) => {
  const numOfQuestions = 100;
  let arrOfQuestions = [];
  // loop for the requested number-of-questions times
  for (var i = 0; i < numOfQuestions; i++) {
    let secondNum = getRandomInt(1, maxSecondNum);
    let firstNumb = !!firstNum ? firstNum : getRandomInt(1, maxFirstNum);
    let questionString = `${firstNumb} ${symbl} ${secondNum} = ___`;
    console.log(questionString);
    arrOfQuestions.push(questionString);
  }
  return arrOfQuestions;
}
