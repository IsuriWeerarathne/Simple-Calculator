var numberOne=0;
var type = '+';


function sum(){
   common();
   type='+';
}
function sub(){
    common();
    type='-';
}
function mul(){
    common();
    type='*';
}
function dev(){
    common();
    type='/';
}

const common=()=>{
    numberOne =
        document.getElementById('text')
            .value;

    document.getElementById('text')
        .value='';
}

const answer=()=>{
    let numberTwo =
        document.getElementById('text')
            .value;
    if (type==='+'){
        /*let answer=Number(numberOne)+Number(numberTwo);*/
        setValue(parseInt(numberOne)+parseInt(numberTwo));
    }else if (type==='*'){
        setValue(parseInt(numberOne)*parseInt(numberTwo));
    }else if (type==='/'){
        setValue(parseInt(numberOne)/parseInt(numberTwo));
    }else if (type==='-'){
        setValue(parseInt(numberOne)-parseInt(numberTwo));
    }

}

const setValue=(answer)=>{
    document.getElementById('text').value=answer;
}

const setText=(number)=>{
   let temp= document.getElementById('text').value;
    document.getElementById('text').value= temp+number;
}
