let flag = true;
let flagSc = true;

function checkValue(answer, input) {
  if (
    (input != "/" &&
      input != "*" &&
      input != "-" &&
      input != "+" &&
      input != "=" &&
      input != "C") ||
    answer.value == "Cannot divide by zero" ||
    answer.value == "0"
  ) {
    answer.value = "";
    answer.value += input;
  } else if (input != "=" && input != "C") {
    answer.value += input;
  }
  return answer;
}

function calculate(answer) {
  result = eval(answer.value);
  if (result == "Infinity") {
    result = "Cannot divide by zero";
  }
  return result;
}

function checkOperator(answer) {
  var lastIndex = answer.value.charAt(answer.value.length - 1);
  if (
    lastIndex == "/" ||
    lastIndex == "*" ||
    lastIndex == "-" ||
    lastIndex == "+"
  ) {
    answer.value = answer.value.slice(0, answer.value.length - 1);
  }
}

/*function writeOp(input) {
  var answer = document.getElementById("answer");

  if (answer.value == "0" || answer.value == "Cannot divide by zero") {
    answer = checkValue(answer, input);
  } else if (input == "C") {
    answer.value = "0";
  } else if (input == "=") {
    checkOperator(answer);
    result = calculate(answer);
    answer.value = result;
    flag = false;
  } else {
    if (input == "/" || input == "*" || input == "-" || input == "+") {
      checkOperator(answer);
    }
    //answer = checkFlag(answer, flag);
    if (flag == false) {
      //is number
      if (!isNaN(input)) {
        answer.value = "";
      }
      flag = true;
    }
    answer.value += input;
  }
}*/

function checkFlag(answer) {
  if (flag == false) {
    //is number
    if (!isNaN(input)) {
      answer.value = "";
    }
    flag = true;
  }
  return answer;
}

function getElem(idItem) {
  return document.getElementById(idItem);
}

function writeOpSc(input, answer) {
  //var answer = document.getElementById("answerSc");
  if (answer.value == "0" || answer.value == "Cannot divide by zero") {
    answer = checkValue(answer, input);
  } else if (input == "C") {
    answer.value = "0";
  } else if (input == "=") {
    checkOperator(answer);
    result = calculate(answer);
    answer.value = result;
    flag = false;
  } else {
    if (input == "/" || input == "*" || input == "-" || input == "+") {
      checkOperator(answer);
    }
    //x2
    if (input == "x2") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.pow(result, 2);
      flag = false;
      return;
    }
    //x3
    if (input == "x3") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.pow(result, 3);
      flag = false;
      return;
    }
    //Raiz
    if (input == "raiz") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.sqrt(result);
      flag = false;
      return;
    }
    if (flag == false) {
      //is number
      if (!isNaN(input)) {
        answer.value = "";
      }
      flag = true;
    }
    //answer = checkFlag(answer, flag);
    answer.value += input;
  }
}
