'use string';
/*Öğrenilen konuların tekrarını yapmak, kalıcı hafızaya yerleştirmek,
gelecek projelerde bilgi kaynağı olarak kullanmak,*/

//----------------DESTRUCTURING ARRAYS-----------------------
/*
//arrayin elemanlarına variable atamak
arrayX = [4, 6, 22, 45, 67, 888];
const [a, b] = arrayX;
console.log(a, b); //4 6

const [c, , d, , e] = arrayX;
console.log(c, d, e); //4 22 67

// arrayin elemanları arası yer değiştirmek

let [j, f] = arrayX;
console.log(j, f);
[f, j] = [j, f];
console.log(j, f);

//destructure, array içindeki değerlerden istenileni almak

const restaurant = {
  anaYemek: ['kuru', 'pilav', 'köfte', 'haslama'],
  corba: ['mercimek', 'domates', 'tavuk'],
  tatli: ['sutlac', 'revani', 'baklava'],
  salata: ['coban', 'akdeniz', ['taze soğan', 'tuz'], ['roka', 'maydonoz']],
  siparis: function (m, n, z) {
    console.log(this.corba[m], this.anaYemek[n], this.tatli[z]);
  },
};
restaurant.siparis(0, 2, 1); //mercimek köfte revani
restaurant.siparis(0, [0, 1], 2); //mercimek undefined baklava
console.log(restaurant.tatli[0]); //sutlac

//nested array ler, ve nested array değerlerine variable atama

console.log(restaurant.salata[3]); //(2) ['roka', 'maydonoz']
const [p, , , r] = restaurant.salata;
const [, , , [v, y]] = restaurant.salata;
console.log(r, y); //(2) ['roka', 'maydonoz'] 'maydonoz'

//default değer atama
const av = [1, 7];
const [q = 15, w = 25, cc = 35] = av;
console.log(q, w, cc); //1 7 35
*/

