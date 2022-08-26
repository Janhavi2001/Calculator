let first_variable;
let operator = null;
let second_variable = null;
let buffer = 0;
const screen = document.querySelector(".screen-output");
let count = 0;

function init() {
    document.querySelector(".buttons").addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}
  

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(operator === null){
        if(count === 0){
            first_variable = value;
            buffer = first_variable;
            count ++;
            rerender();
        } else if(count !== 0 ){
            first_variable += value;
            buffer = first_variable;
            rerender();
        }
    }
    else if(operator !== null){
        if(count === 0){
            second_variable = value;
            buffer = second_variable;
            count++;
            rerender();
        } else if(count !== 0){
            second_variable += value;
            buffer = second_variable;
            rerender();
        }
    }
}

function handleSymbol(value){
    switch(value){
        case "←":
            let c = screen.innerText;
            buffer = c.slice(0,c.length-1); 
            if(first_variable == c){ first_variable = buffer; }
            else if (second_variable == c ){ second_variable = buffer;}
            rerender();
            break;
        case "C":
            first_variable = null;
            second_variable = null;
            operator = null;
            count = 0;
            buffer = 0;
            rerender();
            break;
        case "+":
            operator = '+';
            count = 0;
            break;
        case "-":
            operator = '-';
            count = 0;
            break;
        case "×":
            operator = '*';
            count = 0;
            break;
        case "÷":
            operator = '/';
            count = 0;
            break;
        case "=":
            first_variable = parseInt(first_variable);
            second_variable = parseInt(second_variable);
            switch(operator){
                case '+':
                    buffer = first_variable + second_variable;
                    break;
                case '-':
                    buffer = first_variable - second_variable;
                    break;
                case '*':
                    buffer = first_variable * second_variable;
                    break;
                case '/':
                    buffer = first_variable / second_variable;
                    break;

            }
            rerender();
            first_variable = buffer;
            second_variable = null;
            operator = null;
            // count = 0;
            break;
    }
}

// Insert value from keyboard
function keyCode(event, valore){
    let op = event.keyCode;
    let btn = "";

    switch(op){
        // Numbers
        // 0
        case 96:
        case 48:
            btn = 0;
            break;

        // 1
        case 97:
        case 49:
                btn = 1;
                break;

        // 2
        case 98:
        case 50:
                btn = 2;
                break;

        // 3
        case 99:
        case 51:
                btn = 3;
                break;

        // 4
        case 100:
        case 52:
                btn = 4;
                break;

        // 5
        case 101:
        case 53:
                btn = 5;
                break;
        // 6
        case 102:
        case 54:
                btn = 6;
                break;

        // 7
        case 103:
        case 55:
                btn = 7;
                break;

        // 8
        case 104:
        case 56:
                btn = 8;
                break;

        // 9
        case 105:
        case 57:
                btn = 9;
                break;

        // Operators
        // +
        case 107:
            btn = "+";
            break;
        
        // -
        case 109:
            btn = "-";
            break;
        
        // *
        case 106:
            btn = "×";
            break;

        // /
        case 111:
            btn = "÷";
            break;

        // Enter (=)
        case 13:
            btn = "=";
            break;

        // CANC
        case 46:
            btn = "C";
            break;

        // ←
        case 8:
            btn = "←";
            break;
    }

    buttonClick(btn.toString());
}

function rerender(){
    screen.innerText = buffer;
}

init();

