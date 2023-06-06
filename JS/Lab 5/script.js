userList = []

class User {

    constructor(id, name, age) {
        this.id = id
        this.name = name;
        this.age = age;
        userList.push(this)
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}, I'm ${this.age} y.o.`);
    }
}

class Input {

    constructor(object) {
        this.object = object;
    }

    resetValue() {
        this.object.value = ''
    }

    getValue() {
        return this.object.value
    }
}


// Fetch с mockAPI
fetch(
    "https://647eceefc246f166da8f650c.mockapi.io/api/users",
    { method: "GET" }
).then(response => response.json()
).then(data => {
    data.map(({ id, name, age }) => {
        new User(id, name, age);
    });
    showUsers()
})


// Работа с формой
const form = document.querySelector('#register');
const nameInput = new Input(document.querySelector('#name'));
const ageInput = new Input(document.querySelector('#age'));

form.addEventListener('submit', event => {
    event.preventDefault();
    name = nameInput.getValue();
    age = ageInput.getValue();

    nameInput.resetValue()
    ageInput.resetValue()

    let newId = 0;
    userList.map(user => {
        newId = Math.max(user.id, newId)
    })

    const user = new User(newId + 1, name, age)
    addUser(user)
    showUsers()
});


// Вывод данных таблицей
const showUsers = () => {
    const table = document.querySelector('#user-table');

    let newHTML = "<thead><th>ID</th><th>Name</th><th>Age</th></thead>"
    userList.map(({ id, name, age }) => {
        newHTML += `<tr><td>${id}</td><td>${name}</td><td>${age}</td></tr>`
    })

    table.innerHTML = newHTML;
}


// Отправка нового пользователя на mockAPI
const addUser = (user) => {
    fetch(
        `https://647eceefc246f166da8f650c.mockapi.io/api/users`,
        {
            method: "POST",
            body: JSON.stringify({ id: user.id, name: user.name, age: user.age })
        }
    ).then(response => console.log(response)
    ).catch(error => console.log(error))
}