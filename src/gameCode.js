var event, ok;
var history = {};

do { //Выводим первый вопрос
    history.firstQuest = works.a00;
    history.thirdQuest = works.d00;
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            history.firstAnswer = works.a1;
            history.secondQuest = works.b00;
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    history.secondAnswer = works.b1;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        history.thirdAnswer = event + '- ' + event + '-й ответ';

                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    history.secondAnswer = works.b2;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        history.thirdAnswer = event + '- ' + event + '-й ответ';

                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            history.firstAnswer = works.a2;
            history.secondQuest = works.c00;

            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    history.secondAnswer = works.c1;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        history.thirdAnswer = event + '- ' + event + '-й ответ';

                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    history.secondAnswer = works.c2;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        history.thirdAnswer = event + '- ' + event + '-й ответ';
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
do {
    myHistory = +prompt('Введите номер хода, историю которого хотите посмотреть. -1 - Выход');
    switch (myHistory) {
        case 1:
            alert("Первый вопрос был - " + history.firstQuest + " Вы дали ответ " + history.firstAnswer);
            break;
        case 2:
            alert("Второй вопрос был - " + history.secondQuest + " Вы дали ответ " + history.secondAnswer);
            break;
        case 3:
            alert("Третий вопрос был - " + history.thirdQuest + " Вы дали ответ " + history.thirdAnswer);
            break;
        case -1:
            ok = false;
            break;
        default:
            alert('Ошибка');
    }
} while (ok);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}