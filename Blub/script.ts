// var btn = document.getElementById("toggleBtn");
// var bulb = document.getElementById("bulb");
//     btn.addEventListener("click",    function toggleBulb(e) {
//       // console.log(e);
//     if (btn.textContent.includes("On")) {
//      bulb.src="assest/image-bulb-On.jpeg"
//     btn.textContent = "Turn Off";
//     } else {
    
//       bulb .src ="assest/image-bulb-Off.jpeg";
//      btn.textContent = "Turn On";
//     }
//   } 
// );

const btn = document.getElementById("toggleBtn") as HTMLButtonElement;
const  bulb = document.getElementById("bulb") as HTMLImageElement;

btn.addEventListener("click", function toggleBulb(e) {
  // console.log(e); // Optional, for debugging
  if (btn.innerText.includes("On")) {
    bulb.src = "assets/image-bulb-on.jpg";
    btn.innerText = "Turn Off";
  } else {
    bulb.src = "assets/image-bulb-Off.jpeg";
    btn.innerText = "Turn On";
  }
});


  
