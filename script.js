let display = document.getElementById('box');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn =>{
    btn.addEventListener('click', (e) => {

        if (string === 'Invalid Expression'){
            string = '';
        }

        if(e.target.innerHTML === 'DEL'){
            string = string.slice(0, -1);
        }else if(e.target.innerHTML === 'RESET'){
            string = '';
        }
        else if(e.target.innerHTML === '='){
            if (['*', '/'].includes(string.charAt(0))) {
                string = 'Invalid Expression';
            } 
            else if (['+', '-', '*', '/'].includes(string.slice(-1))){ 
                string = 'Invalid Expression';
            }
            else{
            string = parseFloat(eval(string).toFixed(3));
            }   
        }
        else
        string += e.target.innerHTML;
        display.value = string
    })
})



