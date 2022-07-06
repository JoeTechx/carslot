const next = document.querySelector(".nextBtn"),
    prev = document.querySelector(".prevBtn"),
    num = document.querySelector(".num");



let images = ["image/car 1.png", "image/lamborghini-aventador 1.png"]


let i = 1;

document.getElementsByClassName("nextBtn")[0].addEventListener("click", Next);

function Next() {
    i++
    i = i % 2
    // console.log(i);
    document.getElementsByClassName("car-1")[0].src = images[i]
    // a = (a > 2) ? "0" + a : a;
    // num.innerHTML = a;
    document.getElementById("num").innerHTML = "02";
    // console.log(i);
}

document.getElementsByClassName("prevBtn")[0].addEventListener("click", Previous);

function Previous() {
    i--
    i = i < 0 ? images.length - 1 : i;
    // console.log(i);
    document.getElementsByClassName("car-1")[0].src = images[i]
}


















































// const slides = document.querySelectorAll(".myslider");
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");

// slides.forEach(function (slide, index) {
//     slide.getElementsByClassName.left = `${index * 100}%`
// });

// let counter = 0

// nextBtn.addEventListener("click", function () {
//     counter++;
//     carousel();
// });
// prevBtn.addEventListener("click", function () {
//     counter--;
//     carousel();
// })

// function carousel() {
//     // working with slides
//     if (counter === slides.length){
//         counter = 0;
//     }
//     if (counter < 0) {
//         counter = slides.length - 1;
//     }
// // working with buttons
// if (counter < slides.length - 1){
//     nextBtn.style.display = "block";
// }else{
//     nextBtn.style.display = "none";
// }
// if (counter > 0) {
//     prevBtn.style.display = "block";
// }else{
//     prevBtn.style.display = "none";
// }
//     slides.forEach(function (slide) {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }
// prevBtn.style.display = "none";