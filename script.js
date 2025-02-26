let line = document.getElementById("line");
let count = 180;
 document.addEventListener("DOMContentLoaded" , () =>{
	 setInterval(()=>{
	 line.style.transform = `rotate(${count}deg)`;
		 count=count+2;
		 if (count >= 360) {
            count = 0; 
        }
	 },20)
 })
