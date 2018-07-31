var nama = 'Mikael';
var peran = 'tabib';

  if (nama == null, peran == null){
  console.log("Nama harus diisi!");
  }
  else if (nama !== null, peran == null){
    console.log("Halo ", nama, ", Pilih peranmu untuk memulai game!");
  }
  else if (nama !== null , peran == "ksatria"){
    console.log("Selamat datang di Dunia Proxytia, ", nama);
    console.log("Halo Ksatria", nama, ", kamu dapat menyerang dengan senjatamu!");
  }
  else if (nama !== null , peran == "tabib"){
    console.log("Selamat datang di Dunia Proxytia, ", nama);
    console.log("Halo Tabib ", nama, ", kamu akan membantu temanmu yang terluka!");
  }
  else if (nama !== null , peran == "penyihir"){
    console.log("Selamat datang di Dunia Proxytia, ", nama);
    console.log("Halo Penyihir ", nama, ", ciptakan keajaiban yang membantu kemenanganmu!");
  }

