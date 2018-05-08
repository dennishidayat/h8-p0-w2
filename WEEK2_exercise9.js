function shoutOut(){
  return ("Halo Function!");
}
console.log(shoutOut());

function calculateMultiply(num1, num2){
  var hasilPerkalian = num1 * num2;
  console.log(hasilPerkalian);
}
console.log(calculateMultiply(2,3))

function processSentence(name, age, address, hobby){
  var fullSentence = ("Nama saya : " + name + ", Umur saya " + age + " tahun, alamat saya di " + address + ",dan saya punya hobby yaitu " + hobby + "!");
  return fullSentence
}
console.log(processSentence("dennis", 20, "jakarta", "coding"));
