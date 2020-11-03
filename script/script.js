console.log("Hello Form Script File");
const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const imageToChange = document.getElementById("image");


function changeImage(){
    console.log("button clicked");
    let rnd = Math.floor((Math.random() * images.length-1) +1);
    console.log(rnd);
    imageToChange.src = images[rnd];
}