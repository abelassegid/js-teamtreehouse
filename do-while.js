function myNumber(first){
  return Math.floor(Math.random() * first ) +1;
}

let circle = 0 ;
do{
    console.log( myNumber(10));
    circle += 1;
} while(circle < 10);
