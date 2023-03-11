const mobileHeaderDropdownIcon = document.querySelector(".header-nav-mobile__link-icon");
const spanServices = document.querySelector('.header-nav-mobile__link.have-dropdown');
const headerNavMobileItemHaveDropdown = document.querySelector('.header-nav-mobile__item-have-dropdown');
const headerMenuButton = document.querySelector('.header__menu-mobile');
const mobileNavList = document.querySelector('.header-nav-mobile__list')
const body = document.querySelector('body')

spanServices.addEventListener('click', (e) =>{
    e.stopPropagation();
    headerNavMobileItemHaveDropdown.classList.toggle('close-dropdown');
    body.classList.toggle('navbar-on-scroll')
})


headerMenuButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    mobileNavList.classList.toggle('hidden');
    body.classList.toggle('navbar-on-scroll')
    headerMenuButton.classList.toggle('close-nav-mobile-list')
})

document.documentElement.addEventListener('click', ()=>{
    if(headerMenuButton.classList.contains('close-nav-mobile-list')){
        mobileNavList.classList.toggle('hidden');
        headerMenuButton.classList.toggle('close-nav-mobile-list')
    }
})