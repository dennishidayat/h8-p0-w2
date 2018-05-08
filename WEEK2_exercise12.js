function konversiMenit(menit) {
  var jam;
  var men;
  if (menit => 60){
    jam = Math.floor(menit/60);
    men = menit % 60 ;
    console.log(jam + ":" + men );
  }
  else{
    console.log("0:" + menit);
  }
}

console.log(konversiMenit(50));
