
// импортируем из всех файлов
import {one, two} from './one';
import {sayHi} from './one'; 
import {obj} from './two'; // из второго файла

sayHi(); // hello
console.log(`${one} and ${two}`); // 1 and 2

console.log(obj); // {name: 'Ann', age: 32}
