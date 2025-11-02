let checkboxSymbolEL = document.querySelector("#chois-symbol-el")
let checkboxNumberEL = document.querySelector("#chois-number-el")
let pass2El=document.querySelector("#pass-two-el")
let pass1El=document.querySelector("#pass-one-el")
let btnEl = document.querySelector("#btn")
const characters = [
  "E","!","d","2","}","A","z","_","(","O","r","T","$","b","S","n","W","P","[",
  "8","U","v","^","J","=","f","C","m","|","x","<","1","i","&","M","/","B",";",
  "j","h","H","N","Z","w","`","V","R","a","*","o","5","(","y","X","D","7","]",
  ",","Q","G","6","-","Y","0","@","q","K","%","F","L","p","c","{","I",">",".",
  "4","+","t",":","3","e","#","9","u","l","s","k","~"
];

const Numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const Symbols=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const alfabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]





btnEl.onclick= function (){
    
    checkcust()
}

function checkcust(){
    let lengthEl=document.getElementById("length-el").value
    let num=Number(lengthEl)

    if(num<8){
        alert("pleas enter a number mor then 8")
        return
    }

    if (checkboxNumberEL.checked===true && checkboxSymbolEL.checked===true){
        generatMix()
    }else if(checkboxSymbolEL.checked===true){
        generatSymbols()
    }else if(checkboxNumberEL.checked===true){
        generatNumbers()
    }else{
        generateAlfa()
    }
}

function generateAlfa(){
    
    let lengthEl=document.getElementById("length-el").value
    let num=Number(lengthEl)
    let psalfa1=alfabet[Math.floor(Math.random()*alfabet.length)]
    for(let i=0;i<num-1;i++){
        psalfa1=psalfa1+alfabet[Math.floor(Math.random()*alfabet.length)]
    
    }
    
    pass1El.textContent=psalfa1
    let psalfa2=alfabet[Math.floor(Math.random()*alfabet.length)]
    for(let i=0;i<num-1;i++){
        psalfa2=psalfa2+alfabet[Math.floor(Math.random()*alfabet.length)]
    }
    pass2El.textContent=psalfa2
}


function generatSymbols(){
let lengthEl=document.getElementById("length-el").value
    let num=Number(lengthEl)
    let pssymb1=Symbols[Math.floor(Math.random()*Symbols.length)]
    for(let i=0;i<num-1;i++){
        pssymb1=pssymb1+Symbols[Math.floor(Math.random()*Symbols.length)]
    
    }
    pass1El.textContent=pssymb1

    let pssymb2=Symbols[Math.floor(Math.random()*Symbols.length)]
    for(let i=0;i<num-1;i++){
        pssymb2=pssymb2+Symbols[Math.floor(Math.random()*Symbols.length)]
    }
    pass2El.textContent=pssymb2
}



function generatNumbers(){
let lengthEl=document.getElementById("length-el").value
    let num=Number(lengthEl)
    let psnum1=Numbers[Math.floor(Math.random()*Numbers.length)]
    for(let i=0;i<num-1;i++){
        psnum1=psnum1+Numbers[Math.floor(Math.random()*Numbers.length)]
    
    }
    pass1El.textContent=psnum1

    let psnum2=Numbers[Math.floor(Math.random()*Numbers.length)]
    for(let i=0;i<num-1;i++){
        psnum2=psnum2+Numbers[Math.floor(Math.random()*Numbers.length)]
    }
    pass2El.textContent=psnum2
}




function generatMix(){
let lengthEl=document.getElementById("length-el").value
    let num=Number(lengthEl)
    let psmix1=characters[Math.floor(Math.random()*characters.length)]
    for(let i=0;i<num-1;i++){
        psmix1=psmix1+characters[Math.floor(Math.random()*characters.length)]
    
    }
    pass1El.textContent=psmix1

    let psmix2=characters[Math.floor(Math.random()*characters.length)]
    for(let i=0;i<num-1;i++){
        psmix2=psmix2+characters[Math.floor(Math.random()*characters.length)]
    }
    pass2El.textContent=psmix2
}