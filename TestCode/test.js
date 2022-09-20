var so = 123456897;

//sắp xếp theo số tăng dần
//https://freetuts.net/ham-math-floor-trong-javascript-4170.html
var sortNumber = so.toString().split('').sort(function(a, b){
    return a-b
}).join('');

console.log( Number(sortNumber));




/**var mang1 = so.toString().split("");
var ketqua = mang1.reverse().join("");
var so2 = Number(ketqua);
console.log(so2);**/


/**var so2 = 0;
while(so > 0){
    so2 = so2*10 + so%10;
    console.log(so*10,so%10);
    so = Math.floor(so/10);//Math.floor(1.6) làm tròn số 1.6 xuống thành 1
}
console.log(so2);**/

/**giải thích code trên
so = 12345678
so2 = 0

so2 = 0*10 + 12345678%10 = 0*10 + 8 = 8
so = Math.floor(12345678/10) = Math.floor(1234567.8) = Math.floor(1234567) = 1234567
so = 1234567

so2 = 8*10 + 1234567%10 = 8*10 + 7 = 87
so = Math.floor(1234567/10) = Math.floor(123456.7) = Math.floor(123456) = 123456
so = 123456

so2 = 87*10 + 123456%10 = 87*10 + 6 = 876
so = Math.floor(123456/10) = Math.floor(12345.6) = Math.floor(12345) = 12345
so = 12345

so2 = 876*10 + 12345%10 = 876*10 + 5 = 8765
so = Math.floor(12345/10) = Math.floor(1234.5) = Math.floor(1234) = 1234
so = 1234

so2 = 8765*10 + 1234%10 = 8765*10 + 4 = 87654
so = Math.floor(1234/10) = Math.floor(123.4) = Math.floor(123) = 123
so = 123

so2 = 87654*10 + 123%10 = 87654*10 + 3 = 876543
so = Math.floor(123/10) = Math.floor(12.3) = Math.floor(12) = 12
so = 12

so2 = 876543*10 + 12%10 = 876543*10 + 2 = 8765432
so = Math.floor(12/10) = Math.floor(1.2) = Math.floor(1) = 1
so = 1

so2 = 8765432*10 + 1%10 = 8765432*10 + 1 = 87654321
so = Math.floor(1/10) = Math.floor(0.1) = Math.floor(0) = 0
so = 0

so2 = 87654321
so = Math.floor(0/10) = Math.floor(0) = 0
so = 0**/


// var mang = [1,2,3,4]
// var ketqua = 0;
// for(var i = 0; i < mang.length; i++){
//     ketqua += mang[i];
// }

// console.log(ketqua);
