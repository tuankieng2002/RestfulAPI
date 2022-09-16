//console.log(this)
//globalThis là để lấy ra đối tượng global tự động dần dần thay thế cho window và global trong nodejs và browser
//global là đối tượng global trong nodejs và browser

/**function test(name){
    console.log(this+ "name");
}

//var hamDaDcBind = test.bind({myObject: "thai"}, "Thai dúi");//bind trả về 1 hàm mới và có thể truyền thêm tham số vào hàm mới
test.call({myObject: "thai"}, "Thai dúi");//call trả về giá trị của hàm và có thể truyền thêm tham số vào hàm
hamDaDcBind();*/

/**var mang = [1,2,3,4,5,6]

//... là nhà phân rã mảng thành từng phần tử và truyền vào hàm max để tìm số lớn nhất
//Math.max.apply(null, mang) cũng làm được việc này
//null trong apply là đối tượng mà hàm sẽ gọi đến và null là this, context
var max = Math.max(...mang);

console.log(max)**/

/*function Person(){
    this.name = "thai";
    this.age = 20;
}

var person = new Person();

console.log(person.name);*/

//OOP lập trình hướng đối tượng, một phương pháp lập trình dựa trên khái niệm về lớp và đối tượng: kế thừa, đóng gói, trừu tượng, đa hình
//class Person
//constructor là hàm khởi tạo
/**class Person{
    constructor(a,b){
        this.name = a;
        this.age = b;
    }
}
class Student extends Person{
    constructor(name, age, lop){
        super(name, age);
        this.lopHoc =lop
    }
    //phương thức ghi đè phương thức của lớp cha Person
    gioithieu(){
        console.log("xin chao, toi la " + this.name + " va toi " + this.age + " tuoi");
    }
}
//new là từ khóa để tạo ra 1 đối tượng mới từ class Person và gán cho biến person
var student = new Student("thai", 20, "12A1");

student.gioithieu();**/

//Callback là hàm được truyền vào hàm khác như 1 tham số và được gọi lại trong hàm đó khi nào cần thiết (thường là khi xảy ra sự kiện) để thực hiện một công việc nào đó (thường là một công việc bất đồng bộ) và sau đó hàm gốc sẽ tiếp tục thực hiện công việc của nó.

//Là một function được truyền dưới dạng tham số

//Callback hell là khi có nhiều callback lồng nhau, dẫn đến code khó đọc, khó bảo trì, khó debug

//clg setTimeout không xuất hiện trước clg 1 vì setTimeout là hàm bất đồng bộ nên nó sẽ chạy sau khi hàm chính chạy xong và nó sẽ chạy sau 1 khoảng thời gian nhất định (thời gian này có thể là 0) và nó sẽ chạy sau khi call stack rỗng (call stack là 1 ngăn xếp các hàm đang được gọi) và nó sẽ chạy sau khi các hàm trong call stack chạy xong.

//những câu lệnh bắt đồng bộ: setTimeout, setInterval, ajax, fetch, requestAnimationFrame, setImmediate, I/O, process.nextTick (nodejs) đều là hàm bất đồng bộ nên nó sẽ chạy sau khi call stack rỗng và nó sẽ chạy sau khi các hàm trong call stack chạy xong. Còn những câu lệnh khác thì đều là hàm đồng bộ nên nó sẽ chạy trước khi call stack rỗng và nó sẽ chạy trước khi các hàm trong call stack chạy xong.
/**setTimeout(function(){
    console.log("Hello");
}, 0);

console.log(1);**/

var n =256
// var ketqua =0;
// //var mang = [];

// function run(n){

// 	do {
//         if (n % 2 == 1) {
//             break;
//         }else{

//         n = n/2;
//         ketqua++;
//         }

// 	} while (n%2 == 0)

// 	//console.log(ketqua);
// }

// run(n);
// console.log(ketqua);
function run(n){
    // var kq = Math.sqrt(n);


    // if (Number.isInteger(kq)){
    //     console.log(true);
    // }else {
    //     console.log(false);
    // }
    console.log(Number.isInteger(Math.sqrt(n)));

}
run(n);
