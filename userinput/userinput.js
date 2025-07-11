let username;
 
 document.getElementById('result').onclick = function(){
    username = document.getElementById('myinput').value
    document.getElementById('welcome').textContent = `Hello ${username}`;
}