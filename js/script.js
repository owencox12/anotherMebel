let swiper = new Swiper(".swiper-s1", {
    slidesPerView: 1,
    spaceBetween: 12.5,
    navigation: {
        nextEl: '.promo__arrow_right',
        prevEl: '.promo__arrow_left',
      },
})

let burger = document.querySelector(".header__second_burger")

let burgerEx = document.querySelector(".header__burger_list_burger")

burger.addEventListener("click", function(){
    document.querySelector(".header__burger_list").classList.add("header__burger_list_active")
})

burgerEx.addEventListener("click", function(){
    document.querySelector(".header__burger_list").classList.remove("header__burger_list_active")
})

window.addEventListener("scroll", function(){
    if(scrollY >= 1) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})


let love = document.querySelectorAll(".hits__item_block_love")

love.forEach(function(e){
    e.addEventListener("click", function(){
        e.classList.toggle("hits__item_block_love_active")
    })
})