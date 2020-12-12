var i = 0; 
var images = [];
var time = 2000;

	
images[0] = 'thedoors-min.jpg';
images[1] = 'strangedays-min.jpg';
images[2] = 'waitingforthesun-min.jpg';
images[3] = 'thesoftparade-min.jpg';
images[4] = 'morrisonhotel-min.jpg';
images[5] = 'lawoman-min.jpg';

	
    function changeImg(){
	 document.slide.src = images[i];

	 if(i < images.length - 1){
	  i++;}
     else {
		i = 0;
	}

	 setTimeout("changeImg()", time);
	}

	 window.onload = changeImg;
	

    function anim1() {
       var elem = document.getElementById("slika1");   
       var pos = 0;
       var id = setInterval(frame, 10);
	   
    function frame() {
       if (pos == 550) {
	   clearInterval(id);}
       else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px'; 
    }
  }
}
