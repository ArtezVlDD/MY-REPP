// Сохраняем ответ пользователя в соответствующей переменной

let userAnswer = prompt("Как ты сейчас себя чувствуешь?");


// Применение условных операторов


if (userAnswer === "хорошо") {
    alert("Я за тебя очень рад!");
} else {
    if (userAnswer === "великолепно") {
        alert("Ладно");
    } else {
        if (userAnswer === "плохо") {
            alert("Не грусти, bro, все будет Okay!");
        } else {
            if (userAnswer === '') {
                alert("My Bro, ты написал nothing, напиши хоть что-нибудь readable, Okay?");
            } else {
                alert('Я тебя не понял, напиши понятнее');
            }
        }
    }
}


// Применение тернального операторa
// принцип работы: (CONDITION) ? YES : NO

//alert((userAnswer === "Хорошо") ? "I'm so glad to hear that!" : "I didn't get you, write something else, okay?");



