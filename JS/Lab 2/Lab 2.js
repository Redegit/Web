


function riddles() {
    guesses = 0
    currentRiddle = 0

    riddle1 = {
        text: `Я создаю интернет-ресурсы,<br>
        И много знаю про кодирование и стили.<br>
        Если ты хочешь дизайн в совершенстве,<br>
        То ответ мой для тебя - кто я такой?<br>`,
        keys: ['веб-разработчик', 'веб разработчик']
    }
    riddle2 = {
        text: `Бинарный код,<br>
        Клавиши стучат ритмом.<br>
        Человек творит.<br>`,
        keys: ['программист']
    }

    riddles = [riddle1, riddle2]

    const showRiddle = (i) => {
        $('#riddle_heading').text(`Загадка ${i + 1}`)

        $('#riddle_text').html(
            `${riddles[i].text}<br>
            Кто же это?`
        )
    }


    handleInput = (value) => {
        riddleResult = $("#riddle_result")

        if (riddles[currentRiddle].keys.includes(value.toLowerCase())) {
            riddleResult.text("Верно!")
            guesses++
        } else {
            riddleResult.text("Неверно :(")
        }
        currentRiddle++
        if (currentRiddle >= riddles.length) {
            riddleResult.text(`Всего одгадано: ${guesses}`)
        } else {
            showRiddle(currentRiddle)
        }

    }
    const inputField = $('#riddle_input');

    inputField.keyup(function (event) {
        if (event.keyCode === 13) {
            const value = inputField.val();

            handleInput(value);

            inputField.val('');
        }
    });

    showRiddle(currentRiddle)
}

function task2() {
    view = document.getElementById("task2_view")
    view.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        view.innerHTML += `<p>${i}</p>`
    }
}

function task3() {
    const inputField = $('#task3_input');
    const textField = $('#task3_text')

    counter = 1

    inputField.keyup(function (event) {
        if (event.keyCode === 13) {
            const value = inputField.val();

            handleInput(value);

            inputField.val('');
        }

        handleInput = (value) => {
            if (value == "1") {
                textField.text("Вот блин :(")
            } else {
                counter++
                textField.text(`Еще по одной? x${counter}`)
            }
        }
    })
}

function task4() {
    const inputField = $('#task4_input');

    inputField.keyup(function (event) {
        if (event.keyCode === 13) {
            const value = inputField.val();

            handleInput(value);

            inputField.val('');
        }

        handleInput = (value) => {
            n = parseInt(value)
            if (isNaN(n)) n = 24;

            factorial = (i) => {
                if (i == 1) {
                    return 1;
                } else {
                    return i * factorial(i - 1);
                }
            }

            $("#task4_result").text(`Факториал ${n}: ` + factorial(n))
        }
    })
}

function task5() {
    const inputField = $('#task5_input');

    inputField.keyup(function (event) {
        if (event.keyCode === 13) {
            const value = inputField.val();

            handleInput(value);

            inputField.val('');
        }

        handleInput = (surname) => {
            if (surname === "") {
                surname = "Преснухин";
            }

            checkPalindrome = (string) => {
                string = string.toLowerCase();
                l = string.length - 1;
                for (let i = 0; i < l; i++) {
                    if (string[i] !== string[l - i]) {
                        return false
                    }
                }
                return true
            }

            checkPalindrome(surname)
                ? $("#task5_result").text(`${surname} - палиндром`)
                : $("#task5_result").text(`${surname} - не палиндром`)
        }
    })
}

function task6() {

    const inputField = $('#task6_input');

    inputField.keyup(function (event) {
        if (event.keyCode === 13) {
            const value = inputField.val();

            handleInput(value);

            inputField.val('');
        }

        handleInput = (value) => {
            n = parseInt(value)
            if (isNaN(n)) n = 24;

            Eratosthenes = (n) => {
                let primes = [];
                for (let i = 2; i <= n; i++) {
                    primes[i] = true;
                }

                for (let i = 2; i <= Math.sqrt(n); i++) {
                    if (primes[i]) {
                        for (let j = i * i; j <= n; j += i) {
                            primes[j] = false;
                        }
                    }
                }

                let result = [];
                for (let i = 2; i <= n; i++) {
                    if (primes[i]) {
                        result.push(i);
                    }
                }

                return result;
            }

            $("#task6_result").text(Eratosthenes(n))
        }
    })
}

$(document).ready(function () {
    riddles()
    task3()
    task4()
    task5()
    task6()
});

