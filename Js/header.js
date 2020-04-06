document.getElementsByClassName('btn-user')[0].addEventListener('mouseover', function(){
    document.getElementById('user').style.display = "block";
})
document.getElementsByClassName('btn-user')[0].addEventListener('mouseout', function(){
    document.getElementById('user').style.display = "none";
})

document.getElementsByClassName('btn-cart')[0].addEventListener('mouseover', function(){
    document.getElementById('cart').style.display = "block";
})
document.getElementsByClassName('btn-cart')[0].addEventListener('mouseout', function(){
    document.getElementById('cart').style.display = "none";
})

document.querySelectorAll('header .branch .btn-menu')[0].addEventListener('click', function(){
    document.querySelectorAll('header .branch .btn-menu')[0].classList.toggle('active');
});

function more(x) {
    x.classList.toggle('active');
}

var navbar = document.querySelectorAll('header .navbar')[0];
window.onscroll = function() {stickyNavbar()};
var stickyNav = navbar.offsetTop;
function stickyNavbar() {
    if(window.pageYOffset >= stickyNav) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
