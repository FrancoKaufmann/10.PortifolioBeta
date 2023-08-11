const darkMode = document.querySelector(".darkMode");
var html = document.querySelector("html");


function darkMod() {

    var html = document.querySelector("html");
    var header = document.querySelector("header");
    var lightButton = document.querySelector(".lightButton");
    var three = document.querySelector("#three");
    var four = document.querySelector(".four");
    var sunny = document.querySelector(".sunny");
    var moon = document.querySelector(".moon");

    html.classList.toggle("dark");
    header.classList.toggle("darkNav");
    lightButton.classList.toggle("darkButton");
    three.classList.toggle("darkThree");
    four.classList.toggle("darkFour");
    sunny.classList.toggle("dark");
    moon.classList.toggle("dark");

}




