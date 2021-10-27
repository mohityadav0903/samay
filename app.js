let a;
let time;
let date;
setInterval(() => {
    a= new Date();
    date= a.toLocaleDateString();
     time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds(); 
     document.getElementById("Time").innerText= time;
     document.getElementById("Date").innerHTML= date;
}, 1000);