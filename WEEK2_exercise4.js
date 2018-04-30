var tanggal;
var bulan;
var tahun;

function kalender(tanggal, bulan, tahun){

  switch(bulan) {
    case 1: {bulan = "januari"}
    case 2: {bulan = "februari"}
    case 3: {bulan = "maret"}
    case 4: {bulan = "april"}
    case 5: {bulan = "mei"}
    case 6: {bulan = "juni"}
    case 7: {bulan = "juli"}
    case 8: {bulan = "agustus"}
    case 9: {bulan = "september"}
    case 10: {bulan = "oktober"}
    case 11: {bulan = "november"}
    case 12: {bulan = "desember"}
  }
  console.log(tanggal,  bulan, tahun);
}

kalender(1, 1, 2000);
