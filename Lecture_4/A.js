console.log("===== Variables =====");

var text = "Something";
console.log(text);

console.log("\n===== If else =====");
var a=20;
var b=30;
if(a>b){
    console.log("A is greater, value of a is: " , a);
}
else{
    console.log("B is greater, value of b is: " , b);
}

console.log("\n===== Functions =====");
function abes(){
    console.log("Welcome Students");
    console.log("Welcome to node js");
}
abes();
abes();

console.log("\n===== Function with parameters =====");
function greet(Fname, Lname){
    console.log("Welcome " + Fname + " " + Lname);
}
greet("John", "Doe");

console.log("\n===== Function Return =====");
function add(a, b){
    return a+b;
}
var result=add(10, 20);
console.log("The result is: " + result);

console.log("\n===== Default Arguments =====");
function fullName(Fname="John", Lname="Doe"){
    return Fname + " " + Lname;
}
console.log("The full name is: " + fullName());
console.log("The full name is: " + fullName("Jane", "Smith"));

console.log("\n===== Percentage =====");
function percentage(maths, english,science){
    var total=maths+english+science;
    var percent=(total/300)*100;
    return percent;
}
var result=percentage(80, 90, 70);
console.log("The percentage is: " + result + "%");
