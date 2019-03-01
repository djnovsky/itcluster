//triangle function with different symbols and size

function symbolTriangle(howManyTimes, symbol) {
    let a = 1
    while(a<=howManyTimes){
        console.log(""+symbol.repeat(a));
        a++;
    }  
}

symbolTriangle(31, "0o")

//example with triangle loop

for (i=1; i<=7; i++){
    let hash = '#';
    console.log('' + hash.repeat(i));
}

//shifting hashtag exercise

for (let i = 0; i < 7; i++) {
    let a = "# # # #";
    console.log(i%2 ? a : " "+a); 
}

//"FizzBuzz" loop

for (var i = 1; i <= 100; i++) {
    var output = "";  
    if (i % 3 == 0)
      output = "Fizz";
    if (i % 5 == 0)
      output += "Buzz";
    console.log(output || i);
  }