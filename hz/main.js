// let elems = document.body.children;
// for (let elem of elems){
//     console.log(elem)
// }

// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)


// let elems = document.body.querySelectorAll('li')
// for (let elem of elems){
//         console.log(elem)
//     }
    

// let elems2 = document.querySelectorAll('.item')
// for (let elem2 of elems2){
//     console.log(elem2)
// }


// let elem = document.querySelectorAll('.list .item')
// let elem2 = elem.querySelectorAll('#num')
// console.log(elem)
// console.log(elem2)


// let elem = document.getElementById('num');
// elem.style.color = 'red';
// elem.innerHTML = '<h1>New text</h1>'
// console.log(elem)

// let item = document.querySelector('.item')
// item.outerHTML = '<h1>New text</h1>'
// console.log(item)

// let item = document.querySelector('.item')
// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden = false, 1500);

// let elem3 = document.querySelector('.alert')
// setTimeout(() => elem3.hidden = false, 1000)

// let newElem = document.createElement('div')
// newElem.innerHTML = '<strong>Hello</strong> I Love Python'
// console.log(newElem)
// document.body.append(newElem)

// document.querySelector('.item').insertAdjacentHTML('beforebegin',

//     `<div class="aller">
//         <strong>Hello</strong> I Love c++    
//     </div>`

// )

// let item = document.querySelector('li').cloneNode(true);
// console.log(item)
// document.querySelector('h1').after(item)
// item.style.background = 'yellow'
// let elem = document.querySelector('p').nextElementSibling
// elem.style.cssText = `paddind: 15px;
//                       border: 1px solid #d6e9c6;
//                       border-readius: 4px;
//                       color: #3c4c2f;
//                       background-color: #e5eedd;
//                       `
// console.log(document.querySelector('.alert'))

// let elem2 = document.querySelector('.alert')
// console.log(elem2.className)
// setTimeout(() => elem2.classList.add('new'), 2000)
// setInterval(() => elem2.classList.toggle('new'), 2000)
// elem.classList.remove('.alert')

// let size = getComputedStyle(elem2, '::before').fontSize
// console.log(parseInt(size))
// size = parseInt(size)

// elem2.style.marginTop = size * 10 + 'px';

// let link = document.querySelector('.link');
// let input = document.querySelector('.input');

// console.log(link.href)
// input.value = 'Vasya'
// console.log(input.value)
// console.log()

// let elem = document.createElement('input')
// elem.classList.add('alert')
// elem.setAttribute('placeholder', 'age')
// elem.setAttribute('class', 'alert')
// elem.setAttribute('name', 'age')
// elem.setAttribute('placeholder', 'age')
// console.log(elem)

// let users = [
//     {
//         id: 1,
//         name: 'Vasya',
//         surname:'Ivanov',
//         grade: '5B',
//     },
//     {
//         id: 2,
//         name: 'Petia', 
//         surname:'Ivanov', 
//         grade: '5B',
//     },
//     {
//         id: 3,
//         name: 'Sasha', 
//         surname:'Ivanov', 
//         grade: '5B',
//     },
//     {
//         id: 4,
//         name: 'Artem', 
//         surname:'Ivanov', 
//         grade: '5B',
//     },
//     {
//         id: 5,
//         name: 'Sogdiyar',
//         surname:'Pupkin',
//         grade: 'children',
//     },
//     {
//         id: 6,
//         name: 'Ilya',
//         surname:'Hohryakov',
//         grade: '1kurs',
//     },
// ]

// let elem = document.querySelector('.list')
// let elem2 = document.querySelector('.number')
// let timerDisplay = document.getElementById('timer');
// let num = 4
// let numbers = 0
// for (let user of users){
//     elem.insertAdjacentHTML('beforeend',
// `
//     <div class="card" id="${user.id}" onclick="hello('${user.id}')">
//                 <h4 class="name">${user.name}</h4>
//                 <p class="surname">${user.surname}</p>
//                 <p class="grade">${user.grade}</p>
                
