let navbarPosition = window.pageYOffset
const navbar = document.getElementById('navbar');

addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 500) toggleNav(currentScroll)
})

function toggleNav(currentScroll) {
  // Show Navbar
  if (navbarPosition >= currentScroll) {
    navbar.style.top = '0'
  } else //Hide navbar
    navbar.style.top = '-100px'

  if (navbarPosition < 600) 
  navbar.style.backgroundColor = 'hsla(348, 100%, 55%, .4)'
  else
    navbar.style.backgroundColor = 'hsla(348, 100%, 55%, .8)'

    navbarPosition = currentScroll
}