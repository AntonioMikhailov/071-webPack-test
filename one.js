// function one() { 
//  console.log('one');
// }
// module.exports = one; // не вызываем а передаем Иван - 20-12


// Важно чтобы у каждой сущности было свое имя для экспорта
export let one = 1; // можно в таком виде экспортировать

//или так - именованный синтаксис
let two = 2;
export {two}; // фиг. скобки обязательно

// можем экспортировать функции
export function sayHi() { 
 console.log('hello');
}

// вариант с default
// export default function sayHi() { 
//   console.log('hello');
//  }