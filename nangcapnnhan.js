const imgSelf = document.querySelector('.update_self_infor_contain')
const hiddenPre = document.querySelector('.update_hidden_span')
const hidenContainer = document.querySelector('.update_hidden_bg')
const zoomIn = document.querySelector('.zoom_in')
const zoomOut = document.querySelector('.zoom_out')
const closeBtn = document.querySelector('.close')
const turnL = document.querySelector('.turn_l')
const turnR = document.querySelector('.turn_r')
const avtImg = document.querySelector('.update_avt_main')
const avtSection = document.querySelector('.update_avt_hidden')

var turnValue = 0
var scaleValue =1
imgSelf.onmouseover = ()=>{
    hiddenPre.style.display = 'flex'
    hidenContainer.style.display = 'block'
}
imgSelf.onmouseout = ()=>{
    hiddenPre.style.display = 'none'
    hidenContainer.style.display = 'none'
}
console.log(zoomIn)
zoomIn.onclick = (e)=>{
    e.stopPropagation();
    scaleValue+=0.5
    console.log(scaleValue)
    avtImg.style.transform = `translate(-50%,-50%) scale(${scaleValue}) rotate(${turnValue}deg)`
}
zoomOut.onclick = (e)=>{
    e.stopPropagation();
    if(scaleValue!==1)
    {
        scaleValue-=0.5
    }
    avtImg.style.transform = `translate(-50%,-50%) scale(${scaleValue}) rotate(${turnValue}deg)`
}
turnL.onclick = (e)=>{
    e.stopPropagation();
    turnValue-=90
    avtImg.style.transform = `translate(-50%,-50%) scale(${scaleValue}) rotate(${turnValue}deg)`
}
turnR.onclick = (e)=>{
    e.stopPropagation();
    turnValue+=90
    avtImg.style.transform = ` translate(-50%,-50%) scale(${scaleValue}) rotate(${turnValue}deg) `
}
closeBtn.onclick = ()=>{
    avtSection.classList.remove('slideIn')
    avtSection.classList.add('slideOut')
    setTimeout(() => {
        avtSection.style.display ='none'
    }, 500);
}
imgSelf.onclick = ()=>{
    avtSection.classList.remove('slideOut')
    avtSection.classList.add('slideIn')
    avtSection.style.display ='block'
}
avtSection.onclick=()=>{
    avtSection.classList.remove('slideIn')
    avtSection.classList.add('slideOut')
    setTimeout(() => {
        avtSection.style.display ='none'
    }, 500);
}
avtImg.onclick = (e)=>{
    e.stopPropagation();
}