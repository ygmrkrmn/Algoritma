var kisilerr = ["kadir", "kerim", "kamil", "kalem", "kiraz", "kadriye", "koray", "kasım", "kürşat", "kamuran", "kilim", "kestane", "kel", "kemalettin"];
document.write(kisilerr)
console.log("Normal Sıralama");
console.log(kisilerr);


function uzunluk_siralamasi(kisilerr){
  for (var i = 0; i < kisilerr.length; i++) {
    for (var j = 0; j < kisilerr.length; j++) {
      if (kisilerr[i].length < kisilerr[j].length) {
        [kisilerr[i], kisilerr[j]] = [kisilerr[j], kisilerr[i]];
      }
    }
  }
  document.write("</br>")
  document.write("UZUNLUĞA GÖRE SIRALAMA   :",kisilerr)
  console.log("Uzunluk Sıralaması");
  console.log(kisilerr);
}



function alfabetik_sıralama(kisilerr) {
  for (var i = 0; i < kisilerr.length; i++) {
    for (var j = 0; j < kisilerr.length; j++) {
      if (kisilerr[j] > kisilerr[j + 1]) {
        let temp = kisilerr[j]
        kisilerr[j] = kisilerr[j + 1]
        kisilerr[j + 1] = temp
      }
    }
  }
  document.write("</br>")
  document.write("ALFABETİK SIRALAMA   :",kisilerr)
  console.log("Alfabetik Sıralama");
  console.log(kisilerr);
}



