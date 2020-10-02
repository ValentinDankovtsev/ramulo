Задание 6 — Массивы.

Написать функцию, заполняющую массив цифрами от минимального до максимального значения по порядку. Минимальное и максимальное значение задается пользователем.

Вывести полученный массив в консоль.

Вывести количество символов в массиве.

Клонировать массив. Написать функцию, фильтрующую клонированный массив. В массиве должны остаться только числа, у которых остаток от целочисленного деления на 3 равен единице (4, 7, и т.д)

Вывести отфильтрованный массив в консоль

function range(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i += 1) {
    myArray.push(i);
  }
  return myArray;
 
};
console.log(range(4, 12));
 let countElementsArr = myArray.length;
console.log(countElementsArr);

let clone = {};
for (let key in myArray) {
  clone[key] = myArray[key];
  function FilterOfNumber(start,end) {
  let NewCloneArr=[];
  for (let i = start; i <= end; i += 1){
    if (i % 3 == 1) {
    NewCloneArr.push(i);
  }
  return NewCloneArr;
  }
  console.log(NewCloneArr);
}
