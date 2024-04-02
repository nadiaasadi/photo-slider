let $=document
let pervBtn=$.querySelector('.prev')
let nextBtn=$.querySelector('.next')
let imgSlider=$.querySelector('.img-slider')
let srcArray=['image/1.jpg','image/2.png','image/3.jpg']
let index=0
function perviouse(){
    index--
    if(index<0){
        index=srcArray.length-1
    }
    imgSlider.setAttribute('src',srcArray[index])
    console.log(imgSlider);



    // console.log('per');
}

function nexte(){
    // console.log('next');
    index++
    if(index>srcArray.length-1){
        index=0
    }
    imgSlider.setAttribute('src',srcArray[index])
    console.log(imgSlider);

}
setInterval(nexte,2000)


pervBtn.addEventListener('click',perviouse)
nextBtn.addEventListener('click',nexte)