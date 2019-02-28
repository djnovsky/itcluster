/*let a = 0;
console.log(a++);
console.log(a);

let q = ' ' == false;
console.log(q)*/

let times = 1;
let triangle = "";
let hashtag = "#"

while(times<=7){
    console.log(triangle+hashtag.repeat(times));
    times++;
}

for (i=1; i<=7; i++){
    let hash = '#';
    console.log('' + hash.repeat(i));
}