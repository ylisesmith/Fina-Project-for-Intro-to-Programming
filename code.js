function getuserinput(){
fullName=""
   do{

      firstName=prompt("Please enter your First Name");

      lastName=prompt("Please enter your Last Name");

      fullName=firstName+" "+lastName;
      if (fullName.length>20){

         alert("Please enter a shorter name");
      }
   } while (fullName.length>20);


   do {
      badgeNumber=prompt("Please enter your required badge number.");

      if (badgeNumber >999){

       alert("Please enter a smaller badge number");

      }


   } while (badgeNumber>999);
}

function runtimer(){

    crtime=10;

    timeout=0;


    for(i=0;i<11;i++){

       setTimeout(function(){

      if (crtime==0){
         document.getElementById("displayCountdown").innerHTML=crtime;
      alert("BLASTTTT");
      } else if (crtime<5){
         document.getElementById("displayCountdown").innerHTML="Warning! Less than 0.5 way to launch."+crtime;
       

      } else {
         document.getElementById("displayCountdown").innerHTML=crtime;

      }

      crtime=crtime-1;

          
       }, timeout);
       timeout=timeout+1000;


       
    }
 }