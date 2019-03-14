let value = {
    name: 'olena',
    age: '15',
    gender: 'female'
}

/*Object.defineProperty(value, p: 'country', 
attributes:
    value: 'Ukraine',
    writable: false,
    configurable: true
});

//console.log(value.country);
//console.log(Object.keys(value));
//console.log(Object.getOwnPropertyDescriptor(o: value, p: name));

let person = {
    education: 'university',
    name: 'taras'
}

Object.assign(value, person);


console.log(value);

let a = [1,2,3];
a[0] = 3;
console.log(a)
*/

/*let a = 'STAS';
a.toLocaleLowerCase();
let b = a.substring(0,1);

console.log(a);
console.log(b);*/

let a = {name:'Olena'}
let b = a;
b.name = 'Taras'
console.log(a)
console.log(b)


console.log(a===b)//same links

var o = {x:1}, p={x:1};
console.log(o===p);//different links same objects