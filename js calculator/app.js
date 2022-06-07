const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const numBtn = document.getElementsByClassName("numKey");
const funcBtn = document.getElementsByClassName("funcKey");
const display = document.getElementById("result");
const squareroot = document.getElementById("squareroot");
const factorial = document.getElementById("factorial");


let evalarr = [];
let tempDisplay = '0';
let tempappend;




displayUpdate = (e) =>{
    let btnValue = e.target.innerText;

    if(tempDisplay === "0"){
        tempDisplay = "";
    }

    tempDisplay += btnValue;
    display.value = tempDisplay;
}


for(let i = 0; i < numBtn.length; i++){
    numBtn[i].addEventListener("click", displayUpdate);
}



funcOperators = (e) =>{
    let funKey = e.target.innerText;

    switch(funKey){
        case '+':
            tempappend = tempDisplay;
            tempDisplay = '0';
            display.value = tempDisplay;
            evalarr.push(tempappend);
            evalarr.push('+');
            break;
        case '-':
            tempappend = tempDisplay;
            tempDisplay = '0';
            display.value = tempDisplay;
            evalarr.push(tempappend);
            evalarr.push('-');
            break;
        case '÷':
            tempappend = tempDisplay;
            tempDisplay = '0';
            display.value = tempDisplay;
            evalarr.push(tempappend);
            evalarr.push('/');
            break;
        case '*':
            tempappend = tempDisplay;
            tempDisplay = '0';
            display.value = tempDisplay;
            evalarr.push(tempappend);
            evalarr.push('*');
            break;
        case '%':
            tempappend = tempDisplay;
            tempDisplay = '0';
            display.value = tempDisplay;
            evalarr.push(tempappend);
            evalarr.push('%');
            break;
        case '=':
            evalarr.push(tempDisplay);
            let evaluate = eval(evalarr.join(' '));
            tempDisplay = evaluate + '';
            display.value = tempDisplay;
            evalarr = [];
            break;
        default:
            break;    
    }
}


for(let i = 0; i < funcBtn.length; i++){
    funcBtn[i].addEventListener("click", funcOperators);
}



factorial.onclick = () =>{
    let x = display.value;
    let ans = 1;
    if(x == 0 || x == 1){
        display.value = ans;
    }
    else{
        for(let i = x; i >= 1; i--){
            ans = ans * i;
        }
        display.value = ans;
    }
}


clear.onclick = () =>{
    tempDisplay = '0';
    tempappend = undefined;
    evalarr = [];
    display.value = tempDisplay;
}

decimal.onclick = () =>{
    if(!tempDisplay.includes('.')){
        tempDisplay += '.';
    }
    display.value = tempDisplay;
}

squareroot.onclick = () =>{
    let x = Math.sqrt(display.value);
    display.value = x;

}

