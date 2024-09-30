const button = document.querySelectorAll(".box");

const body = document.querySelector("body");

button.forEach(function(box) {
   box.addEventListener('click', function (color) {
    if(color.target.id === "box1"){
        body.style.backgroundColor = "#FFAD60"

    }
     else if(color.target.id === "box2"){
        body.style.backgroundColor = "#FFEEAD"

    }
    else if(color.target.id === "box3"){
        body.style.backgroundColor = "#FCCD2A"

    }
    else if(color.target.id === "box4"){
        body.style.backgroundColor = "#B8001F"

    }
    else if(color.target.id === "box5"){
        body.style.backgroundColor = "#FCDE70"

    }else{

    }
   })
})