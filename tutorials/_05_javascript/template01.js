//single comment
/* 
multiple comment
*/
//alert("Merhabalar external js");
////////////////////////////////////////////
//alert("popup1");
//window.alert("popup2");
// console.log("loglama");
// document: bu sayfa
// document.write("Yazı yazdım");

/////////////////////////////////////////////
//variables
//camel case
//sayı ile başlama
//tire ile ayırma
//$ ile başlayabilirsin
// _ $ ile başlayabilirsin

// var _person_Name44="Hamit";
// console.log(_person_Name44);

// var x1;
// var x2;
// var x3;
// x1=44;
// x2=16;
// x3=x1+x2;
// console.log(x3)

// var x1,x2,x3;
// x1=44.16;
// x2=16;
// x3=   x1   +  x2;
// console.log(x3);

// var isLogin=true;
// console.log(isLogin)

//Number  ==> sayılar
//string  ==> kelimeler
//boolean ==> true false

/////////////////////////////////////
//dynamic type
// var global=66;
// global=11;
// console.log(global)

// let  local=44;    //ES6(2015)
// local=15;
// console.log(local)

// const sabit=3.14; //ES6(2015)
// console.log(sabit)
///////////////////////////////

//operator
// Logic Operators   &&=ve ||=veya

// Mathematics Operators + - * / %
// var x1=16,x2=4;
// console.log((x1+x2));
// console.log((x1-x2));
// console.log((x1*x2));
// console.log((2**5));
// console.log((x1/x2));
// console.log((x1%x2));

// Comparison Operators
// var  x1=16,x2=5;
// =
// ==
// ===
// >
// >=
// <
// <=
// ?
// console.log(x1=x2);

// increment –deincrement
// var x1=10;
// console.log(x1++);
// console.log(x1);

// var x1=10;
// console.log(x1--);
// console.log(x1);

// Postfix increment –deincrement
// var x1=10;
// console.log(++x1);
// console.log(x1);

// var x1=10;
// console.log(--x1);
// console.log(x1);

/////////////////////////////////////////////////////
// 1byte=8 bit (0 ve/veya =1 bit)
//binary

// console.log(10+20)
// console.log("10"+"20")

//prompt:string gelir
//cast
// var x1= Number(prompt("Lütfen 1.sayıyı giriniz"));
// var x2= Number(prompt("Lütfen 2.sayıyı giriniz"));
// var x3=x1+x2;
// console.log(x3);

//cast
// Number() ==> Bu artık sayıdır
// String() ==> Bu artık Stringtir

/////////////////////////////////////////////////////
//typeof
// var x1=true;
// console.log(typeof x1);

//undefined
// var x1;
// console.log(x1);

//NaN: Not A Number
// var x1=prompt("Lütfen bir sayı giriniz");
// var x2=x1**x1;
// console.log(x2);

//Infinity
// var x1=5/0; //Sonsuz
// console.log(x1)
////////////////////////////////////////////////////
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.sqrt(16)) //karekök
// console.log(Math.min(5,6,2,5,2525,-555))
// console.log(Math.max(5,6,2,5,2525,-555))
// console.log(Math.abs(-16)) //mutlak
// console.log(Math.pow(2,5)) //üslü sayılar
// console.log(Math.random()*4+1) //rastgele sayı
// console.log(Math.ceil(4.1))//yukarı yuvarlamak
// console.log(Math.floor(4.9))//aşağı yuvarlamak
// console.log(Math.round(4.4))

///////////////////////////////////////////////////
//Number
//0124356789ABCDEF
// var hexadecimal=0xFA;
// console.log(hexadecimal)//10 tabanda karşılığı

// //binary=2'lik tabanda
// //01
// var binary=0b11;
// console.log(binary)

// //bilimsel gösterim
// var bilimsel=10e+5;
// console.log(bilimsel)

// //Number
// var x1=Number("16");

// //toString: 10 sayıyı diğer tabanalara çevirme
// var sayi=32;
// console.log(sayi.toString(2));
// console.log(sayi.toString(8))
// console.log(sayi.toString(10))
// console.log(sayi.toString(16))

