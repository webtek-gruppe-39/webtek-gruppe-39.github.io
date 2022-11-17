  document.onmousemove = moveAway;

  function moveAway(evnt){

     if (!evnt){
         evnt = window.event;
     }

//henter posisjonen til musepekeren til brukeren

     var x = evnt.clientX;
     var y = evnt.clientY;

//gjør om koordinatene gitt i px til prosent, og tar hensyn til størrelsen på fisken og at skjermen gjerne er bredere enn den er lang
     xProsent = x / window.innerWidth * 65;
     yProsent = y / window.innerHeight * 70;

     var posisjon = document.getElementById("logoindex").style;

//flytter fisken langs x-aksen basert på y-koordinatene til brukeren og langs y-aksen basert på x-koordinatene
     posisjon.left = yProsent + "%";
     posisjon.top = xProsent + "%";
    }

  