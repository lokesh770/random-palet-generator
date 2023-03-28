const button=document.querySelector(".kiii");
const container=document.querySelector(".container")
const maxnumbers=32;
let  changepalet=()=>{
for(i=0;i<maxnumbers;i++){
    const  hexvalur=Math.floor(math.random()*0xffffff).toString(16);
    hexvalur=`#${hexvalur.padStart(6,'0')}`;
    const boxes=document.createElement("li")
    boxes.classList.add("boxes")
    boxes.innerHTML=`<div class="lokii" style="background:${hexvalur}"></div>
    <span class="emoo">${hexvalur}</span>`
    container.appendChild(boxes);

}
}



button.addEventListener("click",changepalet)