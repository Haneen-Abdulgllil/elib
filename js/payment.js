
const nextBTN = document.getElementById('next-btn');
const prevBTN = document.getElementById('prev-btn');
const steps = document.querySelectorAll(".circle1");
const formsteps = document.querySelectorAll(".formSteps");



let index = -1;
let index1 = -1;
nextBTN.addEventListener("click",function(){
    index++;
    if(index >= steps.length)
    {
        index = steps.length;
    }

    index1++;
    if(index1 >= formsteps.length)
    {
        index1 = formsteps.length;
    }
    change();
    changef();
    });

prevBTN.addEventListener("click",function(){
    index--;
    if(index <= -1)
    {
        index = -1;
    }

    index1--;
    if(index1 <= -1)
    {
        index1 = -1;
    }
    change();
    changef();
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

function changef(){
    formsteps.forEach( (item1,j) => {
        if(j<index1){
            item1.style.visibility = "visible";
            
        }

    else{
        item1.style.visibility = "hidden";
    }

    });
}
function closeForm() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
}