//             </div>
//             `
//     )
// }
// function disableClicks() {
//     for (let user of users) {
//         document.getElementById(user.id).onclick = null;
//     }
// }
// function startTimer(seconds) {
//     timer = setInterval(() => {
//         seconds -= 1;
//         timerDisplay.textContent = seconds;
//         if (seconds <= 0) {
//             clearInterval(timer);
//             alert('Время истекло! Игра окончена.');
//             disableClicks();
//         }
//     }, 1000);
// }
// startTimer(10)
// function hello(id){
//     if (id==num){
//         alert('Ты выйграл!')
//         disableClicks();
//         clearInterval(timer);
//         elem2.innerHTML = `Ты выйграл! игра закончена!, Неправильных ответов: ${numbers}</p>`
//     } else{
//         alert('Неудача!')
//         numbers += 1
//         elem2.innerHTML = `<p class="grade">Неправильных ответов: ${numbers}</p>`
//         document.getElementById(id).hidden = true;
//     }
//     console.log(id)
// }

/* --- Уровень 2.1 --- */

// let str = "abcdefg0hijklmn";
// let position = str.indexOf("0");
// console.log(position);


// for (let i = 1; i <= 1000; i++) {
//     let number = i.toString();
//     let first = parseInt(number[0]);
//     let second = parseInt(number[1]);
//     if (first + second === 5) {
//         console.log(i);
//     }
// }


// let array = [1, 2, 3, 4, 3, 5, 6];
// let value = 3;
// let filteredArray = array.filter(function(element) {
//     return element !== value;
// });
// console.log(filteredArray);


// let array = [1, 2, 3, 4, 5, 6];
// let halfArray = array.slice(0, Math.ceil(array.length / 2));
// let sum = halfArray.reduce(function(acc, curr) {
//     return acc + curr;
// }, 0);
// console.log(sum);

    /* --- Уровень 2.2 --- */

// let number = [1, -2, 3, -4, 5, -6];
// let negativeCount = 0;
// for (let i = 0; i < number.length; i++) {
//     if (number[i] < 0) {
//     negativeCount++;
//     }
// }
// console.log("Количество отрицательных чисел: " + negativeCount);

// let num = [1, -2, 3, -4, 5, -6];
// let posNumbers = [];
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//     posNumbers.push(num[i]);
//     }
// }
// console.log("Массив с положительными числами: " + posNumbers);

// let str = "Hello";
// let newStr = str.slice(0, -2) + str.slice(-1);
// console.log("Новая строка: " + newStr);

// let numbers = [1, 2, 3, 4, 5, 6];
// let first = 0;
// let second = 0;
// for (let i = 0; i < numbers.length/2; i++) {
//     first += numbers[i];
// }
// for (let i = numbers.length/2; i < numbers.length; i++) {
//     second += numbers[i];
// }
// let Result = first / second;
// console.log("Результат деления: " + Result);


    /* --- Уровень 2.3 --- */

// function checkLastLetter(word1, word2) {
//     var lastLetterWord1 = word1[word1.length - 1];
//     var firstLetterWord2 = word2[0];
//     if (lastLetterWord1 === firstLetterWord2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function findThirdZero(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === '0') {
//             count += 1;
//         if (count === 3) {
//             return i;
//             }
//         }
//     }
//     return -1;
// }

// function findSumOfNumbers(str) {
//     var numbers = str.split(',');
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += parseInt(numbers[i]);
//     }
//     return sum;
// }


// function convertDateToObject(date) {
//     var splitDate = date.split('-');
//     var convertedDate = {
//     year: splitDate[0],
//     month: splitDate[1],
//     day: splitDate[2]
//     };
//     return convertedDate;
// }
// var result1 = checkLastLetter("apple", "elephant"); // result1 = true
// var result2 = findThirdZero("1020304050"); // result2 = 7
// var result3 = findSumOfNumbers("12,34,56"); // result3 = 102
// var result4 = convertDateToObject("2025-12-31"); // result4 = {year: "2025", month: "12", day: "31"}



// const str = "abc123def456";
// const firstDigitPos = str.search(/\d/);
// console.log(firstDigitPos);

// const obj = {name: "John", age: 30, city: "New York"};
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// console.log(keys);
// console.log(values);

// const number = 123456;
// let evenDigitsCount = 0;
// const digits = String(number).split("");
// digits.forEach(digit => {
//     if (parseInt(digit) % 2 === 0) {
//         evenDigitsCount++;
//     }
// });
// console.log(evenDigitsCount);

// const inputString = "abcde";
// let outputString = "";
// for (let i = 0; i < inputString.length; i++) {
//     if (i % 2 !== 0) {
//         outputString += inputString[i].toUpperCase();
//     } else {
//         outputString += inputString[i];
//     }
// }
// console.log(outputString);

// const wordString = "aaa bbb ccc";
// const words = wordString.spli