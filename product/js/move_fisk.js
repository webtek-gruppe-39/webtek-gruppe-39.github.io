//  document.onmousemove = moveAway;

//  function moveAway(evnt){

//     if (!evnt){
//         evnt = window.event;
//     }

//     var x = evnt.clientX;
//     var y = evnt.clientY;

//     xProsent = x / window.innerWidth * 65;
//     yProsent = y / window.innerHeight * 70;

//     var posisjon = document.getElementById("logoindex").style;

//     document.getElementById("x").innerHTML = xProsent;
//     document.getElementById("y").innerHTML = yProsent;

  
//     posisjon.left = yProsent + "%";
//     posisjon.top = xProsent + "%";
  
//  }



document.onmousemove = flyttFisk;


 function flyttFisk(m){

     if(!m){
         m=window.event;
     }
     var x = m.clientX;
     var y = m.clientY;

     var endring = document.getElementById("logoindex").style;
     endring.left = y + "%";
     endring.top = x + "%";
 }
  