function myNumber(first){
    return Math.floor(Math.random() * first) +1;
}

for( let circle = 0;  circle < 10; circle++ ){
console.log(`the random number is ${myNumber(10)}`);
}