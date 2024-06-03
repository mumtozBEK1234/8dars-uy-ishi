// 1-masala

// let arr = [1, 2, 3, 4, 5];
// function motiv(arg) {
//   let res = 0;
//   for (let i = 0; i < arg.length; i++) {
//     res = res + arg[i];
//   }
// return res;
// }
// console.log(motiv(arr));


// 2-masala

// let arr = [1, 5, 3];

// function motiv(arg) {
//   let res = 0;

//   for (let i = 0; i < arg.length; i++) {
//     if (arr[0] > arr[1] && arr[0] > arr[2]) {
//       console.log(arr[0]);

//     } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
//       console.log(arr[1]);

//     } else {
//       console.log(arr[2]);

//     }
//   }
//   return res;
// }
// console.log(motiv(arr));



// 3-masala

// let arr = [5, 5, 3];
// function motiv(arg) {
//   let res = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arr[0] < arr[1] && arr[0] < arr[2]) {
//       console.log(arr[0]);
//     } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
//       console.log(arr[1]);
//     } else {
//       console.log(arr[2]);
//     }
//   }
//   return res;
// }
// console.log(motiv(arr));


// 4-masala

// let arr = [-22,22,1,-44,-12];
// function manfiyMusbat(array) {

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
        
//       array[i] = -array[i];
//     }
//   }
//   return array;
// }
// console.log(manfiyMusbat(arr));



// 5-masala
// let arr = [22, 22, 1, 44, 12];
// function ikkiBarobar(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2;
//   }
//   return array;
// }
// console.log(ikkiBarobar(arr));


// 6-masala

// let arr = [7,2,1,4,12];
// function juftSonYoq(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       array[i] = null
//     }
//   }
//   return array;
// }
// console.log(juftSonYoq(arr));


// 7-masala

// let arr = [7,2,1,4,12];
// function toqSonYoq(array) {
//   for (let i = 0; i < array.length; i++) {
// if (array[i] % 2 == 1) {
//   array[i] = null
// }
//   }
//   return array;
// }
// console.log(toqSonYoq(arr));


// 8-masala
// let arr = [1, 7, 2, 9, 4,];
// let element = 1;
// function tekshiruv(array, element) {
//   return array.includes(element);
// }
// console.log(element);
// console.log(tekshiruv(arr, element));



// 9-masala
// let testArray = [5, 8, 3, 9, 4, 6];
// function teskari(array) {
//   return array.reverse();
// }
// console.log(teskari(testArray));



// 10-masala
// let arr = [10, 20, 30, 40, 50];
// let son = 25;
// function katta(array, son) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > son) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(arr);
// console.log(katta(arr, son));



// 11-masala
// let arr = [10, 20, 30, 40, 50];

// function birgaOshir(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     array[i]++
//   }
//   return array;
// }
// console.log(birgaOshir(arr));



// 12-masala
// let array = [22,66,88,,36,30];
// let element = 30;
// function indeksniTop(element, array) {
//   return array.indexOf(element);
// }
// console.log(array.indexOf(element));



// 14-masala
// let array = [-3, 5, -8, 10, -2, 0, 7];
// function musbatSonlar(array) {
//   let musbatlar = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       musbatlar.push(array[i]);
//     }
//   }
//   return musbatlar;
// }
// console.log(musbatSonlar(array));



// 15-masala

// let array = [-3, 5, -8, 10, -2, 0, 7];
// function manfiySonlar(array) {
//   let musbatlar = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       musbatlar.push(array[i]);
//     }
//   }
//   return musbatlar;
// }
// console.log(manfiySonlar(array));



// 16-masala
// let array = [1, 2, 3, 4, 5];
// function satir(array) {
//   return array.join(', ');
// }
// console.log(satir(array));