
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
let kelime="Html5 Css3 Js Css3";

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

try {
    //kodlar gövdesi
    let sayi=3/0;
    console.log(sayi)
   
} catch (error) {
    //hata olursa burası devreye girsin
    alert(error.message);
    alert(error.name);
} finally{
console.log("Burası kesin çalışacak");
 //db.close()
 //socket.close()
}



