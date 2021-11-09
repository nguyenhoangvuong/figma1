$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg"></img></button>`,
  nextArrow:`<button type='button' class='slick-next pull-left'><img src="./images/arrow-right.svg"></img></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
  ]
});

const toggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu")

toggle.addEventListener('click',()=>{
  menu.classList.add('is-show')
})

window.addEventListener('click',(e)=>{
  if(!menu.contains(e.target) && !e.target.matches('.menu-toggle')){
    console.log(e.target)
    menu.classList.remove('is-show')
  }
})