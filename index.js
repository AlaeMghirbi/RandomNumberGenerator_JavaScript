//let x=81;
//let y=2;
//let z;
//z=Math.sqrt(x);
//console.log(z);
const label1=document.getElementById("labelMin-max1");
const label2=document.getElementById("labelMin-max2");
const generate=document.getElementById("randomGenerator");
const label3=document.getElementById("labelMin-max3");

let random1;
let random2;
let random3;


generate.onclick=function(){
    random1=Math.floor(Math.random() *(6-1))+1;
    random2=Math.floor(Math.random() *(6-1))+1;
    random3=Math.floor(Math.random() *(6-1))+1;

    label1.textContent=random1;
    label2.textContent=random2;
    label3.textContent=random3;
}