// //NaN
// var isNot=16/"asd";
// console.log(isNot);

// var sonuc=true;
// console.log(!sonuc)

// //isNaN
// var isSayi=16/16;
// console.log(!isNaN(isSayi))

///////////////////////////////////////////////////
//String
let kelime = 'Html5 Css3 Js Css3'

//kaç tane harf var ?
// console.log(kelime.length)

//trim: başındaki veya sonundaki boşlukları alıyor.
// console.log(kelime.trim().length)

//bütün karakterleri küçük yap
// kelime=kelime.toLowerCase()
// console.log(kelime);
//console.log(kelime.toLowerCase())

//native code: parantez yazmaksak
//bütün karakterleri büyük yap
// console.log(kelime.toUpperCase())

//charAt(0) ==> biz sayı veriyoruz bize o sayıya karşılık gelen harfi veriyor.
//  console.log(kelime.charAt(0));

// boşluk bir karektir
// substring=string'i parçalamak
//  console.log(kelime.substring(6))
//  console.log(kelime.substring(0,5)) //0<=x<5

// concat: sonuna ekleme yapar.
//  console.log(kelime.concat("sonradan eklendim"));

//ile başlıyorsa ==> true
// console.log(kelime.startsWith('H'))

//ile bitiyorsa ==> true
// console.log(kelime.endsWith('l5 '))

// console.log(kelime.indexOf('Css3'))
// console.log(kelime.search('Css3'))
// console.log(kelime.lastIndexOf('Css3'))

// console.log(kelime.split(' '))
// console.log(kelime.join())
// console.log(kelime.replace())
// console.log(kelime.slice())
// console.log(kelime.repeat())

///////////////////////////////////////////////////////
//escape characters
//back slash \
// console.log("\"Deneme")
// console.log('Deneme')

//////////////////////////////////////////////////////

//validation
//exception handling

//istisna fırtaltırız
// throw "sayıyı sıfıra bölemezsin";

// try {
//     //kodlar gövdesi
//     let sayi=0/3;
//     console.log(sayi)

// } catch (error) {
//     //hata olursa burası devreye girsin
//     console.log(error.message);
//     console.log(error.name);
//     //bilerek istisna gelmesini istersek

// } finally{
// console.log("Burası kesin çalışacak");
//  //db.close()
//  //socket.close()
// }

///////////////////////////////////////////////////////////
// //1.function :parametresiz
// function deneme1(){
//     let number1,number2;
//     number1= Math.round(Number(prompt("1.sayı"))) ;
//     number2= Math.round(Number(prompt("2.sayı")))  ;
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
// deneme1();

// //2.function:parametreli
// function deneme2(number1,number2){ //parametre
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
// deneme2(10,2);//argüman

//3.function :return
//eğer bir değişkende kullanmak istersek return kullanıyoruz.
// function deneme3(number1){ //parametre
// let result=number1**number1;
// return result;
// }
// let deger=  deneme3(4);
// console.log(deger)

//4.function
//anonymous function: isimsiz function
// function (){
//         return "Merhabalar";
//     }

//5.function
//arrow function:
//  ()=>{}

//6.function:
//Immediate function : Hemen Çalışsın
// ()()

////////////////////////////////////////////////////////////////////////
// // //1.evre
// function deneme1() {
//   console.log('Merhabalar Normal Function')
// }
// deneme1()

// // //2.evre
// // //anonymous function direk kullanmak için ===> function(){}
// let result2 = function () {
//   console.log('Merhabalar anonymous function')
// }
// result2()

// //  //3.evre: arrow function
// //arrow function, ===>  ()=>{}
// let result3 = () => {
//   console.log('Merhabalar arrow function')
// }
// result3()

// // 4.evre: Immediate function: hemen kullanmak
// //  ===> ()()
// ;(function deneme() {
//   console.log('Merhabalar Immediate function')
// })()

//////////////////////////////////////////////////////////////////////
//conditional (Şart)
// let sayi="1";
// console.log(typeof sayi)

// if(sayi===1){
//     console.log("sayı 1 eşittir");
// }else{
//     console.log("sayı 1 eşit değildir");
// }

