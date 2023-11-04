let pre=document.getElementsByClassName("pre")[0];
let imgcontainer=document.getElementsByClassName("imgcontainer")[0];
pre.addEventListener("click",(e)=>{
    e.preventDefault();
    imgcontainer.scrollLeft=imgcontainer.scrollLeft-615;
    
})
let right=document.getElementsByClassName("right")[0];
right.addEventListener("click",(e)=>{
    e.preventDefault();
    imgcontainer.scrollLeft=imgcontainer.scrollLeft+615;
    
})

imgcontainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    imgcontainer.scrollLeft+=e.deltaY;
})
