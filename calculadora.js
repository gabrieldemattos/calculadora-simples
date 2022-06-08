const op = document.getElementById('operations');

//função que vai inserir os numeros (dependendo de qual clicar)
function insert (numbers){
    
    const num = op.innerHTML;
    document.getElementById('operations').innerHTML = num + numbers;

}

//função que vai limpar todos os digitos na calculadora
function clean(){

    op.innerHTML = '';

}

//função que vai excluir a ultima coisa(número ou expressão) digitada
function erase(){

    let result = op.innerHTML;
    op.innerHTML = result.substring(0, result.length - 1);

}

//função que irá pegar a string na tela da calculadora e fazer o calculo
function operations(){

    let operations = op.innerHTML;

    if(operations){

        op.innerHTML = eval(operations);

    }else{

        op.innerHTML = '';
        
    }


}


//função para habilitar apertar as teclas no teclado para não ter só que clicar na tela
function handleKeydown(event){

    const num = op.innerHTML;
    let result = op.innerHTML;

    switch(event.keyCode){
        
        case 96: // 0
        case 48:{
                document.getElementById('operations').innerHTML = num + '0';
                break;
        }
        case 97: // 1
        case 49:{
                document.getElementById('operations').innerHTML = num + '1';
                break;
        }
        case 98: // 2
        case 50:{
                document.getElementById('operations').innerHTML = num + '2';
                break;
        }
        case 99: // 3
        case 51:{
                document.getElementById('operations').innerHTML = num + '3';
                break;
        }
        case 100: // 4
        case 52:{
                document.getElementById('operations').innerHTML = num + '4';
                break;
        }
        case 101: // 5
        case 53:{
                document.getElementById('operations').innerHTML = num + '5';
                break;
        }
        case 102: // 6
        case 54:{
                document.getElementById('operations').innerHTML = num + '6';
                break;
        }
        case 103: // 7
        case 55:{
                document.getElementById('operations').innerHTML = num + '7';
                break;
        }
        case 104: // 8
        case 56:{
                document.getElementById('operations').innerHTML = num + '8';
                break;
        }
        case 105: // 9
        case 57:{
                document.getElementById('operations').innerHTML = num + '9';
                break;
        }
        case 111: // /
        case 193:{
                document.getElementById('operations').innerHTML = num + '/';
                break;
        }
        case 8:{ // backspace
                op.innerHTML = result.substring(0, result.length - 1);
                break;
        }
        case 190: // .
        case 194:{
                document.getElementById('operations').innerHTML = num + '.';
                break;
        }
        case 106: // *
        case 56:{
                document.getElementById('operations').innerHTML = num + '*';
                break;
        }
        case 109: // -
        case 189:{
                document.getElementById('operations').innerHTML = num + '-';
                break;
        }
        case 107: // +
        case 187:{
                document.getElementById('operations').innerHTML = num + '+';
                break;
        }
        case 13:{ // =
                operations();
                break;
        }
        case 46:{ // delete
                clean();
                break;
        }
}
}

//chamando a função handleKeydown para ser executada apenas quando a tecla BAIXAR no teclado
document.addEventListener('keydown', handleKeydown);