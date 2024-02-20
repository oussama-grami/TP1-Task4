function randomColor(){
    const num1=Math.floor(Math.random()*256);
    const num2=Math.floor(Math.random()*256);
    const num3=Math.floor(Math.random()*256);
    return color=`rgb(${num1},${num2},${num3})`;
}
const list=document.querySelector("ol");
list.addEventListener('click',(event)=>{
    console.log("worked");
    event.target.style.backgroundColor=randomColor();});