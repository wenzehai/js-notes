let a = 10;
console.log(a+10);              //20


//数组
let arr = ['red','green','blue'];
arr.push('yellow');
console.log(arr);

//循环
for(let i = 0; i< arr.length; i++ ) {
    console.log(arr[i]);
}

//面向对象
function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    console.log(this.name);
};

let p1 = new Person('zehai');
p1.showName();