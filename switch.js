const length=document.querySelectorAll(".operation").length;
const textInput=document.querySelector(".text-input");

function display(num){
    textInput.value +=num;
     
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

for( let i=0; i<length; i++){
    document.querySelectorAll(".operation")[i].addEventListener("click", ()=>{

        
    const calc=document.querySelectorAll(".operation")[i].innerHTML;
    
        switch (calc) {
            case "exp":
                textInput.value=Math.exp(textInput.value);
                
                break;
                case "sqrt":
                    textInput.value=Math.sqrt(textInput.value);
                    
                    break;
                    case "sq":
                        textInput.value=Math.pow(textInput.value, 2);
                        
                        break;
                        case "cos":
                            textInput.value=Math.cos(textInput.value);
                            
                            break;
                            case "sin":
                                textInput.value=Math.sin(textInput.value);
                                
                                break;
                                case "tan":
                                    textInput.value=Math.tan(textInput.value);
                                    
                                    break;
                                    case "in":
                                        textInput.value=Math.log(textInput.value);
                                        
                                        break;
                                
                            
                        
                    
                
            
        
            default:
                break;
        }




    });
}
    
