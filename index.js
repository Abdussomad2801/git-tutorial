let inp=document.getElementById("calc");

function handleClick(param) { 
    if(param==="+" ||param==="-" ||param==="/" ||param==="*" ||param==="." ){
if(inp.value.endsWith('+') || inp.value.endsWith('-') || inp.value.endsWith('/') || inp.value.endsWith('*') || inp.value.endsWith('.') ) {
               return; 
            }              
    }
    inp.value+=param
}

function result(){
    let calc=eval(inp.value); 
    inp.value=calc;
}


function refresh() { 
    inp.value=" "
}
