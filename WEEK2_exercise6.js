var counter1;
var counter2;
counter1 = 2;
counter2 = 20;

console.log("looping pertama :");
while(counter1 <= 20){
  console.log(counter1, " - I love coding");
  counter1 = counter1 + 2;
}
console.log("looping kedua :");
while(counter2 >= 2){
  console.log(counter2, " - I love coding");
  counter2 = counter2 - 2;
}

console.log("looping pertama :");
for(var counter3 = 1; counter3 <= 20; counter3 = counter3 + 1){
  console.log(counter3, " - I love coding");
}

console.log("looping kedua :");
for(var counter4 = 20; counter4 >= 0; counter4 = counter4 - 1){
  console.log(counter4, " - I love coding");
}

for(var counter5 = 1; counter5 <=100; counter5 = counter5 + 1){
  if (counter5 % 2 === 0 ){
    console.log(counter5 + ' GENAP');
  }
    if (counter5 % 2 === 1 ){
    console.log(counter5 +' GANJIL');
  }
}

for(var counter5 = 1; counter5 <=100; counter5 = counter5 + 2){
  if ((counter5 + 2) % 3 === 0 ){
    console.log(counter5 + ' 3 kelipatan 3');
  }
    if ((counter5 + 5) % 6 === 0 ){
    console.log(counter5 +' 3 kelipatan 3');
  }
    if ((counter5 + 9) % 10 === 0 ){
    console.log(counter5 +' 3 kelipatan 3');
  }
}

for(var counter5 = 1; counter5 <=100; counter5 = counter5 + 5){
  if ((counter5 + 2) % 3 === 0 ){
    console.log(counter5 + ' 3 kelipatan 3');
  }
    if ((counter5 + 5) % 6 === 0 ){
    console.log(counter5 +' 3 kelipatan 3');
  }
    if ((counter5 + 9) % 10 === 0 ){
    console.log(counter5 +' 6 kelipatan 6');
  }
}

for(var counter5 = 1; counter5 <=100; counter5 = counter5 + 9){
  if ((counter5 + 2) % 3 === 0 ){
    console.log(counter5 + ' 3 kelipatan 3');
  }
    if ((counter5 + 5) % 6 === 0 ){
    console.log(counter5 +' 3 kelipatan 3');
  }
    if ((counter5 + 9) % 10 === 0 ){
    console.log(counter5 +' 10 kelipatan 10');
  }
}
