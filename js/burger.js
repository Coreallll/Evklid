window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#burger').classList.toggle('close')
    document.querySelector('#header-nav__list').classList.toggle('header-nav__list--active')
  })
})
