document.addEventListener('scroll', () => {
  const header = document.getElementById('navigation')

  if(window?.scrollY && window.scrollY > 0) {
    header.classList.add('background__white')
    header.classList.add('.bottom-shadow')
  } else {
    header.classList.remove('background__white')
    header.classList.remove('bottom-shadow')
  }
})