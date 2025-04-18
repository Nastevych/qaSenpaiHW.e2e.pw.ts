import {test, expect} from '@playwright/test';
import {arrayOrNotCheck, cloneArray, firstArrElement, lastArrElement, joinArrayElements, addDashBetweenPairNumbers, arrSort, numArr, sumOfNumbers, reversNumArr, findLargestNumber} from './arrays';

const arrayOfNumbers = [1, 2, 4, 0, 3];
const arrayOfStrings = ["Red", "Green", "White", "Black"];

//1️⃣ Перевірка масиву
test ('901 Input isn`t an array', async({page}) => {
    const notArray = 'QA DOJO';
    expect(arrayOrNotCheck(notArray)).toBeFalsy();
});

test ('902 Input isn an array', async({page}) => {
    
    expect(arrayOrNotCheck(arrayOfNumbers)).toBeTruthy;
});

//2️⃣ Клонування масиву 
test ('902 Array is coped', async({page}) => {
    
    const arrayCopy = cloneArray(arrayOfNumbers)
    
    expect(arrayCopy).toEqual(arrayOfNumbers);
});

//3️⃣ Перші елементи масиву
test ('903 Array 2-firs element is selected', async({page}) => {
    const n = 2;

    expect(firstArrElement(arrayOfNumbers, n)).toEqual(arrayOfNumbers.slice(0, n));
});

//4️⃣ Останні елементи масиву

test ('904 Array 2-last element is selected', async({page}) => {
    const n = 2;
    
    expect(lastArrElement(arrayOfNumbers, n)).toEqual(arrayOfNumbers.slice(-n));
});

//5️⃣ Об’єднання елементів масиву
test ('905 Arrays is combined', async({page}) => {
    
    expect(joinArrayElements(arrayOfStrings, ", ")).toBe(arrayOfStrings.join(", "));
});

// 6️⃣ Дефіси між парними числами

test ('906 Dashes between even numbers are added (string)', async({page}) => {
    const string = '0254678';
    
    expect(addDashBetweenPairNumbers(string)).toBe("0254-678");
});

test ('907 Dashes between even numbers are added (number)', async({page}) => {
    const number = 254678;
    
    expect(addDashBetweenPairNumbers(number)).toBe("254-678");
});

// 7️⃣ Сортування масиву
test ('908 Array is sorted', async({page}) => {
    
    expect(arrSort(arrayOfNumbers)).toEqual(arrayOfNumbers.sort((a,b) => a -b));
});

// 8️⃣ Числа від 1 до 345
test ('909 Array of 1 - 345 numbers is created', async({page}) => {
    
    const expectedArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
        43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
        63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
        83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102,
        103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
        119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134,
        135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
        151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
        167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
        183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
        215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
        231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246,
        247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
        263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
        279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
        295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
        311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326,
        327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342,
        343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358,
        359, 360, 361, 362, 363, 364, 365
      ]
    expect(numArr(365)).toEqual(expectedArray);
});

//9️⃣ Сума чисел від 1 до 100
test ('910 Correct sum of numbers', async({page}) => {
    
    const expectedSum = 5050
    expect(sumOfNumbers(1, 100)).toEqual(expectedSum);
});

//🔟 Числа від 241 до 1
test ('911 Array is reversed', async({page}) => {
    
    const reversedArray = [
        241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226,
        225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210,
        209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194,
        193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178,
        177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162,
        161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146,
        145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130,
        129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114,
        113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97,
        96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77,
        76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57,
        56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37,
        36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17,
        16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
      ]
    expect(reversNumArr(241)).toEqual(reversedArray);
});

//1️⃣1️⃣ Максимальне число з двох
test ('912 Firs number is bigger than second', async({page}) => {
    const firstNumber = 100;
    const secondNumber = 99;
    
    expect(findLargestNumber(firstNumber, secondNumber)).toBe(firstNumber);
});

test ('913 Second number is bigger than second', async({page}) => {
    const firstNumber = 99;
    const secondNumber = 100;
    
    expect(findLargestNumber(firstNumber, secondNumber)).toBe(secondNumber);
});

test ('914 If first and second number are equal error if trowed', async({page}) => {
    const firstNumber = 100;
    const secondNumber = 100;
    let exception = "";
    try {
        findLargestNumber(firstNumber, secondNumber)
    } catch (error ){
        exception = error.message;;
    }

    expect(exception).toMatch(`${firstNumber} = ${secondNumber}`);
});