/**let number = 0;
let ketqua = ++number + ++number + number++;
console.log(`"ketqua: "${ketqua}`);
console.log(`"number: "${number}`);**/

/**const nums = [2,7,11,15,19];
const target = 21;
const result = [];
for(let i = 0; i < nums.length; i++){// i=0,1,2,3
    for(let j = i + 1; j < nums.length; j++){// j=0,1,2,3 if j = i + 1 => j = 1,2,3
        if(nums[i] + nums[j] === target){
            result.push(i);
            result.push(j);
            break;
        }
    }
    if(result.length > 0){
        break;
    }
}
console.log(result );**/


// const ob = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
//   IV: 4,
//   IX: 9,
//   XL: 40,
//   XC: 90,
//   CD: 400,
//   CM: 900,
// };
// let roman = "MCMXCVI";
// let result = 0;
// for (let i = 0; i < roman.length; i++) {
//     //console.log(i+1)
//     if (i + 1 < roman.length) {
//         //console.log(roman [i+0]);
//         let temp = roman[i] +  roman[i+ 1]; //temp=IV

//         if (ob[temp]) {
//             result += ob[temp];
//             i++;
//         } else {
//             result += ob[roman[i]];
//         }
//     } else {
//         result += ob[roman[i]];
//         //console.log(roman [i+0]);
//     }
// }
// console.log(result);


/*
Bài tập
Cho 1 số n . Viết một chương trình để tính toán và in ra màn hình giai thừa của số đã nhập (n!)

Ví dụ:

Với n = 5, đầu ra được in ra màn hình là  "120"
Vì 5! = 5 * 4 * 3 * 2 * 1 = 120
Với n = 3, đầu ra được in ra màn hình là  "6"
Vì 3! = 3 * 2 * 1 = 6
Đầu vào: 1 số nguyên n nhập từ bàn phím
Điều kiện tiền đề:
1 ≤ n ≤ 20
Đầu ra: giai thừa của số đã cho n
*/
/**function run(n){
    var factorial = 1;

    for(let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

run(5);**/

/**
Bài tập
Cho 1 số n. Sử dụng while loop để in ra các số chẵn từ 1 tới n

Ví dụ:
n = 7; In ra: 2,4,6
n = 10; In ra: 2,4,6,8,10
Đầu vào: n
Đầu ra: các số chẵn từ 1 tới n} n
 */

/**function run(n){
    var output = "";
    var i = 0;
    while(i++ < n ) { // biến i tăng dần với giới hạn n
        if (i%2==0) { // với i chia lấy phần dư = 0 thì thực hiện
            output += i + ','; // output(mới) = output(cũ) + i + 'phẩy'
           // console.log(i)
        }
    }
    console.log(output.slice(0,-1)); // sử dụng slice để trích xuất phần tử trong mảng output
}

run(5)**/

/**var number = 2;
ketqua= number++ + ++number + number++;



console.log(number);

console.log(ketqua);**/

//console.log(5 === "5");

/**var arr = [1, 2, 3, 4, 5]

for(var i = 1 ; i <  5; i++) {
    console.log(arr[i]);
}*/


//let sử dụng tạm thời trong 1 block code nào đó (if, for, while, function, ...)
//let có thể khai báo lại biến
//let có thể khai báo biến trong 1 block code
//let không thể khai báo biến global
//let có thể khai báo biến trong 1 function
//let có thể khai báo biến trong 1 object

//var có thể khai báo lại biến
//var có thể khai báo biến global
//var có thể khai báo biến trong 1 function
//var có thể khai báo biến trong 1 object

// let score = 100;

// function run() {
//     if (score > 50) {
//         let message = "Good job";
//         console.log(message);
//     }
// }
// //console.log(message);
// run();


let a= "abcdekf";
let b= "abcdekf";
function run() {
    if(a.length !== b.length ){
        console.log("false");
    }else{
        var a1 = [...a].sort().join("");
        var b1 = [...b].sort().join("");
        if(a1 === b1){
            console.log("true");
        }else{
            console.log("false");
        }
    }
}
run();


/**var s = "abccb::::::a"
 var isPalindrome = function(s) {
    var chuoi = s.toLowerCase().split(":").join("");
    chuoi = chuoi.split(",").join("");//split(",") tách chuỗi theo dấu phẩy, join("") nối chuỗi lại
    chuoi = chuoi.split(" ").join("");//split tách chuỗi thành mảng, join nối mảng thành chuỗi
    console.log(`"${chuoi}"`);
    var newchuoi = chuoi;
    if (chuoi.length === 0) {
        return true;
    }else if (chuoi === newchuoi.split("").reverse().join("")) {
        return true;
    }
    return false;

};
console.log(isPalindrome(s));**/


