function numbersSum(num1, num2, num3) {
    console.log(num1+num2+num3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

numbersSum(param1, param2, param3);

function func(num = 5) {
    console.log(num * num);
}

func(2);
func(3);
func();