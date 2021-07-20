'use strict'

function alert(array){
   console.log(array);
}

let array = [4,23,65,85,120,1004,-1,-45,435,-23,-5432,43,2134,123,542,85,89,-234,-63,10,4312,6437,854,75];

function compareArrayUp(number1, number2){
    return number1 - number2;
}

function compareArrayDown(number1, number2){
    return number2 - number1;
}

function filterPositiveNumbers(obj){
    return obj > 0;
}


//----------------------task_1-------------------------
console.log("Масив відсортований на збільшення");
array.sort(compareArrayUp);
alert(array);

console.log("Масив відсортований на зменшення");
array.sort(compareArrayDown);
alert(array);
//-----------------------------------------------------


//----------------------task_2-------------------------
array.sort(compareArrayUp);
let filterArray = array.filter(filterPositiveNumbers);
alert(filterArray);
//-----------------------------------------------------