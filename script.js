function calculateCurrentGrade(){
    var hwGrades = strToNum(document.getElementById("hwGrades").value);
    var hwAvg = avgArr(hwGrades);
    var quizGrades = strToNum(document.getElementById("quizGrades").value);
    var quizAvg = avgArr(quizGrades);
    var testGrades = strToNum(document.getElementById("testGrades").value);
    var testAvg = avgArr(testGrades);
    var partGrades = strToNum(document.getElementById("partGrades").value);
    var partAvg = avgArr(partGrades);
    var projectGrades = strToNum(document.getElementById("projectGrades").value);
    var projectAvg = avgArr(projectGrades);

    var hwWeight = parseInt(document.getElementById("hwWeight").value)/100;
    var quizWeight = parseInt(document.getElementById("quizWeight").value)/100;
    var testWeight = parseInt(document.getElementById("testWeight").value)/100;
    var partWeight = parseInt(document.getElementById("partWeight").value)/100;
    var projectWeight = parseInt(document.getElementById("projectWeight").value)/100;
    var finalWeight = parseInt(document.getElementById("examWeight").value)/100;

    var hw = hwAvg * hwWeight;
    var quiz = quizAvg * quizWeight;
    var test = testAvg * testWeight;
    var part = partAvg * partWeight;
    var project = projectAvg * projectWeight;


    var currentGrade = Math.floor(hw + quiz + test + part + project);
    console.log(currentGrade);
    document.getElementById("currentGrade").innerHTML = "Your current grade is " + currentGrade + "%";
    return currentGrade;

}

function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    var gradeWanted = strToNum(document.getElementById("gradeWanted").value);
    var finalWeight = parseInt(document.getElementById("examWeight").value);

    var a = gradeWanted - ((currentGrade/100) * (100 - finalWeight));
    var gradeNeeded = Math.floor((100 * a) / finalWeight);
    console.log(gradeWanted);
    document.getElementById("gradeNeeded").innerHTML = "You will need " + gradeNeeded + " to get a " + gradeWanted + " in the class.";

}

function strToNum(str){
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i ++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}

function avgArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
}

function reset(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("gradeNeeded").innerHTML = "";
}