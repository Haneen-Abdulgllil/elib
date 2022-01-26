var slideIndex = 1;
showSlidesBook(slideIndex);

// Next/previous controls
function plusSlidesBook(n) {
    showSlidesBook(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlideBook(n) {
    showSlidesBook(slideIndex = n);
    }

    function showSlidesBook(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesBook");
    var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
}

// start book-pop-up
const bookcontainer = document.getElementById("book-pop-up");
const showBook = document.getElementById("img-show");
showBook.addEventListener("click",()=>{
    bookcontainer.style.display = 'block';
}) ;

function closeForm() {
    document.getElementById("book-pop-up").style.display = "none";
}