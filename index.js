const textInput=document.querySelector(".text-input");

    function display(num){
       textInput.value +=num;
        
    }
    function sq(){
        
         textInput.value=Math.pow(textInput.value, 2);
    }
    
    function result(){
        try{
            textInput.value= eval(textInput.value);
        }
        catch(err){
			console.log(err);
		}
    }
    function clr(){
       
            textInput.value="";
        }
       
   function del(){
        textInput.value=textInput.value.slice(0,-1);
   }
 
   function tan(){
    textInput.value=Math.tan(textInput.value);
   }
   function sin(){
    textInput.value=Math.sin(textInput.value);
   }
   function sqrt(){
    textInput.value=Math.sqrt(textInput.value);
   }
   function exp(){
    textInput.value=Math.exp(textInput.value);
   }
   function cos(){
    textInput.value=Math.cos(textInput.value);
   }
   function ops(){
    textInput.value=Math.log(textInput.value);
   }

