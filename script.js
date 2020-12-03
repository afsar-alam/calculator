 window.onload = ()=>{
 const screen=document.querySelector(".screen");
  buttons= document.querySelectorAll("button");
  
 let screenValue = '';
 for(item of buttons){
 item.addEventListener('click',(e) =>{
   buttonText = e.target.innerText;
   if(buttonText=='X'){
     buttonText='*';
     screenValue += buttonText;
     screen.value = screenValue;
   }
   else if(buttonText=='C'){
     screenValue= '';
     screen.value = screenValue;
   }
   else if(buttonText=='='){
    if(!screenValue)
        return;
     screen.value = eval(screenValue);
     screenValue = screen.value;
   }
   else{
     screenValue += buttonText;
     screen.value = screenValue;
   }
  });
}
 }

  



  
