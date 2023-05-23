// Task 1
function task1() {
    const numbers = document.querySelector("#numbers");


    arr = []
    for (i = 0; i <= 15; i++) {
        arr[i] = Math.round(Math.random() * 40 - 10);
    }

    function avgPos(numbers) {
        let positiveCount = 0;
        let positiveSum = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 0) {
                positiveCount++;
                positiveSum += numbers[i];
            }
        }

        if (positiveCount > 0) {
            return positiveSum / positiveCount;
        } else {
            return null;
        }
    }

    const avg = avgPos(arr);

    numbers.textContent = `[${arr}], среднее среди положительных: ${avg.toFixed(2)}`
}

// Task 2 
function task2(n) {
    const output2 = document.querySelector("#output2");

    arr = []
    for (i = 0; i <= n; i++) {
        arr[i] = Math.round(Math.random() * 40 - 10);
    }

    squared = arr.map((n) => { return n < 0 ? n ** 2 : n })

    results_arr = []
    results_arr.push("Изначальный массив: " + arr)
    results_arr.push("Квадраты: " + squared)

    output2.replaceChildren()

    results_arr.forEach((res) => {
        const div = document.createElement("div")
        div.textContent = res
        output2.appendChild(div)
    })
}

const form = document.querySelector('#task2_form');
const input2 = document.querySelector('#task2_input');

form.addEventListener('submit', event => {
    event.preventDefault();
    task2(input2.value)
});

// Task 3 
// Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, 
// оставив остальные без изменения
const form3 = document.querySelector('#task3_form');
form3.addEventListener('submit', e => {
    e.preventDefault();

    const input3 = document.querySelector('#task3_input');
    const arr = input3.value.trim().split(" ").map(Number);

    const isInteger = arr.every((element) => {
        return Number.isInteger(element);
    });

    const output3 = document.querySelector("#output3");

    if (!isInteger) return output3.textContent = "Неверный ввод"

    const flex = document.createElement("div")
    flex.classList.add("d-flex", "flex-row", "gap-3", "flex-grow-1")
    arr.forEach((n) => {
        const div = document.createElement("div")
        div.textContent = n
        flex.appendChild(div)
    })
    output3.replaceChildren()
    output3.appendChild(flex)


    let sumPositive = 0;
    let countPositive = 0;
    let sumNegative = 0;
    let countNegative = 0;
    let countZero = 0;

    arr.forEach((n) => {
        if (n > 0) {
            sumPositive += n;
            countPositive++;
        } else if (n < 0) {
            sumNegative += n;
            countNegative++;
        } else {
            countZero++;
        }
    })

    const averagePositive = sumPositive / countPositive;
    const averageNegative = sumNegative / countNegative;

    results_arr = []
    results_arr.push(`Среднее арифметическое положительных чисел: ${averagePositive}`)
    results_arr.push(`Среднее арифметическое отрицательных чисел: ${averageNegative}`)
    results_arr.push(`Количество нулей: ${countZero}`)


    results_arr.forEach((res) => {
        const div = document.createElement("div")
        div.textContent = res
        output3.appendChild(div)
    })
})

function task4() {
    const genValue = () => {
        return Math.floor(Math.random() * 2.99999999);
    }

    arr = []
    for (i = 0; i <= 1000000; i++) {
        arr.push(genValue())
    }

    red_cnt = 0

    arr.forEach(n => {
        if (n === 0) red_cnt++;
    })

    const output4 = document.querySelector("#output4");
    output4.textContent = "Красный (0) выпал " + red_cnt + " раз"
}