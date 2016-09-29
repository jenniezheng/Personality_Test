
   function checkAll(radios)
   {
   var value=0;
   var currentGroup=radios[0].name;
   var checked=false;
   for (var i = 0; i < radios.length; i++) {
      if(currentGroup!=radios[i].name||i==radios.length-1)
        {
           if (!checked) {window.alert("At least one question is not yet answered.");return;}
          else {checked=false;   currentGroup=radios[i].name; }
        }

       if (radios[i].checked) {  checked=true;     }
      }
  
   }

   function calculating(array1, letter1,array2, letter2, position){
       var value1=0, value2=0, dominant;
       for(i=0; i< array1.length ; i++)
    {value1+=Number(array1[i]);value2+=Number(array2[i]) ; }        

      if (value1>value2) dominant=letter1;
      else dominant=letter2;

     // window.alert("Debugging: Your "+letter1 +" score is "+value1+ " and your " +letter2+ " score is "+value2 +". Your final letter is "+ dominant+"." )  ;
       

      if (typeof(Storage) !== "undefined") { window.sessionStorage.setItem(position, dominant);window.sessionStorage.setItem(letter1, value1);window.sessionStorage.setItem(letter2, value2);}
      else { window.alert("Sorry, your browser does not support Web Storage")}
   }

  
function change(){
    var des1 = document.getElementById("description1");
    des1.innerHTML = "Personality Test"; 
     var des2 = document.getElementById("description2");
    des2.innerHTML = '<i>Questions by Michael Mech, Website by Jennie Zheng</i>';
    var des3 = document.getElementById("description3");
    des3.innerHTML = 'This test will take approximately 15 minutes, but there is no time limit, so no need to rush. Please answer each question honestly, even if you do not like the answer. Try to avoid the neutral answers.';
    changeProgressBar();
    }
    
function changeProgressBar()
{
    var fileName = location.href.split("/").slice(-1);
    var code = fileName.toString().substring(0, 4); 
    if(code.substring(0,2)==="EI") {document.getElementById("myBar").style.width = "0%";document.getElementById("label").innerHTML = "0%";}
    else if(code.substring(0,2)==="JP") {document.getElementById("myBar").style.width = "25%";document.getElementById("label").innerHTML = "25%";}
    else if(code.substring(1,3)==="xx") {document.getElementById("myBar").style.width = "50%";document.getElementById("label").innerHTML = "50%";}
    else {document.getElementById("myBar").style.width = "75%"; document.getElementById("label").innerHTML = "75%";}
}

   function fillIn( arrayQuest, arrayAns)
        {
        var docQuest = document.getElementsByClassName("question");
        var docAns= document.getElementsByClassName("answer");
        for( i=0; i<arrayQuest.length; i++)
        { docQuest[i].innerHTML=arrayQuest[i]; }

         for( i=0; i<arrayAns.length; i++)
        {  docAns[i].innerHTML=arrayAns[i]; }


          var docRadio= document.getElementsByClassName("radio");

             for( i=0; i<docRadio.length; i++)
              {
                  if(i%10>4)  letter="B";
                 else letter="A";
                  docRadio[i].name= (Math.ceil((i+1)/10)).toString() + letter;
              }
      }


