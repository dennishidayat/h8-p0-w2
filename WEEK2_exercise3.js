var nama;
nama = null;
var peran;
peran = null;

function game(nama, peran){
  if (nama == null, peran == null){
  console.log("Nama harus diisi!");
  }
  if (nama !== null, peran == null){
    console.log("Halo ", nama, ", Pilih peranmu untuk memulai game!");
  }
  if (nama !== null , peran == "ksatria"){
    console.log("Halo Ksatria", nama, ", kamu dapat menyerang dengan senjatamu!");
  }
  if (nama !== null , peran == "tabib"){
    console.log("Halo Tabib ", nama, ", kamu akan membantu temanmu yang terluka!");
  }
  if (nama !== null , peran == "penyihir"){
    console.log("Halo Penyihir ", nama, ", ciptakan keajaiban yang membantu kemenanganmu!");
  }
}

game("dennis","tabib");
