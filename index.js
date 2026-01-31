const word1 = "";
const word2 = "";

if(word1 !== "" && word2 !== ""){
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
};

const num1 = 12;
const num2 = 4;
const suma = num1 + num2;

if(suma > 10){
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
};

const text = "Я почала вивчати JavaScript";

if(text.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

const number = 15;

if(number >= 10 && number <= 20){
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

const name = "Polina";
const email = "mirgorodskapolina@gmail.com";
const password = "4568932";

if(name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}