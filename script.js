let counterElement=document.querySelector("span");
let decrementBtn=document.querySelector("#decrement");
let incrementBtn=document.querySelector("#increment");
let clearBtn=document.querySelector("#clear");
let parentDiv=document.querySelector("#container");

let count=1;
decrementBtn.addEventListener("click",decreaseCount);
let errorMessage=document.createElement("p");
        errorMessage.className="errorMessage";
function decreaseCount(){
        count--;
    counterElement.innerText=count;
    if(count<0){
        count=0;
        counterElement.innerText=count;
        
        errorMessage.innerText="Error: Cannot go below 0";
        parentDiv.insertBefore(errorMessage,decrementBtn);
        decrementBtn.disabled=true;
    }
}

incrementBtn.addEventListener("click",incrementCount);

function incrementCount(){
    count++;
    counterElement.innerText=count;
    if(count>=0){
        decrementBtn.disabled=false;
        errorMessage.remove();
    }
}

clearBtn.addEventListener("click",clearCount);
function clearCount(){
    count=1;
    counterElement.innerText=count;
    errorMessage.innerText="";
    decrementBtn.disabled=false;
}
