var row1 = 5;
while (row1 >=1){
  console.log("*");
  row1 = row1 - 1;
}

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = 0; j < 5; j++) {
    str += "*";
  }
 console.log(str);
}

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = i; j <= 5; j++) {
    str += "*";
  }
 console.log(str);
}
