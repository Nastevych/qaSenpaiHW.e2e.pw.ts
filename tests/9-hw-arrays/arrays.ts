//#region 1️⃣ Перевірка масиву  
// ✏️ Напиши функцію, яка перевіряє, чи є input масивом.  
// Тестові дані:  
// console.log(isArray('QA DOJO')); // false  
// console.log(isArray([1, 2, 4, 0])); // true    
//#endregion
export function arrayOrNotCheck(input){
    return Array.isArray(input);
};

console.log(arrayOrNotCheck('QA DOJO'));  
console.log(arrayOrNotCheck([1, 2, 4, 0]))

//#region 2️⃣ Клонування масиву  
// ✏️ Напиши функцію для створення копії масиву.  
// Тестові дані:  
// console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
// console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]
//#endregion   
export function cloneArray (arr: any[]){
    return [...arr];
};

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]))

//#region 3️⃣ Перші елементи масиву  
// ✏️ Напиши функцію для отримання перших n елементів масиву.  
// Тестові дані:  
// console.log(first([7, 9, 0, -2])); // 7  
// console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]   
//#endregion

export function firstArrElement (arr: any [], n: number){
    return arr.slice(0, n);
};
console.log(firstArrElement([7, 9, 0, -2], 1));
console.log(firstArrElement([7, 9, 0, -2], 3));

//#region 4️⃣ Останні елементи масиву  
// ✏️ Напиши функцію для отримання останніх n елементів масиву.  
// Тестові дані:  
// console.log(last([7, 9, 0, -2])); // -2  
// console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]    
//#endregion

export function lastArrElement (arr: any [], n: number){
    return arr.slice(-n);
};

console.log(lastArrElement([7, 9, 0, -2], 1));
console.log(lastArrElement([7, 9, 0, -2], 3));

//#region5️⃣ Об’єднання елементів масиву  
// ✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
// Приклад:  
// myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"    

//#endregion

export function joinArrayElements(arr: any [], separator: string){
    return arr.join(separator);
};
const myColor = ["Red", "Green", "White", "Black"];  

console.log(joinArrayElements(myColor, " ,"));
console.log(joinArrayElements(myColor, "+"));

//#region 6️⃣ Дефіси між парними числами  ⭐️  
// ✏️ Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
// Приклад:  
// Ввід: 025468  
// Вивід: 0-254-6-8  
//#endregion

export function addSeparatorBetweenEvanArrNumbers (arr: number[]){
    const newArr: string[] = [];
    arr.forEach((number, i) => {
        if (number % 2 === 0 && arr[i +1] % 2 === 0){
            newArr.push(`${number}-`);
        } else {
            newArr.push(number.toString());
        }
    });
   return newArr.join("");
};

const numbers = [0, 2, 5, 4, 6, 8];
console.log(addSeparatorBetweenEvanArrNumbers(numbers));



export function addDashBetweenPairNumbers(num){
    const str = String(num);
    let newStr = '';
    
    for(let i = 0; i < str.length; i++){
        newStr += str[i];
      
        if (Number(str[i]) % 2 === 0 && Number(str[i+1]) % 2 === 0){
            newStr += '-';
      };
    }

    return newStr;
};

const string = '254678';
console.log(addDashBetweenPairNumbers(string));

//#region 7️⃣ Сортування масиву ⭐️ 
// ✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
// Приклад:  
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
// Вивід: -4,-3,1,2,3,5,6,7,8    
//#endregion

export function arrSort(arr: number[]){
    return arr.sort((a,b) => a -b);
};

var arr1 = [-3, 81, 7, 6100, 5, -4, 3, 2, 1]; 
console.log(arrSort(arr1));

//#region 8️⃣ Числа від 1 до 345
// ✏️ Використай цикл, щоб  щоб створити масив з числами  від 1 до 345.
//#endregion

export function numArr (number: number){
const numArr: number [] = [];
for (let i = 1; i <= number; i++){
    numArr.push(i);
};
return numArr
};

console.log(numArr(365));

//#region 9️⃣ Сума чисел від 1 до 100
// ✏️ Напиши програму, яка знайде суму чисел від 1 до 100.
//#endregion

export function sumOfNumbers(start:number, end: number){
    let sumOfNumbers = 0;
    for (let i = start; i <= end; i++){
    sumOfNumbers += i;
    };
return sumOfNumbers;
}

console.log(sumOfNumbers(1, 100))

//#region 🔟 Числа від 241 до 1
// ✏️ Використай цикл, щоб створити масив з числами у зворотному порядку від 241 до 1.
//#endregion

export function reversNumArr (number: number){
    const numArr: number [] = [];
    for (let i = 1; i <= number; i++){
        numArr.push(i);
    };
    return numArr.reverse()
    };
    
    console.log(reversNumArr(241));

//#region 1️⃣1️⃣ Максимальне число з двох
// ✏️ Напиши програму, яка знаходить найбільше ціле число з двох. Використай if для порівняння.
//#endregion

export function findLargestNumber(a: number, b: number){
    if (a > b){
        return a;
    } else if (b > a){
        return b;
    } else {throw Error(`${a} = ${b}`);}
    
};

console.log(findLargestNumber(0, 1));

