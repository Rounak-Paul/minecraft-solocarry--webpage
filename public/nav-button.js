var primaryNav = document.querySelector(".primary-navigation")

function toggleNav() {

    if (primaryNav.style.left === '') {
        primaryNav.style.left = '50%'
    }
    else if (primaryNav.style.left === '50%') {
        primaryNav.style.left = ''
    }

}