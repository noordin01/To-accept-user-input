let username;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("h1").innerHTML = `Welcome  ${username}` ;


}