// //Ternary Function ===> () ?  :  ;
// let ter= (sayi===1) ? "sayı 1 eşittir"  :"sayı 1 eşit değildir" ;
// console.log(ter);

// ()()
// let result = () => {
//   let sayi = Number(prompt('Lütfen bir sayı giriniz'))
//   //if elseif else
//   if (sayi === 1) {
//     console.log('sayı 1 eşittir')
//   } else if (sayi === 2) {
//     console.log('sayı 2 eşittir')
//   } else if (sayi === 3) {
//     console.log('sayı 3 eşittir')
//   } else if (sayi === 4) {
//     console.log('sayı 4 eşittir')
//   } else if (sayi === 5) {
//     console.log('sayı 5 eşittir')
//   } else if (sayi == 6) {
//     console.log('sayı 6 eşittir')
//   } else if (sayi === 7) {
//     console.log('sayı 7 eşittir')
//   } else if (sayi === 8) {
//     console.log('sayı 8 eşittir')
//   } else if (sayi === 9) {
//     console.log('sayı 9 eşittir')
//   } else if (sayi === 10) {
//     console.log('sayı 10 eşittir')
//   } else {
//     console.log('sayı 1<=x<=10 dışındadır')
//   }
// }
// result();
//////////////////////////////////////////////////////////////////////////
//kullanıcıdan bir sayı alacağım bu sayı negatif mi pozitif mi ?  arrow function
// let isNegative = () => {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   let result = number < 0 ? 'negatif' : 'pozitif'
//   console.log(result)
// }
//isNegative();
/////////////////////////////////
//kullanıcının girdiği sayı tek mi çift mi ? bulan anonymous function yazalım?

// let even = function () {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   if (number % 2 == 0) {
//     console.log('sayı çifttir')
//   } else {
//     console.log('sayı tektir')
//   }
// }
//even();

/////////////////////////////////////////////////////////////
// function result5() {
//   let sayi = Number(prompt('Lütfen bir sayı giriniz'))
//   //Switch-case
//   switch (sayi) {
//     case 1:
//       console.log('sayı 1 eşittir')
//       break
//     case 2:
//       console.log('sayı 2 eşittir')
//       break
//     case 3:
//       console.log('sayı 3 eşittir')
//       break
//     case 4:
//       console.log('sayı 4 eşittir')
//       break
//     case 5:
//       console.log('sayı 5 eşittir')
//       break
//     case 6:
//       console.log('sayı 6 eşittir')
//       break
//     case 7:
//       console.log('sayı 7 eşittir')
//       break
//     case 8:
//       console.log('sayı 8 eşittir')
//       break
//     case 9:
//       console.log('sayı 9 eşittir')
//       break
//     case 10:
//       console.log('sayı 10 eşittir')
//       break
//     default:
//       console.log('sayı 1<=x<=10 dışındadır')
//       break
//   }
// }
//result5();

////////////////////////////////////////////////////////////////////////
//Loop
//başlangıç:  i=1;
//bitiş    :  i<=10

//i++      :artırma
//i=i+1    :artırma
//i+=1     :artırma

//For Döngüsü
// for(let i=2; i<=10; i+=2){
//     let sayi=Number(prompt(i+". sayı"))
//     console.log(sayi)
// }

//1-10 arasında sayılar toplamı olsun
//bu sayılar arasındaki 4 sayısını dahil etmeyin

let toplam = () => {
  let sum = 0 //başlangıç değer

  for (let i = 1; i <= 100; i++) {
    if (i === 4) {
      continue //o değerli es geç
    }
    if (i > 10) break //döngüyü kırmak
    sum = sum + i
  }
  console.log('Toplamları: ' + sum)
}
//toplam();
//55

/////
//while Döngüsü
// let i=1;
// while(i<=2){
//     let sayi=Number(prompt(i+". sayı"))
//     console.log(sayi)
//     i+=1;
// }

/////
//do-while Döngüsü
let i = 1
do {
  //ister şart sağlansın ister sağlanmasın kesinlikle 1 kere çalışacak
  console.log(i + ' kere çalıştı')
  i++;
} while (i < 3);
