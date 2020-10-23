M.AutoInit()

// Carousel Img
const carouselImg = document.getElementById('carouselImg');
M.Carousel.init(carouselImg, {
  height: 590,
})


// Carousel Slider
const carouselSlider = document.getElementById('carouselSlider')
M.Carousel.init(carouselSlider, {
  indicators: true,
  fullWidth: true
})

// Slider
const slider = document.getElementById('slider')
M.Slider.init(slider, {
  indicators: true,
  height: 200,
  transition: 500,
  interval: 6000
})

// Scrollspy
const scrollspy = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(scrollspy, {
  throttle: 200,
  scrollOffset: 0
})
const hero = document.getElementById('hero')
M.ScrollSpy.init(hero)
console.log(scrollspy);