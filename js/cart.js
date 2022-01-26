

const nextBTN = document.getElementById('next-btn');
const prevBTN = document.getElementById('prev-btn');
const progress = document.getElementById('progress');
const steps = document.querySelectorAll(".circle1");
const stepBtn = document.getElementById('sign-in');

let index = -1;
stepBtn.addEventListener("click",function(){
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

const complete = document.getElementById('done');
complete.addEventListener("click",()=>{
});


