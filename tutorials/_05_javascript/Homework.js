//Kullanıcıdan Alınan (prompt) 2 sayı için Hesap makine uygulaması yapalım çıktıyı console.log ile yazdıralım

// var x1=prompt("1.sayı")
// var x2=prompt("2.sayı")
// console.log(x1+x2)
// Math.abs(x1)
// console.log(x1+x2)
// console.log(x1+x2)
// console.log(x1+x2)
// console.log(x1+x2)

//Math kullanalım abs ==> 1 veriyi alalım

//search ile indexOf arasındaki fark nedir ?

//JS'te exception handling

//debugger nedir?

//JS String metotlara çalışmak

//JS split() nedir ? ne için kullınıyoruz. ?
//////////////////////////////////////////////////////////
//ÖDEV
//S-1) kullanıcını girdiği sayıya göre haftanın günleri gösteren algoritma ? (switch-case)
//S-2) Vize Final Ödev: arrow function
//vize%40+final%60
//1-59   FF
//55-60  CC
//61-80  BB
//81-100 AA

//s3-) for ile while döngüsü arasındaki fark nedir ?
//S4-) 1-99 sayılar dahil 1<=<x<=99 bu sayılardan içerde kaç tane tek sayı kaç tane çift sayı vardır ?

//S.O.L.I.D
//Design pattern
//UML Diyagram nedir ?
//Heap memory,Stack memory
////////////////////////////////////////////////////////////////////////////////
// Örnek: 1.dereceden 2 bilinmeyenli denklem
// Kullanıcıdan aldığımız 2 değişkeni hesaplatarıalım?
// y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılactır (Arrow function)

// let result = () => {
//   let x = Number(prompt("x sayısını giriniz"));
//   let k = Number(prompt("k sayısını giriniz"));
//   let y = 3 * x + 5 * k;

//   console.log(y);
// };

// result();

//Örnek: 2 Dereceyi fahrenhaya çeviren function (Anonymous function)
//Kullanıcıdan alınan dereceyi Fahrenhata çeviren function (Arrow Function)
//Formül: (dereceSayi * 9 / 5) + 32;

// let celcToFahr = function () {
//   let celc, fahr;
//   celc = Number(prompt("Hava kaç derece?"));
//   fahr = (celc * 9) / 5 + 32;
//   console.log(fahr);
// };

// celcToFahr();

//Örnek:3  Dört işlem
//4+3*2(3:3-1*6+9:1+(3:3))

//Örnek:4 password-repassword function (Normal Function)

//Örnek:5 Kullanıcının Girdiği Sayının Negatif mi, Pozitif mi Olduğunu Bulan function(anonymous)

// let positiveOrNegative = () => {
//   let x;
//   x = parseInt(prompt("Sayı giriniz."));

//   if (x > 0) {
//     console.log("Sayı pozitiftir");
//   } else if (x < 0) {
//     console.log("Sayı negatiftir");
//   } else {
//     console.log("Ya 0 girdiniz yada geçerli bir sayı girmediniz.");
//   }
// };

// positiveOrNegative();

//Örnek6:  1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç

//solution

// let sumNumbers = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     if (i % 5 == 0) {
//       continue;
//     } else {
//       sum += i;
//     }
//   }
//   console.log(sum);
// };

// sumNumbers();

//-------------------------------------------------------

//Örnek7:
// Kullanıcıdan alınan sayıya göre random sayılar oluştursun
// 0-) ilk ve son sayının toplamı ?
// 1-) Toplamları
// 2-) Ortalaması
// 3-) Tek sayı toplamları
// 4-) Kaç tane Tek sayı
// 5-) çift sayı toplamları
// 6-) çift tane Tek sayı

// ***** Solution

// let numbersThings = () => {
//   let randomNumbers = [];
//   let x,
//     sumFirstAndLast,
//     sumResult,
//     avarage,
//     sumOdd = 0,
//     sumEven = 0;
//   let counterOdd = 0,
//     counterEven = 0,
//     i = 0;
//   x = Number(prompt("Kaç adet sayı oluşturulsun?"));

