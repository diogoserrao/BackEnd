function calculator(num1,num2,operator){

    if (operator == "+")
        return num1 + num2;

    else if (operator == "-")
        return num1 - num2;

    else if (operator == "/")
        return num1 / num2;

    else if (operator == "*") 
        return num1 * num2;
    
    else if (operator == "^")
        return num1 ** num2;

}
console.log(calculator(2, 2, "+" ));
console.log(calculator(8, 4, "-" ));
console.log(calculator(10, 2, "/" ));
console.log(calculator(4, 4, "*" ));