function toggleBlub(){
  var img:any = document.getElementById('image')
  var button:any = document.getElementById('btn')

if(button.textContent.includes('Trun on')){
    img.setAttribute('src', 'assest/image-bulb-on.jpg') 
   button . innerHTML = "Trun off"
}
else{
  img.setAttribute('src', 'assest/image-bulb-off.jpg') 
  button . innerHTML = "Trun on"
}

}