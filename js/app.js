function run_string(string) {
    return string;
}
let any_string = run_string(`my name is satinder`);
console.log(any_string);

function accepts_numbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}
let numbers = accepts_numbers(5, 10);
console.log(numbers);
numbers = accepts_numbers(1000, 500);
console.log(numbers);


function accept_number_array(array) {
    let num_counter = 0;
    let largest = array[num_counter];
    for (num_counter = 0; num_counter < array.length; num_counter++) {
        if (array[num_counter] > largest) {
            largest = array[num_counter];
        }
        return largest;
    }
   

}
let array_numbers = [-8, -3, -4, -6, -1, -4, -2];
let accept = accept_number_array(array_numbers);
console.log(accept);


function accept_boolean(boolean) {
    if (boolean === true) {
        boolean = `happy`;

    } else {
        boolean = `sad`;
    }
    return boolean;
}
let any_boolean = accept_boolean(true);
console.log(any_boolean);
any_boolean = accept_boolean(false);
console.log(any_boolean);



function accepts_array(array) {
    let counter = array.length;
    for (counter = array.length; counter > 0; counter--) {
        let popup = array.pop();
        let does_include = popup.includes(`happy`);
        if(does_include === true){
            return popup;
        }
    }
}
let array_happy = [`i am a happy person`, `i am not a sad person`, `she is a healthy person`];
let accepted_array = accepts_array(array_happy);
console.log(accepted_array);