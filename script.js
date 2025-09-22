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

$(document).ready(function () {
    const $thumbnails = $(".gallery-thumbs img");
    const $mainImage = $("#mainProductImage");
    const $prevBtn = $("#prevImage");
    const $nextBtn = $("#nextImage");
    let currentIndex = 0;
    const totalImages = $thumbnails.length;

    if ($thumbnails.length === 0) {
        console.error("Thumbnail rasmlar topilmadi!");
        return;
    }

    $thumbnails.first().addClass("active");

    $thumbnails.on("click", function (e) {
        e.preventDefault();
        const index = parseInt($(this).data("index"));

        if (index !== currentIndex) {
            updateImage(index);
        }
    });

    if ($prevBtn.length) {
        $prevBtn.on("click", function (e) {
            e.preventDefault();
            const newIndex =
                currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
            updateImage(newIndex);
        });
    }

    if ($nextBtn.length) {
        $nextBtn.on("click", function (e) {
            e.preventDefault();
            const newIndex =
                currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
            updateImage(newIndex);
        });
    }

    function updateImage(index) {
        console.log("Rasm o'zgartirilmoqda:", index);

        $thumbnails.removeClass("active");

        $thumbnails.eq(index).addClass("active");

        const newImageSrc =
            $thumbnails.eq(index).data("large") ||
            $thumbnails.eq(index).attr("src");

        $mainImage.fadeOut(200, function () {
            $mainImage.attr("src", newImageSrc).fadeIn(200);
        });

        currentIndex = index;
    }

    $(document).on("keydown", function (e) {
        if ($(".product-gallery").is(":visible")) {
            switch (e.keyCode) {
                case 37:
                    if ($prevBtn.length) $prevBtn.click();
                    break;
                case 39:
                    if ($nextBtn.length) $nextBtn.click();
                    break;
            }
        }
    });

    console.log("Gallery initialized:", { totalImages, currentIndex });
});
