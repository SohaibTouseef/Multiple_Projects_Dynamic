var btn = document.getElementById("toggleBtn");
var bulb = document.getElementById("bulb");
    btn.addEventListener("click",    function toggleBulb(e) {
      // console.log(e);
    if (btn.textContent.includes("On")) {
     bulb  = src="assest/image-bulb-On.jpeg"
    btn.textContent = "Turn Off";
    } else {
    
      bulb = src ="assest/image-bulb-Off.jpeg";
     btn.textContent = "Turn On";
    }
  } 
);
// toggleBulb()
  
//    toggleBulb()