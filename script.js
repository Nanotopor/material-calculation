/*let inputs_s = document.querySelectorAll('.area');
let button_s = document.querySelector('#button_s');
let result_s = document.querySelector('.result_s');
let input_result_s = 

button_s.onclick = function() {
    let result = 1;

    for (let i = 0; i < inputs_s.length; i++) {
        result *= inputs_s[i].value;
    }

    result_s.textContent = 'S = ' + result + ' m2';
    input_result_s.value = result;
};*/


let inputs_v = document.querySelectorAll('.val');
let button_v = document.querySelector('#button_v');
let result_v = document.querySelector('#result_v');
let checkboxes = document.querySelectorAll('[type="checkbox"]');
let hhh = document.querySelector('h');

button_v.onclick = function() {
    let result = 1;

    for (let i = 0; i < inputs_v.length; i++) {
        result *= inputs_v[i].value;
    }

    result_v.textContent = 'V = ' + result + ' m3';

    // if (checkboxes.checked) {
    //     if (checkbox.id === 'styazhka') {
    //         hhh = 5;
    //     }
    // }
};

// for (let i = 0; i < checkbox.length; i++) {

// }

