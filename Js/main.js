var addCard = document.querySelectorAll('.card .add-card');

for(let i = 0; i < addCard.length; i++) {
    addCard[i].addEventListener('click', function(){
        addCard[i].classList.toggle('active');
        let content = document.querySelectorAll('.card .add-to-card')[i].innerHTML;
        if(content === 'Add to Wishlist') {
            document.querySelectorAll('.card .add-to-card')[i].innerHTML = 'Added';
        } else {
            document.querySelectorAll('.card .add-to-card')[i].innerHTML = 'Add to Wishlist';
        }
    });
}

var contentEditorOur = document.querySelectorAll('.editor-picks .editor-our a');
for(let i = 0; i < contentEditorOur.length; i++) {
    document.querySelectorAll('.editor-picks .editor-our a')[i].addEventListener('mouseover', function(){
        document.querySelectorAll('.editor-picks .editor-our a span:nth-child(3)')[i].style.transform = "translateY(0)";
    });
    document.querySelectorAll('.editor-picks .editor-our a')[i].addEventListener('mouseout', function(){
        document.querySelectorAll('.editor-picks .editor-our a span:nth-child(3)')[i].style.transform = "translateY(125px)";
    });
}


document.querySelectorAll('header .branch ul li .box-search a')[0].addEventListener('click', function () {
        document.querySelectorAll('header .branch ul li .box-search')[0].classList.toggle('active');
        document.querySelectorAll('header .branch .img-branch')[0].classList.toggle('active');
})

let women_navItem = document.querySelectorAll('.women .women__nav-list .list p .women_nav-item');
women_navItem.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('active');
    });
});
