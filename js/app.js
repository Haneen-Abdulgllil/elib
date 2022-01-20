

// start timer
    const countdown=()=>{
    const upperDate = new Date('May 20 2022 00:00:00').getTime();
    const cureentDate = new Date().getTime();
    const diffDate = upperDate-cureentDate;


    const seconds = 1000;
    const minutes = seconds * 60 ;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate/days);
    const remain_hours = Math.floor((diffDate%days)/hours);
    const remain_minutes = Math.floor((diffDate%hours)/minutes);
    const remain_seconds = Math.floor((diffDate%minutes)/seconds);


    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');

    d.innerHTML = remain_days;
    h.innerHTML= remain_hours;
    m.innerHTML = remain_minutes;2
    s.innerHTML = remain_seconds; 
// *********************************************************
    var d1 = document.getElementById('days1');
    var h1 = document.getElementById('hours1');
    var m1 = document.getElementById('minutes1');
    var s1 = document.getElementById('seconds1');

    d1.innerHTML = remain_days;
    h1.innerHTML= remain_hours;
    m1.innerHTML = remain_minutes;2
    s1.innerHTML = remain_seconds; 

//    *******************************************************************8
    var d2 = document.getElementById('days2');
    var h2 = document.getElementById('hours2');
    var m2 = document.getElementById('minutes2');
    var s2 = document.getElementById('seconds2');

    d2.innerHTML = remain_days;
    h2.innerHTML= remain_hours;
    m2.innerHTML = remain_minutes;2
    s2.innerHTML = remain_seconds; 

    // **************************************************************88
    var d3 = document.getElementById('days3');
    var h3 = document.getElementById('hours3');
    var m3 = document.getElementById('minutes3');
    var s3 = document.getElementById('seconds3');

    d3.innerHTML = remain_days;
    h3.innerHTML= remain_hours;
    m3.innerHTML = remain_minutes;2
    s3.innerHTML = remain_seconds; 


}
var i = setInterval(countdown,1000);




// end timer


// start pop up


const modelcontainer = document.getElementById("model-container");
const showBtn = document.getElementById("show-btnn");
showBtn.addEventListener("click",()=>{
    modelcontainer.style.visibility = 'visible';
    hideBody.style.visibility = 'visible';
}) ;




const modelcontainer2 = document.getElementById("model-container2");
const showBtn1 = document.getElementById("signup");
showBtn1.addEventListener("click",()=>{
    modelcontainer2.style.visibility = 'visible';
});

const showBtn2 = document.getElementById("sign-in");
showBtn2.addEventListener("click",()=>{
    modelcontainer.style.visibility = 'visible';
    modelcontainer2.style.visibility = 'hidden';
}) ;

function closeForm() {
    document.getElementById("model-container").style.display = "none";
    document.getElementById("model-container2").style.display = "none";
}
const hideBody = document.getElementById("hide");
// end pop up 

// start slider
var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
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
}
// end slider


