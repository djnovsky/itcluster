function foo(start, finish) {
    let value = [];
    for (let i = start; i < finish; i++) {
        value.push(i)
       
    }
    console.log(value);

let newSum = 0;

    for (let j = start; j <= finish; j++) {
        
        newSum+=j; 
        
    }
    console.log(newSum);
}

foo(7, 15)

let array = [4,2,6,2,6];
let newArray = [];

for (let i = array.length; i--;) {
    newArray.push(array[i]);   
}
console.log(array)
console.log(newArray);