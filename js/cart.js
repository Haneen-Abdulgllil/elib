

const nextBTN = document.getElementById('next-btn');
const prevBTN = document.getElementById('prev-btn');
const progress = document.getElementById('progress');
const steps = document.querySelectorAll(".circle1");


let index = -1;
nextBTN.addEventListener("click",function(){
    index++;
    if(index >= steps.length)
    {
        index = steps.length;
    }
    change();
    });

prevBTN.addEventListener("click",function(){
    index--;
    if(index <= -1)
    {
        index = -1;
    }
    change();
});


function change(){
    steps.forEach( (item,i) => {
        if(i<index){
            item.classList.add('active');
        }
    
    else{
        item.classList.remove('active');
    }
});
}


// start book-pop-up
const completeShopping= document.getElementById("done");
const progressSteps = document.getElementById("complete-shopping");
completeShopping.addEventListener("click",()=>{
    progressSteps.style.visibility = 'visible';
}) ;
