import {test, expect} from "@playwright/test";

//#region 1️ Парне чи непарне число

let evenNumber = 2;
let oddNumber = -3;

function isEven (num : number){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
};

test ('001 number is even', async() => {
    const result = isEven(evenNumber);
    expect(result).toBeTruthy();
});

test ('002 number is odd', async()=>{
    const result = isEven(oddNumber);
    expect(result).toBeFalsy();
});

//#endregion

//#region 2️ Привітання за часом

// Якщо год < 12: "Доброго ранку!"
// Якщо год 12–18: "Доброго дня!"
// Якщо год > 18: "Доброго вечора!"

function GreetingsAccordingToTime(time : number){
    if(time >= 0 && time < 12){
        let greetings = "Доброго ранку!"; 
        return greetings;
    } else if (time >= 12 && time <= 18){
        let greetings = "Доброго дня!";
        return greetings
    } else if (time > 18 && time <= 24){
        let greetings = "Доброго вечора"; 
        return greetings;
    } else {
        throw Error ("Invalid input time.");
    }
};

test ('003 good morning message is shown', async () => {
    
    let time = 8;
    expect(GreetingsAccordingToTime(8)).toMatch("Доброго ранку!");
});

test ('004 have a good day message is shown', async() => {
    
    let time = 15;
    expect(GreetingsAccordingToTime(time)).toMatch("Доброго дня!");
});

test ('005 have a good evening message is shown', async() => {
    
    let time = 19;
    expect(GreetingsAccordingToTime(time)).toMatch("Доброго вечора");
});

test ('006 value more than 24 should throw exception', async() => {
    
    let time = 25;
    try{
        GreetingsAccordingToTime(time)
    } catch (error) {
        expect (error.message).toMatch("Invalid input time.");
    }
});

test ('007 zero should give ood morning message', async() => {
    
    let time = 0;
    expect(GreetingsAccordingToTime(time)).toMatch("Доброго ранку!");
});

test ('008 12 o`clock should give have a good day message', async() => {
    let time = 12;
    expect(GreetingsAccordingToTime(time)).toMatch("Доброго дня!");
});

test ('009 24 o`clock should give have evening message', async() => {
    let time = 24;
    expect(GreetingsAccordingToTime(time)).toMatch("Доброго вечора");
});
//#endregion

//#region 3 Перевірка оцінки

// Якщо бал >= 50 — "Тест складено"
// Якщо < 50 — "Тест не складено".
// Макс оцінка = 100

function isExamPassed(grade : number){
    if(grade >= 0 && grade < 50){
        return false;
    } else if (grade >= 50 && grade <= 100){
        return true;
    } else {
        throw Error ("Invalid grade.");
    }
};

test ('010 exam is failed', async () => {
    
    let grade = 45;
    let result = isExamPassed(grade);
    expect(result).toBeFalsy();
});

test ('011 exam is passed', async () => {
    
    let grade = 80;
    let result = isExamPassed(grade);
    expect(result).toBeTruthy();
});

test ('012 value more than 100 should throw exception', async () => {
    
    let grade = 101;
    
    try{
        isExamPassed(grade)
    } catch (error) {
        expect (error.message).toMatch("Invalid grade.");
    }
});

//#endregion

//#region 4 Вік для голосування

// Якщо >= 18: "Ви можете голосувати."
// Інакше: "Ви ще не можете голосувати."

function ifCanVote (age: number) {
    if (age >= 0 && age < 18){
        return false;
    } else if (age >= 18){
        return true;
    } else {
        throw Error ("Invalid age value.");
    }
};

test ('013 21 year old can vote', async() => {
    let age = 21;
    expect(ifCanVote(age)).toBeTruthy();
});

test ('014 18 year old can vote', async() => {
    let age = 18;
    expect(ifCanVote(age)).toBeTruthy();
});

test ('015 17 year old can`t vote', async() => {
    let age = 17;
    expect(ifCanVote(age)).toBeFalsy();
});

test ('016 age les than 0 should throw exception', async () => {

    let age = -1;
    try{
        ifCanVote(age)
    } catch (error) {
        expect (error.message).toMatch("Invalid age value.");
    }
});

//#endregion

//#region 5 Порівняння чисел

// Вхід: Два числа (наприклад, 8 і 10)
// Вихід:
// "Перше число більше."
// "Друге число більше."
// "Числа рівні."

function compareTwoNumbers (a: number, b: number){
    if (a > b) {
        let result = `Number ${a} is bigger than ${b}`;
        return result;
    } else if (a < b) {
        let result = `Number ${b} is bigger than ${a}`;
        return result;
    } else {
        let result = `Number ${a} and ${b} are even`;
        return result;
    }
};

test ('017 is first number bigger than second number', async() => {
    let a = 17;
    let b = 7;
    expect(compareTwoNumbers(a, b)).toMatch(`Number ${a} is bigger than ${b}`);
});

test ('018 is second number bigger than first number', async() => {
    let a = 7;
    let b = 17;
    expect(compareTwoNumbers(a, b)).toMatch(`Number ${b} is bigger than ${a}`);
});

test ('019 firs and second numbers are even', async() => {
    let a = 7;
    let b = 7;
    expect(compareTwoNumbers(a, b)).toMatch(`Number ${a} and ${b} are even`);
});

//#endregion

//#region 6 Дорога і світлофор
// Якщо зелений — переходьте. Жовтий — підготуйтеся. Червоний — зачекайте.

function  trafficLightsInstructions (lightColor: string){
    if (lightColor === "green"){
        let instructions = "Go!";
        return instructions; 
    } else if (lightColor === "yellow"){
        let instructions = "Get ready!";
        return instructions; 
    } else if (lightColor === "red"){
        let instructions = "Wait!";
        return instructions; 
    } else {
        throw Error ("Invalid input value.");
    }
};

test('020 if traffic light is green you can go', async() => {
    let trafficLight = "green";
    expect(trafficLightsInstructions(trafficLight)).toMatch("Go!");
});

test('021 if traffic light is yellow you need to get ready', async() => {
    let trafficLight = "yellow";
    expect(trafficLightsInstructions(trafficLight)).toMatch("Get ready!");
});

test('022 if traffic light is red you need to wait', async() => {
    let trafficLight = "red";
    expect(trafficLightsInstructions(trafficLight)).toMatch("Wait!");
});

test('023 if traffic light is pink should throw exception', async() => {
    let trafficLight = "pink";
    try{
        trafficLightsInstructions(trafficLight)
    } catch (error) {
        expect (error.message).toMatch("Invalid input value.");
    }
});

//#endregion

//#region 7 Визначення типу числа

function isPositive (num: number) {
    if (num > 0) {
        return true;
    } else if (num < 0) {
        return false;
    } else {
        throw Error("Number is zero.");
    }
};

test ('024 number is positive', async() => {
    let num = 5;
    expect(isPositive(num)).toBeTruthy();
});

test ('025 number is negative', async() => {
    let num = -5;
    expect(isPositive(num)).toBeFalsy();
});


test("026 zero should trow exception", () => {
    let num = 0;
    try {
      isPositive(num);
    } catch (error) {
      expect(error.message).toMatch("Number is zero.");
    }
  });
  

//#endregion