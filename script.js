

console.log("Good Nor");
const changeImage = document.querySelector(".about-c1");
// console.log(changeImage);
changeImage.addEventListener('', ()=>{
     
})

const Photos_URLS = [
   " my.jpeg",
   "my2.jpeg",
    "about2.jpg"
    
    
]
let i = 0;

function setImage(){
    console.log("Start");
    if(i==3){
        i=0;
    }
    changeImage.style.backgroundImage = `URL('${Photos_URLS[i++]}')`;
}
setInterval(setImage, 2000);

