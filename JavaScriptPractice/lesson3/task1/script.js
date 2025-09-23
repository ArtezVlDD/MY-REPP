

function toGreet(firstName, lastName, age) {
    firstName = prompt('Введите имя');
    lastName = prompt('Введите фамилию');
    age = prompt('Введите возраст');
    alert(`Привет ${firstName} ${lastName} с возрастом ${age}`);
}

toGreet();


function toSquare(num) {
    alert(num**2);
}

let userNum2 = prompt('Введите число');
toSquare(userNum2);

function isNegative(num) {
    if (num < 0) {
        alert('---');
    } else {
        alert('+++');
    }
}

let userNum = prompt('Введите число');
isNegative(userNum);