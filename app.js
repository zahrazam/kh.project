let $ = document
let listItem = $.querySelector(".header_listitem")
let headerList = $.querySelector(".header_list")
let discription_aboutus = $.querySelector(".description_aboutus")
let aboutusItem = $.querySelector(".about_us")
let contactusItem = $.querySelector(".contact_us")
let descriptionContactus = $.querySelector(".description_contactus")
let mainPageItem = $.querySelector(".main_page")


// slider
let sliderItem = $.querySelectorAll(".slider_item")
let activeItem = $.querySelector(".active")

let index = 0

console.log(sliderItem)

setInterval(function() {
    index ++ ;
    sliderItem[index - 1].classList.remove("active")
    if (index > sliderItem.length - 1) {
        index = 0
    }
    sliderItem[index].classList.add("active")
} , 3000)


////////////////////////////////////////////////////////////

aboutusItem.addEventListener("mouseover" , function () {
     console.log("done!")
     discription_aboutus.style.display = "block"
     aboutusItem.style.color = "rgb(51, 105, 30)"
    //  aboutusItem.style.textShadow = "15px 4px 0.7rem black"

 })
aboutusItem.addEventListener("mouseout" , function () {
    console.log("ok")
    discription_aboutus.style.display = "none"
    aboutusItem.style.color = "black"
    // aboutusItem.style.textShadow = "none"
})

contactusItem.addEventListener("mouseover" , function () {
    descriptionContactus.style.display = "block"
    contactusItem.style.color = "rgb(51, 105, 30)"
    // contactusItem.style.textShadow = "15px 4px 0.7rem black"
})
contactusItem.addEventListener("mouseout" , function () {
    descriptionContactus.style.display = "none"
    contactusItem.style.color = "black"
    // contactusItem.style.textShadow = "none"
})

mainPageItem.addEventListener("mouseover" , function () {
    mainPageItem.style.color = "rgb(51, 105, 30)"
    // mainPageItem.style.textShadow = "15px 4px 0.7rem black"
})
mainPageItem.addEventListener("mouseout" , function () {
    mainPageItem.style.color = "black"
    // mainPageItem.style.textShadow = "none"
})