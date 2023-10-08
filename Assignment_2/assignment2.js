"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:assignment2.js
*/

// Title of the slideshow
let lightboxTitle = "My Western Vacation";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Sky Pond (Rocky Mountain National Park)";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";
imgCaptions[8]="Teton Crest Trail (Grand Teton National Park)";
imgCaptions[9]="The Notch Trail (Badlands National Park)";
imgCaptions[10]="Sprague Lake (Rocky Mountain National Park)";
imgCaptions[11]="Longs Peak Trail (Rocky Mountain National Park)";

// Count of images in the slideshow
let imgCount = imgFiles.length;


window.addEventListener("load", createLightbox);

function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");
   
   // Design the lightbox title
   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   let currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the lightbox Play-Pause button
   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay"; 
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }

   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }
   
   // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";
      
      // Add the figure box to the overlay
      let figureBox = document.createElement("figure");
      overlay.appendChild(figureBox);

 
 
  


      
      // Add the image to the figure box
      let overlayImage = this.cloneNode("true");
      overlayImage.setAttribute("id", "overlayImg")
      figureBox.appendChild(overlayImage);

      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);
      
      // Add button on the figure box
      let BtnAddToFav = document.createElement("BUTTON");
      BtnAddToFav.setAttribute("id", "BtnAddToFav")
      var textC = document.createTextNode("Add to favourite");
      BtnAddToFav.appendChild(textC);
      figureBox.appendChild(BtnAddToFav);
      BtnAddToFav.onclick = function(){
          // Get src of the image.
      var imgSrc = document.getElementById("overlayImg").currentSrc;
      
      
      //inserting the src of the image into the array
      srcArray.push(imgSrc);
      
      var elem = document.getElementById("favoritesImages");
      
      // create tr tag
      var table = "<tr id='myRow'>";

     
      
      // if else will prevent the user not to insert more than 5 favourite image at the same time
      if (srcArray.length >= 1 && srcArray.length <= 5) {
      
      // running a for loop to insert images into teh favoutite table
      for (var i = 0; i < srcArray.length; i++) {
      
      //generate table element for each image in img tag
      
      table = table + "<td ><img class='favedImg' src='" + srcArray[i] +
       "' onclick='RemoveFromFavourite(event)'><br><button class='delete' onclick='RemoveFromFavourite(event)'>Remove from fav</button></td>";
      

       
      }
      
      table = table + "</tr>";
      
      //display in main table element
      
      elem.innerHTML = table;
      
      } else {
      //if there is more than 5 items n an array then give an allert
      alert('Remove least favorite image to add more favourite image');
      
      }
      }
      
      
      
      // Add a close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }      
      overlay.appendChild(closeBox);
      
      document.body.appendChild(overlay);
      
   }   
 

      
}

function RemoveFromFavourite(event) {


   //get the parent element 
   let parentElement = event.target.offsetParent;

   //get the cell index
   let cellNum = parentElement.cellIndex;

   //alert("Cell index is: " + src.cellIndex);
   var row = document.getElementById("myRow");
  row.deleteCell(cellNum);
    
   parentElement.remove(parentElement);

   //get the url of the image
   let url = event.target.currentSrc;

   
   // Get the index of the url in the srcArray array
   let index = srcArray.indexOf(url);

   

   //removing the value from the array so that it can be reused
   srcArray.splice(index, 1);


   

   
   }


var srcArray = [];
