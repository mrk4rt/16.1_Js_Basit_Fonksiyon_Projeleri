
/*
1. Merhaba Dünya Fonksiyonu
Merhaba Dünya yazdıran bir fonksiyon oluşturun. Fonksiyon çağrıldığında ekrana 
"Merhaba Dünya!" yazmalıdır.
*/

function selamla() {
  console.log("Merhaba Dünya!!");
}
// Örnek kullanım
selamla();

/*
2. İki Sayıyı Toplayan Fonksiyon
İki sayı alacak ve bu sayıları toplayarak sonucu döndürecek bir fonksiyon yazın.
*/

function topla(a, b) {
  return a + b;
}
// Örnek kullanım
let sonuc = topla(5, 10);
console.log(sonuc);

/*
3. Bir Sayıyı Karalayan Fonksiyon
Bir sayıyı alıp, sayıyı iki ile çarpan bir fonksiyon yazın.
*/
function ikiIleCarp(sayi) {
  return sayi * 2;
}
// Örnek kullanım
let sonuc = ikiIleCarp(5);
console.log(sonuc); // Çıktı: 10

/*
4. Çift Sayı Kontrolü
Bir sayının çift olup olmadığını kontrol eden ve sonucu 
true ya da false olarak döndüren bir fonksiyon oluşturun.
*/
function ciftSayiMi(sayi) {
  return sayi % 2 === 0;
}

// Örnek kullanım
console.log(ciftSayiMi(10)); // Çıktı: true (çift)
console.log(ciftSayiMi(7));  // Çıktı: false (tek)

/*
5. Faktöriyel Hesaplama
Bir sayı alarak, o sayının faktöriyelini hesaplayan bir fonksiyon yazın.
*/
function faktoriyel(sayi) {
  let sonuc = 1;
  for (let i = 1; i <= sayi; i++) {
      sonuc *= i;
  }
  return sonuc;
}

// Örnek kullanım
console.log(faktoriyel(5)); // Çıktı: 120 (5! = 5 * 4 * 3 * 2 * 1)

/*
6. Ekrana Yıldız Yazdırma
Kullanıcıdan bir sayı alarak, o sayı kadar * (yıldız) karakterini ekrana 
yazdıran bir fonksiyon yazın.
*/
function yildizYazdir(sayi) {
  let yildizlar = "";
  for (let i = 0; i < sayi; i++) {
      yildizlar += "*";
  }
  console.log(yildizlar);
}

// Örnek kullanım
yildizYazdir(5); // Çıktı: *****
