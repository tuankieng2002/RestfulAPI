/**
 * Cho một chuỗi schỉ chứa các ký tự , '('và , ')'xác định xem chuỗi đầu vào có hợp lệ hay không.'{''}''['']'

Chuỗi đầu vào hợp lệ nếu:

Các dấu ngoặc mở phải được đóng bằng cùng một loại dấu ngoặc.
Các dấu ngoặc mở phải được đóng theo đúng thứ tự.
Mọi dấu ngoặc đóng đều có một dấu ngoặc mở tương ứng cùng loại.
 */
/*var s = "[][][][][]";
var ngu = false;
var isValid = function (s) {
    for (var i = 0; i < s.length; i++) {

        if (s[i] === "{" && s[i + 1] === "}") {
            ngu = true;
            i++;
        } else if (s[i] === "[" && s[i + 1] === "]") {
            ngu = true;
            i++;
        } else if (s[i] === "(" && s[i + 1] === ")") {
            ngu = true;
            i++;
        } else {
            ngu = false;
            break;
        }

    }

};

isValid(s);

console.log(ngu);*/

//var mang = [ 'đẹp trai', 'soái ca', 'ga lăng', 'kute'];
/**var newMang = mang.map(function (item){
    return "Thái " + item;
})**/
//mang = newMang.join(" ").split(" ").join("");
//console.log(mang);

//var mang = [ 1,2,3,11,12,13,14,4,5,6,7,8,9,10];
/**var newMang = mang.filter(function (item){
    return  item>=9 ;
})**/
//console.log(newMang);

//var mang = [ 1,2,3,11,12,13,14,4,5,6,7,8,9,10];
/**var newMang = mang.sort(function (a,b){
    if(a>b){return 1}
    else if(a<b){return -1}
    else {return 0}
})**/

/**var mang = [{
    name: "thai",
    age: 20,
    score: 10
},
{
    name: "tai",
    age: 18,
    score: 9
},
{
    name: "hai",
    age: 19,
    score: 8
},
];

var newMang = mang.sort(function (a, b) {
    if(a.age > b.age){return 1}
    else if(a.age < b.age){return -1}
    else {return 0}
})

console.log(newMang);**/

/**var day = new Date();
console.log(day.getMonth()+1);**/

//Math.round(1.6) làm tròn số 1.6 thành 2           Math.round(1.4) làm tròn số 1.4 thành 1
//Math.ceil(1.2) làm tròn số 1.2 lên thành 2
//Math.floor(1.6) làm tròn số 1.6 xuống thành 1     //Math.floor(1.2) làm tròn số 1.2 xuống thành 1
//Math.random() tạo ra số ngẫu nhiên từ 0 đến 1
//Math.pow(2,3) làm tròn số 2 lên 3 bậc
//Math.sqrt(9) làm tròn căn bậc 2 của 9
//Math.abs(-9) làm tròn số tuyệt đối của -9
//Math.min(1,2,3,4,5,6,7,8,9,10) tìm số nhỏ nhất trong dãy số
//Math.max(1,2,3,4,5,6,7,8,9,10) tìm số lớn nhất trong dãy số

//var random = 2;
//console.log(Math.floor(Math.random() * random));


/**var person ={
    name: "thai",
    age: 20,
}
//c1
//var person2 = {...person} //cách này chỉ copy được 1 cấp độ
//c2
//shallow copy
var person3 = Object.assign({},person)// lấy ra tất cả các thuộc tính của person và gán vào person3

var arr = [1,2,3,4,5,6,7,8,9,10];

//var arr1 =[...arr];
var x = JSON.stringify(person);//JSON.stringify chuyển đổi đối tượng thành chuỗi

var x2 = JSON.parse(x);//chuyển đổi từ chuỗi sang object

console.log(x2);**/


/**var list1 = [1,2,4];
var list2 = [7,9,6,5,8,3];

//concat dung để nối 2 mảng lại với nhau
var list3 = list1.concat(list2);
//sort dung để sắp xếp mảng theo thứ tự tăng dần
var mergeTwoLists = list3.sort( function(a, b){
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
})

mergeTwoLists.reverse();//dùng để đảo ngược mảng

console.log(mergeTwoLists);**/

/**function student() {
    var money = 0;

    return {
        getMoney: function () {
            return money;
        },
        setMoney: function (soTienMuonTang) {
            soTienMuonTang = soTienMuonTang < 0 ? 0 : soTienMuonTang;
            money += soTienMuonTang;
        }
    }
}

var st = student();
st.setMoney(-1);
var mn =st.getMoney();

console.log(mn);**/


/*
Cho một mảng số nguyên nums, di chuyển tất cả 0đến cuối mảng trong khi duy trì thứ tự tương đối của các phần tử khác không.

Lưu ý rằng bạn phải thực hiện việc này tại chỗ mà không tạo bản sao của mảng.
*/
/**var nums = [0,1,0,3,12,0,5,0]

var moveZeroes = function(nums) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i]===0){
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};
moveZeroes(nums)

console.log(nums);**/

//bai 4:

var prices =  [7,1,5,3,6,4]
var loinhuan=0;
var giamua= prices[0];//7
var maxProfit = function(prices) {
    for(var i = 0; i < prices.length; i++){
        if(prices[i]<giamua){//1<7
            giamua = prices[i];//1
            //console.log(giamua);
        }
        if(prices[i]-giamua>loinhuan){//1-7>0?-6=>false
            loinhuan = prices[i]-giamua;
            console.log("prices:"+prices[i] +" Gimua:"+giamua+" loinhuan:"+loinhuan);
            //console.log(loinhuan);
        }
    }
};
maxProfit(prices)
console.log(loinhuan);

//th1: nếu giá trị trong mang prices[i] nhỏ