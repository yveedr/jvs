 const increase = document.getElementById('Ibtn');
 const reset = document.getElementById('Rbtn');
 const decrease = document.getElementById('Dbtn');
const counterLab = document.getElementById('counterLab');
let count = 0;

increase.onclick = function(){
   count++;
   counterLab.textContent= count;
}
reset.onclick = function(){
   count = 0;
   counterLab.textContent= count;
}
decrease.onclick = function(){
   count--;
   counterLab.textContent= count;
}