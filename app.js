// let a;
 let time;
let date;
let x;
calcTime(5.5);
// setInterval(() => {
//     a= new Date();
//     date= a.toLocaleDateString();
//      time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds(); 
//      document.getElementById("Time").innerText= time;
//      document.getElementById("Date").innerHTML= date;
// }, 1000);
function calcTime(offset) {
        
        d = new Date();
        x=3600000*offset;
        setInterval(() => {
            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + x);
            time= nd.toLocaleTimeString();
            // time= nd.getHours()+':'+nd.getMinutes()+':'+nd.getSeconds();
            date= nd.toLocaleDateString();
            
            document.getElementById("Time").innerHTML= time;
            document.getElementById("Date").innerHTML= date;
        }, 1000);
    }