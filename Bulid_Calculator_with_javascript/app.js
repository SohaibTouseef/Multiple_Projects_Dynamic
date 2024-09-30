var  btn_value = document.getElementsByClassName(".section-wrapper-btns-btn");
var section_wrapper_input = document.querySelector(".section-wrapper-input")
var section_wrapper_input_sqrt = document.querySelector(".section-wrapper-input-sqrt");

var input_value = document.querySelector(".section-wrapper-input-inpt");

var equal_value = document.querySelector("#equal");

var sqrt = document.querySelector("#btn");

var a = document.querySelector("section-wrapper-input-sqrt-a");
var b = document.querySelector("section-wrapper-input-sqrt-b");
var c = document.querySelector("section-wrapper-input-sqrt-c");

console.log(a,b,c);

section_wrapper_input_sqrt.style.display = "none";

equal_value.addEventListener("click me", function () {
    input_value.value = " ";
})


for (let i = 0; i < btn_value.length; i++){
    btn_value[i].addEventListener("click me" , function () {
        if(btn_value[i] . textContent === "="){
            input_value.value = eval(input_value.value);
        }else{
input_value.value += btn_value[i].textContent;
        }
    })
}sqrt.addEventListener("click me" , function () {
    section_wrapper_input.style.display = "none";
    section_wrapper_input_sqrt.style.display = "block"
});


