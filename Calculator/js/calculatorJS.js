let flag = true;
let flagSc = true;
let memory = 0;

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
function getLastChar(answer) {
  return answer.value.charAt(answer.value.length - 1);
}
function checkOperator(answer) {
  var lastIndex = getLastChar(answer);
  if (
    lastIndex == "/" ||
    lastIndex == "*" ||
    lastIndex == "-" ||
    lastIndex == "+"
  ) {
    answer.value = answer.value.slice(0, answer.value.length - 1);
  }
}
function deleteLastChar(answer) {
  var posLastValue = answer.value.length - 1;
  if (answer.value.length > 1) {
    answer.value = answer.value.slice(0, posLastValue);
  } else if (answer.value.length == 1 && answer.value != "0") {
    answer.value = "0";
  }
}
function percent() {
  var indexMult = answer.value.lastIndexOf("*");
  var percentValue = answer.value.slice(indexMult + 1);
  percentValue = percentValue / 100;
  answer.value = answer.value.slice(0, indexMult + 1) + percentValue;
}
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
  if (input == "M+") {
    checkOperator(answer);
    memory = calculate(answer);
    return;
  }
  if (input == "M-") {
    memory = 0;
    return;
  }
  if (input == "MC") {
    memory = 0;
    return;
  }
  if (input == "MR") {
    if (memory != 0) {
      answer.value = memory;
      return;
    }
    return;
  }
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

    if (input == "Percent") {
      percent(answer);
      return;
    }
    if (input == "delete") {
      deleteLastChar(answer);
      return;
    }
    if (input == "x2") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.pow(result, 2);
      flag = false;
      return;
    }
    if (input == "x3") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.pow(result, 3);
      flag = false;
      return;
    }
    if (input == "raiz") {
      checkOperator(answer);
      result = calculate(answer);
      answer.value = Math.sqrt(result);
      flag = false;
      return;
    }
    if (flag == false) {
      if (!isNaN(input)) {
        answer.value = "";
      }
      flag = true;
    }
    answer.value += input;
  }
}

function activateKeyboard() {}

