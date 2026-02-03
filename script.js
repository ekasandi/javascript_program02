var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // bila angkot kosong, penumpang masuk, lgs duduk di kursi pertama secara berurutan
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    console.log(10);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong diantara penumpang, penumpang masuk, duduk di kursi kosong tersebut
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
        // jika ada penumpang masuk, nama sama dgn penumpang diangkot, akan ditolak masuk
      } else if (penumpang[i] == namaPenumpang) {
        console.log("penumpang dengan nama " + namaPenumpang + " sudah ada di angkot!");
        return penumpang;
        // semua kursi sudah penuh, penumpang masuk, akan duduk di kursi selanjutnya
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("angkot tidak ada penumpang! tidak ada penumpang bernama " + namaPenumpang + "!!");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong diantara penumpang, penumpang masuk, duduk di kursi kosong tersebut
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else {
        console.log("tidak ada penumpang bernama " + namaPenumpang);
        return penumpang;
      }
    }
  }
};
