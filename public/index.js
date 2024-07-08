const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// let slideIndex = 0;
//         showSlides();

//         function showSlides() {
//             let slides = document.getElementsByClassName("mySlides");
//             for (let i = 0; i < slides.length; i++) {
//                 slides[i].style.display = "none"; // Ensure all slides are hidden
//             }
//             slideIndex++;
//             if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide after the last slide
//             slides[slideIndex - 1].style.display = "block"; // Show the current slide
//             setTimeout(showSlides, 3000); // Change slide every 3 seconds
//         }

// const imagePaths=['./moving-van.jpg',
// './metaair2.jpg','./metaair1.jpg',
// './metaair2.jpg']


// //my function to get a random in multiples of the array length
// function getRamdomIdex(array){
//     return Math.floor(Math.random()* array.length);
// }

// //my variable that holds the randomly selected image path
// const randomImagePath = imagePaths[getRamdomIdex(imagePaths)];


// //assigning the random images to the src of my image 
// document.querySelector("#main #picchange .image").src = randomImagePath;





// const images = ['image1', 'image2', 'image3', 'image4'];
// let currentIndex = 0;
// const picchangeDiv = document.getElementById('picchange');

// function changeImage() {
//     picchangeDiv.className = images[currentIndex];
//     currentIndex = (currentIndex + 1) % images.length;
//     setTimeout(changeImage, 1000); // Change image every 3 seconds
// }

// changeImage();


// function buttonAnimation() {
//   while (true) {
//     var activeButton =document.getElementById('picchange');
//     activeButton.classList.add("image1")
//     setTimeout(function(){
//         activeButton.classList.remove("image1")
//     }, 4000);
//     activeButton.classList.add("image2")
//     setTimeout(function(){
//         activeButton.classList.remove("image2")
//     }, 4000);
//     activeButton.classList.add("image3")
//     setTimeout(function(){
//         activeButton.classList.remove("image3")
//     }, 4000);
//     activeButton.classList.add("image4")
//     setTimeout(function(){
//         activeButton.classList.remove("image4")
//     }, 4000);
//   }
 
//   }
// buttonAnimation();
// Select the button using its ID
// document.getElementById('qouteone').addEventListener('click',getRandomText());;

// // Define the event handler function
// function getRandomText() {
//     console.log("leave me")
//   }
  
  // return quoteElement


// Add an event listener to the button




//for random text
// Function to fetch and display a random text

  