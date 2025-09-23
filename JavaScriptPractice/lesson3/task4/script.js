function whatWeekday(DayNum) {
    DayNum = prompt('Введите порядок дня')
    switch (DayNum) {
        case '1':
            alert('Понедельник');
            break;
        case '2':
            alert('Вторник');
            break;
        case '3':
            alert('Среда');
            break;
        case '4':
            alert('Четверг');
            break;
        case '5':
            alert('Пятница');
            break;
        case '6':
            alert('Суббота');
            break;
        case '7':
            alert('Воскресенье');
            break;
        default:
            alert('Введите число от 1 до 7');
            break;
    }
}

whatWeekday();

function Greeting(name) {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        alert(`Доброе утро, ${name}`);
    } else if(hour >= 12 && hour < 16) {
        alert(`Добрый день, ${name}`);
    } else if(hour >= 16 && hour < 21) {
        alert(`Добрый вечер, ${name}`);
    } else if(hour >= 21) {
        alert(`Спокойной ночи, ${name}`);
    } 
}

let Name = prompt("Как вас зовут");
Greeting(Name4);