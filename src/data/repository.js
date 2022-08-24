// data is set and stored here

// import values from '../components/useForm';
import { useState } from 'react';

const USERS_KEY = 'users1';
const USER_KEY = 'user';

// const [loggedIn, setLogggedin] = useState('');

// without parameter
function addUsers(inputFName, inputLName, inputEmail, inputPassword) {

    console.log(inputEmail, inputPassword);
    // Stops if data is already registered / in the data.
    // if (localStorage.getItem("users") !== null) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = {
      fName: inputFName,
      lName: inputLName,
      email: inputEmail,
      password: inputPassword,
    };

    users.push(user);
    // localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));
    console.log(localStorage.getItem("users"));
    
}

function getUserProperties(email) {
    // localStorage.getItem(USERS_KEY);

    let userData = {};
    
    const data = localStorage.getItem("users");
   
    for (const user of data) {
        if (user.email === email) {
            userData = {
                fName: user.fName,
                lName: user.lName,
                email: user.email,
                password: user.password,
              };
            
        }
    }
    return userData;
    // return data
}

// do i need this since i already parsed it when i first initalised users...
function getUsers() {
    const data = localStorage.getItem("users");

    return JSON.parse(data);
}

// for the login
function verifyUser(username, password) {
    const users = getUsers();

    for (const user of users) {
        if (user.email === username && user.password === password) {
            setUser(username);
            return true;
        }
    }
    
}

function setUser(username) {
    localStorage.setItem("users", username);
}

// supposed to be just the username ("USER_KEY")
function getUser() {
    // const users = getUsers();
    // return localStorage.getItem(users.email)
    return localStorage.getItem("users")
}

function getFName() {
    // const firstName = Object.create({}, { getFName: { value() { return this.fName; } } });
    // // myObj.foo = 'bar';
    // console.log(Object.values(firstName)); // ['bar']
    // return Object.values(firstName);
}


function removeUser() {
    localStorage.removeItem("users");
}

export {
    
    getUserProperties,
    addUsers,
    getFName,
    getUsers,
    verifyUser,
    getUser,
    removeUser
}

// FORUM

let defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

let threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}