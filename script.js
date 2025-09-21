// Student Management System

// class Student {
//     constructor(id, name, grades) {
//         this.id = id;
//         this.name = name;
//         this.grades = grades;
//     }
//     addGrade(grade) {
//         this.grades.push(grade);
//     }
//     getAverage() {
//         const sum = this.grades.reduce((total, num) => total + num, 0);
//         return sum / this.grades.length;
//     }
// }
// const user = new Student(1, "Abu", [90, 80, 85]);

// user.addGrade(95);
// console.log(user.getAverage());

// Shape (Inheritance + Polymorphism)

// class Shape {
//     area() {
//         return 0;
//     }
// }

// class Circle extends Shape {
//     constructor(r) {
//         super();
//         this.r = r;
//     }
//     area() {
//         return Math.floor(Math.PI * this.r ** 2);
//     }
// }

// class Square extends Shape {
//     constructor(a) {
//         super();
//         this.a = a;
//     }
//     area() {
//         return this.a * this.a;
//     }
// }

// class Rectangle extends Shape {
//     constructor(a, b) {
//         super();
//         this.a = a;
//         this.b = b;
//     }
//     area() {
//         return this.a * this.b;
//     }
// }

// const circ = new Circle(5);
// console.log(circ.area());

// const sqr = new Square(4);
// console.log(sqr.area());

// const rec = new Rectangle(4, 6);
// console.log(rec.area());
