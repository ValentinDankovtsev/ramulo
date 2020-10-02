// Example 1
let a1 = 'Text';
let b1 = a1;
a1 = 'another text';
console.log('a1 = ', a1);
console.log('b1 = ', b1);
// объяснение результатов задания:
// 1) есть две переменные, которые содержат строку "Text"(скопированы b1 = a1)
// 2) переменной a1 присвоили новое значение 'another text'
// 3) в консоли вывели новое значение а1 = 'another text' и значение b1 = "Text"

// Чем клонирование отличается от копирования по ссылке ?
//   копирование по ссылке касается переменных, объекта это не касается - он не дублируется.клонирование это дублирование объекта.

// Чем shallow copy отличается от deep copy ?
//   shallow copy это простое колнирование объекта с примитивами.копирование с помощью Object.assign
// deep copy, это глубокое клонирование объекта в котором содержаться ссылки на другие объекты.используютс дополнительные библиотеки

// answer
let obj = {
  a1: 'Text',
};
let clone = {}
for (let key in obj) {
  clone[key] = obj[key];
}
clone.a1 = 'another text';
console.log(clone)

// Example 2
let obj = {
  a2: 28,
};
let clone = {}
for (let key in obj) {
  clone[key] = obj[key];
}
clone.a2 = 41;
console.log(clone)

// Example 3
let a3 = {
  name: 'Ivan Ivanov',
  age: 41,
};
let clone = {}
for (let key in a3) {
  clone[key] = a3[key];
}
clone.name = 'Igor Petrov';
console.log(clone)

// Example 4
let a4 = [1, 3, 5, 7, 9];
let clone = {};
for (let key in a4) {
  clone[key] = a4[key];
}
clone.a4 = [2, 4, 6, 8, 10];
console.log(clone)

// Example 5
let a5 = [1, 2, 3, 4, 5];
let clone = {};
for (let key in a5) {
  clone[key] = a5[key];
}
clone.a5 = [0, 2, 3, 4, 5];
console.log(clone)

// Example 6
let a6 = [1, 2, 3, 4, 5];
let clone = {};
for (let key in a6) {
  clone[key] = a6[key];
}
clone.a6 = [1, 2, 3, 4, 5, 6];
console.log(clone)

// Example 7
let a7 = [{
  name: 'Vasya',
  age: 12
}, {
  name: 'Misha',
  age: 14
}, {
  name: 'Pavel',
  age: 13
}];
const deepClone = JSON.parse(JSON.stringify(a7));
a7.name = a7.name + "Pupkin";
console.log(deepClone);
