const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const images = document.querySelector(".img-car").children;
const bgImages = document.querySelector(".img-car").children;
let index = 0;
const length = images.length;
const numbers = document.getElementById("number");
const price = ['$1,500,450', '$1,700,450'];
const priceHeading = document.getElementById("price");
const millage = ['10,000', '12,000'];
const millageHeading = document.getElementById("millage");
const popupBg = ['rgb(205, 204, 204)', ' #5d5c61']
const popup = document.getElementById("popup");
const mileage = ['mileage: 10,000', 'mileage: 12,000'];
const mileageHeading = document.getElementById("mileage");
const horsepower = ['Horse power: 20,000Hp', 'Horse power: 30,000Hp',];
const horsepowerHeading = document.getElementById("horse-power");

const nextImage = (e) => {
    // console.log(e);
    if (e == 'next') {
        index++;
        numbers.innerHTML = `0${index + 1}`;
        priceHeading.innerHTML = `${price[index]}`;
        millageHeading.innerHTML = `${millage[index]}`;
        mileageHeading.innerHTML = `${mileage[index]}`;
        horsepowerHeading.innerHTML = `${horsepower[index]}`;
        if (index == length) {
            index = 0;
            numbers.innerHTML = `0${index + 1}`;
            priceHeading.innerHTML = `${price[0]}`;
            millageHeading.innerHTML = `${millage[0]}`;
            mileageHeading.innerHTML = `${mileage[0]}`;
            horsepowerHeading.innerHTML = `${horsepower[0]}`;
        }
    } else {
        if (index == 0) {
            index = length - 1;
            numbers.innerHTML = `0${index + 1}`;
            priceHeading.innerHTML = `${price[index]}`;
            millageHeading.innerHTML = `${millage[index]}`;
            mileageHeading.innerHTML = `${mileage[index]}`;
            horsepowerHeading.innerHTML = `${horsepower[index]}`;
        } else {
            index--;
            numbers.innerHTML = `0${index + 1}`;
            priceHeading.innerHTML = `${price[index]}`;
            millageHeading.innerHTML = `${millage[index]}`;
            mileageHeading.innerHTML = `${mileage[index]}`;
            horsepowerHeading.innerHTML = `${horsepower[index]}`;
        }
    }
    for (let i = 0; i < length; i++) {
        // console.log(i);
        images[index].classList.remove('show');
        bgImages[i].classList.remove('show');
    }
    images[index].classList.add('show');
    bgImages[index].classList.add('show');
}
prev.addEventListener('click', () => {
    nextImage('prevBtn');
})

next.addEventListener('click', () => {
    nextImage('nextBtn');
})

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}




















// const next = document.querySelector(".nextBtn"),
//     prev = document.querySelector(".prevBtn"),
//     num = document.querySelector(".num");



// let images = ["image/car 1.png", "image/lamborghini-aventador 1.png"]


// let i = 0;

// document.getElementsByClassName("nextBtn")[0].addEventListener("click", Next);

// function Next() {
//     i++
//     i = i % 2
//     // console.log(i);

//     document.getElementsByClassName("car-1")[0].src = images[i]




//     // a = (a > 2) ? "0" + a : a;
//     // num.innerHTML = a;
//     // document.getElementById("num").innerHTML = "02";
//     // console.log(i);
// }

// document.getElementsByClassName("prevBtn")[0].addEventListener("click", Previous);

// function Previous() {
//     i--
//     i = i < 0 ? images.length - 1 : i;
//     // console.log(i);
//     document.getElementsByClassName("car-1")[0].src = images[i]
// }






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