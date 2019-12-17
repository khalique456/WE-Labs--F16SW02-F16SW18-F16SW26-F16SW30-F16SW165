var images=["lam_1.jpg", "lam_2.jpg", "lam_3.jpg"];//initialize an array


var i=0; //start index for images

document.slide.src=images[i];

function nextButton() {
    if(i<images.length-1){
    i++;
    document.slide.src=images[i];
     }
    else{
        i=0;
        document.slide.src=images[i];
    }
}

function previousButton() {
    if(i
      
      )){
         document.write("N");
    }
    else{ 
    --i;
    document.slide.src=images[i];
  
    }
}//end of function