//----------------DESTRUCTURING OBJECTS-----------------------
/*
const fiyat = {
  corba: {
    tavuk: 10,
    mercimek: 8,
    ezo: 9,
  },
  anaYemek: {
    kuru: 17,
    kofte: 22,
    makarna: 10,
  },
  tatli: {
    sutlac: 14,
    baklava: 20,
  },
  salata: 9,
  su: 3,
  paket: [5, 10],
};

//object variable ları dışarıya aynı isimle çıkar
const { corba, salata } = fiyat;
console.log(corba, salata); //{tavuk: 10, mercimek: 8, ezo: 9} 9
//console.log(tatli, salata); // Uncaught ReferenceError: tatli is not defined

const { corba: soup, tatli: desert } = fiyat;
console.log(soup, desert); //{tavuk: 10, mercimek: 8, ezo: 9}ezo: 9mercimek: 8tavuk: 10[[Prototype]]: Object {sutlac: 14, baklava: 20}

//Default değer atama

const { menu = [], anaYemek: mainCourse = [] } = fiyat;
console.log(menu, mainCourse); //[] {kuru: 17, kofte: 22, makarna: 10}
console.log(fiyat); //{corba: {…}, anaYemek: {…}, tatli: {…}, salata: 9, su: 3}

const { menu1 = [], anaYemek: mainCourse1 } = fiyat;
console.log(menu1, mainCourse1); //[] {kuru: 17, kofte: 22, makarna: 10}

const { paket: pack = [2] } = fiyat;
console.log(pack); //[5, 10]

// Mutating variables

let a = 81;
let b = 42;
const object1 = {
  a: 45,
  b: 55,
  v: 77,
};
// { a, b } = object1;   <<<<<<<Unexpected token '='
// satır başı { ile başlayınca block zannediyor, o nedenle hata veriyor. Biz de parantez içine aldık
({ a, b } = object1);
console.log(a, b); //45 55

//Nested objects
const {
  corba: { tavuk: chicken },
} = fiyat;
console.log(chicken); //10

//tanımlayacağın bir fonksiyon da object lere deconstruction yapabilir
const order = {
  time: 2000,
  hc: 'hot',
  fs: 'fast',
};

const f1 = function (obj) {
  console.log(
    `order will be delivered at ${obj.time}, heat:${obj.hc}, fs:${obj.fs}`
  );
};

f1(order); //order will be delivered at 2000, heat:hot, fs:fast
*/
//-----------------for-of loop----------------------------------
/*
const lokanta = {
  corba: ['tavuk', 'mercimek', 'ezo'],
  anaYemek: ['kuru', 'kofte', 'makarna'],
  tatli: {
    sutlac: 14,
    baklava: 20,
  },
  salata: 9,
  su: 3,
};

// Entries() kullanımı

const tuzlular = [...lokanta.corba, ...lokanta.anaYemek];
console.log(tuzlular); //['tavuk', 'mercimek', 'ezo', 'kuru', 'kofte', 'makarna']
for (const item of tuzlular) console.log(item);

for (const item of tuzlular.entries()) console.log(item);
console.log([...tuzlular.entries()]);
*/
//-------------------------Enhanced Object Literals--------------------------
/*
const su = 4;
const malzeme = ['patates', 'sogan', 'pirinc'];
const lokanta = {
  corba: ['tavuk', 'mercimek', 'ezo'],
  anaYemek: ['kuru', 'kofte', 'makarna'],
  tatli: {
    sutlac: 14,
    baklava: 20,
  },
  salata: 9,
  su, //variable ı önceden tanımlanmış ise bu şekilde yazabilirsin.
  [malzeme[2]]: 'baldo', // burada variable değerini köşeli parantez içine almayı unutma!
  gununCorbasi(a) {
    //fonksiyonu böyle olduğu gibi basitleştirilmiş formda yazabilirsin.
    console.log(`${this.corba[a]}`);
  },
};

lokanta.gununCorbasi(1);
console.log(lokanta);

//lokanta.corba variable ı var mı yok mu kontrol etmek için şu kullanılır;

const varYok = lokanta.corba ? 'var' : 'yok';
console.log(varYok);
*/
//-----------------------Optional Chaining------------------------------
//object içindeki variable ların var olup olmadığını sorgulamaya yarar
/*
const obj1 = {
  a: 6,
  b: 10,
  c: [17, 18],
  d: { d1: 20, d2: 21, d3: { d31: 22.1, d32: 22.2 } },
  mtd: function (x) {
    return x + 1;
  },
};
//objects
console.log(`${obj1.d?.d1}`); //20
console.log(`${obj1.d?.d1?.d11}`); //undefined
console.log(`${obj1.d?.d3?.d32}`); //22.2

//methods
console.log(`${obj1.mtd?.(6)}`);
console.log(`${obj1.mtd1?.(5) ?? 'method doesnt exist'}`);

//arrays
const array2 = [{ a: 4, b: 5 }];
console.log(array2);
console.log(array2[0]?.a ?? 'a doesnt exist'); //4

const array3 = [3, 4, 5];
console.log(array3?.[0] ?? 'no value');
*/
//---------------------Looping Objects :Objecy Keys, Values and Entries---------------------------------
/*
const object1 = {
  property1: 5,
  property2: 10,
  property3: 15,
  property4: 'yirmi',
  altObject1: {
    alt1prop1: 100,
    alt1prop2: 110,
  },
};

//Object.keys ile (O büyük yazılmak zorunda) objenin property name ler alınır.
//çıktıları array içinde veriyor
console.log(Object.keys(object1)); //['property1', 'property2', 'property3', 'property4', 'altObject1']
console.log(Object.keys(object1.altObject1)); //['alt1prop1', 'alt1prop2']

//Object.values() ile value lar alınıyor array içine
console.log(Object.values(object1)); //[5, 10, 15, 'yirmi', {…}]
console.log(Object.values(object1.altObject1)); //[100, 110]
//normalde çıktı array içinde verilmezdi. Aşağı satırda gösterilen şeklinde verilirdi.
console.log(object1); //{property1: 5, property2: 10, property3: 15, property4: 'yirmi', altObject1: {…}}

// Entries method,  entries() return the index number and the element itself.
// yani hem keys hem de values değerlerini birlikte içeren sonucu verir.

console.log(Object.entries(object1));
/*Sonuç array içinde arrayler oluşturarak hem key hem value çıktısını vermiş oldu.
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['property1', 5]
1: (2) ['property2', 10]
2: (2) ['property3', 15]
3: (2) ['property4', 'yirmi']
4: (2) ['altObject1', {…}]      */

//Bu bilgileri satır satır almak istediğimizde for of döngüsünü kullanabiliriz.
/*
const s1 = Object.entries(object1);
for (const x of s1) {
  console.log(x);
}
/*   ['property1', 5]
 (2) ['property2', 10]
 (2) ['property3', 15]
 (2) ['property4', 'yirmi']
 (2) ['altObject1', {…}]      */
//----------------------------------SETS---------------------------------------
const staff = ['worker', 'security', 'manager', 'worker', 'chief', 'security'];
const positions = new Set(staff);
console.log(positions); // {'worker', 'security', 'manager', 'chief'}
//çıktıyı kıvrımlı parantez içinde veriyor.

//set i array e çevirmek için köşeli parantez içinde spread kullanacağız
const doArray = [...new Set(staff)];
console.log(doArray); //['worker', 'security', 'manager', 'chief']

console.log(positions.size); //4
