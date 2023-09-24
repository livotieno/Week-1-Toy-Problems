function gradesystem(marks){
    //grades
    //80 to 100 'A'
    //79 to 60  'B'
    //59 to 50  'C'
    //49 to 40  'D'
    //0 to 39   'E'
}
if (marks>79 && marks <= 100){
    console.log('A');
}
 else if (marks<=79 && maerks>=60){
    console.log('B');
}
else if (marks<60 && marks >=49){
    console.log('C');
}
else if (marks<49 && marks >=40){
    console.log('D');
}
else if (marks<40 && marks >=0){
    console.log('E');
}
console.log('marks should be between 0 to 100');

gradesystem(75);