//   while (i < x) {
//     i++;

//     randomNumbers.push(Math.floor(Math.random() * 10));
//   }

//   sumFirstAndLast = randomNumbers[0] + randomNumbers[randomNumbers.length - 1];

//   for (let i = 0; i < x; i++) {
//     sumResult += randomNumbers[i];
//   }

//   avarage = sumResult / x;

//   for (let i = 0; i < x; i++) {
//     if (randomNumbers[i] % 2 == 1) {
//       sumOdd += randomNumbers[i];
//       counterOdd++;
//     }
//   }

//   for (let i = 0; i < x; i++) {
//     if (randomNumbers[i] % 2 == 0) {
//       sumEven += randomNumbers[i];
//       counterEven++;
//     }
//   }

//   console.log(
//     `oluşturulan random sayılar = ${randomNumbers} kaç tek sayı=${sumOdd} ve kaç çift sayı = ${sumEven}, ${counterEven} , ${counterOdd} `
//   );
// };

// numbersThings();
//------------------------------------------------

//Örnek8 :Kullanıcının Girdiği Sayının Faktöriyel hesaplama

//**** Solution */

// let factorial = () => {
//   let x;
//   let totalMultipy = 1;

//   x = parseInt(prompt("Faktoriyeli alınmasını istediğinizi sayıyı giriniz."));

//   for (x; x > 0; x--) {
//     totalMultipy = x * totalMultipy;
//   }

//   return totalMultipy;
// };
// console.log(factorial());

//-------------------------------------------

//Örnek9 Kullanıdan aldığımız kelimeyi tersine çeviren program
//exam: bardak  ==> kadrab

//* Solution

// let reverseStr = () => {
//   let x;
//   let strArray = [];

//   x = prompt("Tersi alınacak stringi giriniz.");

//   strArray = x.split("").reverse().join("");
//   return strArray;
// };

// console.log(reverseStr());

// -----------------

//örnek kullanıcı tarafından başlangıç,bitiş sayıları ve bir döngüde devam etsin.
// s1-)  başlangıç,bitiş sayıların toplamı
// s2-)  başlangıç,bitiş çift  sayıların toplamı
// s2-)  başlangıç,bitiş  kadar teksayılar  sayıların toplamı
// s3-)  başlangıç,bitiş sayıların toplamı ancak 5'e bölünebilen sayılar hariç

//** solution */

// let startToEndNumb = () => {
//   let numb1, numb2;
//   let numsArr = [];
//   let sumFirstAndLast = 0;
//   let totalEven = 0;
//   let totalOdd = 0;
//   let totalExceptDivideFive = 0;

//   numb1 = Number(prompt("Başlangıç sayısını giriniz."));
//   numb2 = Number(prompt("Bitiş sayısını giriniz."));

//   for (let i = numb1; i <= numb2; i++) {
//     console.log(i);
//     numsArr.push(i);
//   }

//   sumFirstAndLast = numsArr[0] + numsArr[numsArr.length - 1];

//   numsArr.forEach((element) => {
//     if (element % 2 == 0) {
//       totalEven += element;
//     } else {
//       totalOdd += element;
//     }
//   });
//   for (let i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] % 5 == 0) {
//       continue;
//     }
//     totalExceptDivideFive += numsArr[i];
//   }

//   console.log(`sum first and last number= ${sumFirstAndLast}
//   Sum even numbers = ${totalEven}
//   Sum odd numbers = ${totalOdd}
//   sum all numbers except that it is divided 5 =${totalExceptDivideFive} `);
// };

// startToEndNumb();

// const points = [40, 100, 1, 5, 25, 10];
// let x = points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);

// let y = points.sort(function (a, b) {
//   return b - a;
// });

// console.log(x);
// console.log(y);

// const points = [40, 100, 1, 5, 25, 10];

// console.log(points.sort());

//Object CV
//adi
//soyadi
//yas
//diller[]
//meslek{}
//emeklilik=function(age){return 2022-age} ==> yaş<18 yaş>=150 (validation)
//String toUppercase
