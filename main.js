const notifiBtn = document.querySelector('.header_notifi_main')

notifiBtn.onclick = (e) => {
    document.querySelector('.header_notifi').classList.toggle('active_hidden')
}
const notifiList = document.querySelectorAll('.header_notifi_list')
//thongbaokhongdutien
const hiddenContainer = document.querySelector('.hidden_notifi_section')
const cancleBtn = document.querySelector('.hidden_notifi_cancleBtn')
console.log(cancleBtn)
const fastCharge = document.querySelector('.fastCharge')
cancleBtn.onclick = () => {
    hiddenContainer.style.display = 'none'
}
fastCharge.onclick = () => {
    hiddenContainer.style.display = 'flex'
}
//slider
const sliderList = ['https://cf.shopee.vn/file/7ace6b2f0aee856ad1446bcde8f3bb76_xxhdpi?fbclid=IwAR1_0F2gMDi2zyLaiVLeizV78qXM9c9Y7ZtkZeuXdmOBa3EcR2tRNVn4NmE',
    'https://cf.shopee.vn/file/0ad5089beff556cdc33e87ae2ab0bad1_xxhdpi',
    'https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi',
    'https://cf.shopee.vn/file/40248546100d7bb1a2728b397740c021_xxhdpi',
    'https://cf.shopee.vn/file/1192c41bfc7fbbdaa9208bb031813fe0_xxhdpi'
]
function sliderAnimation(classname,list,after)
{
    const slider = document.querySelector(`.${classname}${after}_list `)
    const sliderDot = document.querySelector(`.${classname}${after}_dot_list`)
    
    var htmls = ''
    var htmlsDot = ''
    for (i = 0; i < list.length + 1; i++) {
        if (i === list.length) {
            htmls += `<li class="${classname}_item ${classname}${after}_item ">
            <img src="${list[0]}" alt="" class="${classname}_item_img ${classname}${after}_item_img">
        </li>`
        }
        else {
            htmls += `<li class="${classname}_item ${classname}${after}_item">
            <img src="${list[i]}" alt="" class="${classname}_item_img ${classname}${after}_item_img">
        </li>`
            htmlsDot += ` <li class="${classname}_dot_item ${classname}${after}_dot_item"></li>`
        }
    }
    slider.innerHTML = htmls
    sliderDot.innerHTML = htmlsDot
    var Dot = document.querySelectorAll(`.${classname}${after}_dot_item`)
    Dot[0].classList.add('dot_open')
    var runIndex = 0
    var duration = 3000
    var checkChange =1
    function run() {
        var valueDis = document.querySelector(`.${classname}_item`).clientWidth
        if(runIndex ===list.length)
        {
            var dis = -1 * valueDis * runIndex
            slider.style.transform = `translateX(${dis}px)`
            for (i = 0; i < list.length; i++) {
                if (i != 0) {
                    Dot[i].classList.remove('dot_open')
                }
        
            }
            Dot[0].classList.add('dot_open')
            setTimeout(()=>{
                slider.style.transition = 'none'
                slider.style.transform = `translateX(0px)`
            },duration/3)
        }
        else{
            slider.style.transition = '1s'
            for (i = 0; i < list.length; i++) {
                if (i != runIndex) {
                    Dot[i].classList.remove('dot_open')
                }
        
            }
            
            var dis = -1 * valueDis * runIndex
            slider.style.transform = `translateX(${dis}px)`
            console.log(runIndex)
            Dot[runIndex].classList.add('dot_open')
        }
    
    
    
    }
    run()
    document.querySelector('.slider_arrow_l').onclick = function () {
        runIndex -= 1
    
        if (runIndex < 0) {
            runIndex = list.length - 1
        }
        checkChange =0
        run()
    }
    document.querySelector('.slider_arrow_r').onclick = function () {
        runIndex += 1
        if (runIndex >= list.length) {
            runIndex = 0
        }
        checkChange =0
        run()
    
    }
    if (runIndex >= list.length) {
        runIndex = 0
    }
    if (runIndex < 0) {
        runIndex = list.length - 1
    }
    if(checkChange)
    {
        setInterval(function () {
            runIndex += 1
            if (runIndex > list.length) {
                console.log('reset')
                runIndex = 0
                
            }
            run()
        
        },duration)
    }
    else{
        console.log(checkChange)
        checkChange =1
    }
    function changeRunIndex(n) {
        runIndex = n
        run()
    }
    //dot
    console.log(Dot)
    Dot.forEach((item)=>{
        item.onclick = ()=>{
            var index
            for(i=0;i<list.length;i++)
            {
                if(Dot[i]===item)
                {
                    changeRunIndex(i)
                    break
                }
            }
            
        }
    })
}


questionImgList =['https://cf.shopee.vn/file/7ace6b2f0aee856ad1446bcde8f3bb76_xxhdpi?fbclid=IwAR1_0F2gMDi2zyLaiVLeizV78qXM9c9Y7ZtkZeuXdmOBa3EcR2tRNVn4NmE',
'https://cf.shopee.vn/file/0ad5089beff556cdc33e87ae2ab0bad1_xxhdpi',
'https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi',
'https://cf.shopee.vn/file/40248546100d7bb1a2728b397740c021_xxhdpi'
]


sliderAnimation('question',questionImgList,1)
sliderAnimation('question',questionImgList,2)
sliderAnimation('question',questionImgList,3)
sliderAnimation('question',questionImgList,4)
sliderAnimation('slider',sliderList,'')



// nâng cấp ngay

//getPayItem
const payItem = document.querySelectorAll('.pay_content_item')
console.log(payItem)
payItem.forEach((item)=>
{   
    item.onclick = ()=>{
        console.log('###')
        
        console.log(item.style.backgroundColor)
        payItem.forEach((e)=>{
            e.style.backgroundColor = ''
        })
        item.style.backgroundColor ='rgb(240, 240, 240)'
        console.log(item.style.backgroundColor)

    }
})





