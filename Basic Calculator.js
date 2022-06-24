function myFunction() {
  let num1 = 0;
  let num2 = 0;
  let totalnumber = 0;
  let calculator;
  let sign = prompt("Please Enter Operator Sign you want to perform E.g +-*/ ");
  if (sign == null || sign == "") {
    let warning =prompt("You did not enter any Operator sign");
  } else if (sign == "+") {
    num1 = Number(prompt("Enter First Number"));
    num2 = Number(prompt("Enter second number"));
    totalnumber = (num1+num2);
    prompt("The result is:", totalnumber);
  } else if (sign == "-") {
    num1 = prompt("Enter First Number");
    num2 = prompt("Enter second number");
    totalnumber = num1-num2;
    prompt("The result is:", totalnumber);
  } else if (sign == "*") {
    num1 = prompt("Enter First Number");
    num2 = prompt("Enter second number");
    totalnumber = num1*num2;
    prompt("The result is:", totalnumber);
  } else if (sign == "/") {
    num1 = prompt("Enter First Number");
    num2 = prompt("Enter second number");
    totalnumber = num1/num2;
    prompt("The result is:", totalnumber);

   // document.getElementById("calculator").innerHTML = calculator;//
  }
}

