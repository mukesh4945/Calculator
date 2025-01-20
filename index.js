function cal(){
    const operat1 = document.getElementById('first').value;
    const operat2 = document.getElementById('second').value;
    const oper = document.getElementById('oper').value;
    

    if (oper == '+'){
        var res= parseInt(operat1) +  parseInt(operat2);
    }
    if (oper == '-'){
        var res= parseInt(operat1) -  parseInt(operat2);
    }
    if (oper == '*'){
        var res= parseInt(operat1) *  parseInt(operat2);
    }
    if (oper == '/'){
        var res= parseInt(operat1) /  parseInt(operat2);
    }
    if (oper == '%'){
        var res= parseInt(operat1) %  parseInt(operat2);
    }
    document.getElementById('res').value = res;
}