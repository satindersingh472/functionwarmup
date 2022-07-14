function run_string(string){
    return string;
    console.log(string);
}
let any_string = run_string(`my name is satinder`);
console.log(any_string);

function accept_boolean(boolean){
    if(boolean === true){
        console.log(`happy`);
        return boolean;
    
    } else{
         console.log(`sad`);
    }
}
let any_boolean = accept_boolean(true);
console.log(any_boolean);
any_boolean = accept_boolean(false);
console.log(any_boolean);

function accepts_numbers(num1,num2){
    if (num1 > num2){
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}
let numbers = accepts_numbers(5, 10);
console.log(numbers);
numbers = accepts_numbers(1000, 500);
console.log(numbers);

function accepts_array(array){
    let counter = 0;
    while(counter < array.length){
        if(array[counter].includes(`happy`)){
            return array[counter];
        }
        counter++ ;
    }
}
let array1 = [`I am happy`,`You are sad`,`You are beautifull`,`I am living happy `];
let array_to_give = accepts_array(array1);
console.log(array_to_give); 