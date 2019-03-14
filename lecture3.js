

/*var sumValue = function sum (a,b) {
    console.log(a+b);
}*/

//sumValue(3,223);

function sum (a,b) {

    if (a*b === 0) {
        return 'all values are zero';
    }
    //console.log(a+b);
    return a+b;
}

//var sumValue = sum(5,5)
//var sumValue2 = sum (0, 4);

//console.log(sum(4,7))
//console.log(sum.toString())

/*(function hello() {
    console.log('hello world')
})();*/

let o = {
    name: 'some name',
    age: 44
}

function nameObj (o) {
    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            console.log(key + ': ' + o[key]);
            
        }
    }
    
    }


//nameObj(o);

function substr (a,b) {
    return Math.pow((a-b), 2);
}

function calculateDistance (x1,y1,x2,y2) {
    return Math.sqrt(substr(x1,x2)+ substr(y1,y2))
}



function factorial(n) {
    if (n<=1) {
        return n;
    }
    n-1;
    return n * factorial(n-1)
}

//console.log(factorial(3))

var object = {
    name: 'Some Name',
    age: 33
}

var someArray = [1, 2]

function createArray (o, a) {
    a = a || []; //[] -> true, {} -> true, '' -> false
    return a.concat(Object.keys(o))
}

console.log(createArray(object).toString());
console.log(createArray(object, someArray).toString());