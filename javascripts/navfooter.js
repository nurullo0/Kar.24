const searchBtn = document.querySelector('.search-btn'),
      searchCloseBtn = document.querySelector('.search-close-btn'),
      menuOpenBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.nav-media__close-btn'),
      navModal = document.querySelector('.nav-media'),
      modolInp = document.querySelector('.modol-search');

searchBtn.addEventListener('click', ()=> {
  searchBtn.style.display = 'none'
  modolInp.style.display = 'block';
  searchCloseBtn.style.display = 'block';
})
searchCloseBtn.addEventListener('click', ()=> {
  searchBtn.style.display = 'block'
  modolInp.style.display = 'none';
  searchCloseBtn.style.display = 'none';
})

menuOpenBtn.addEventListener('click', ()=> {

navModal.style.display = 'block'
})
menuCloseBtn.addEventListener('click', () => {
 
  navModal.style.display = 'none'

})