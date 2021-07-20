'use strict'

function alert(array){
    console.log(array);
 }

let student_1 = {
    yearOfStudying: 3 ,
    facultyName: "programming",
};

let student_2 = {
    yearOfStudying: 1 ,
    facultyName: "histori",
};

let student_3 = {
    yearOfStudying: 4 ,
    facultyName: "mathematics",
};

let student_4 = {
    yearOfStudying: 2 ,
    facultyName: "creation",
};

let student_5 = {
    yearOfStudying: 5 ,
    facultyName: "languages",
};

let student_6 = {
    yearOfStudying: 3 ,
    facultyName: "music",
};

let student_7 = {
    yearOfStudying: 2 ,
    facultyName: "management",
};

let student_8 = {
    yearOfStudying: 6 ,
    facultyName: "graphics and multimedia",
};

let student_9 = {
    yearOfStudying: 1 ,
    facultyName: "psychologist",
};

let student_10 = {
    yearOfStudying: 3 ,
    facultyName: "law",
};


let arrayStrudents = [student_1,student_2,student_3,student_4,student_5,student_6,student_7,student_8,student_9,student_10];
alert(arrayStrudents);


function getFacultyName(arrayStrudents) {
	return arrayStrudents.facultyName;
}

let arrayOfFaculties = arrayStrudents.map(getFacultyName);
alert(arrayOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, currentStudent) {
	return sumYearsOfStudying + currentStudent.yearOfStudying;
}

let totalYearsOfStudying = arrayStrudents.reduce(sumStudentsYearsOfStudying, 0);
alert(totalYearsOfStudying);








