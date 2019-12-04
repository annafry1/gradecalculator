function calculateCurrentGrade(final){
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

    var hwWeight = parseInt(document.getElementById("hwWeight").value);
    var quizWeight = parseInt(document.getElementById("quizWeight").value);
    var testWeight = parseInt(document.getElementById("testWeight").value);
    var partWeight = parseInt(document.getElementById("partWeight").value);
    var projectWeight = parseInt(document.getElementById("projectWeight").value);
    var finalWeight = parseInt(document.getElementById("examWeight").value);

    if(!final){
        var totalWeight = hwWeight + quizWeight + testWeight + partWeight + projectWeight;
        hwWeight = hwWeight/totalWeight;
        quizWeight = quizWeight/totalWeight;
        testWeight = testWeight/totalWeight;
        partWeight = partWeight/totalWeight;
        projectWeight = projectWeight/totalWeight;
    }else{
        hwWeight = hwWeight/100;
        quizWeight = quizWeight/100;
        testWeight = testWeight/100;
        partWeight = partWeight/100;
        projectWeight = projectWeight/100;
    }

    var hw = hwAvg * hwWeight;
    var quiz = quizAvg * quizWeight;
    var test = testAvg * testWeight;
    var part = partAvg * partWeight;
    var project = projectAvg * projectWeight;

    var currentGrade = Math.floor(hw + quiz + test + part + project);
    console.log(currentGrade);
    if(isNaN(currentGrade)){
        alert("Please enter valid weights or grades");
    }else if(!final){
        document.getElementById("currentGrade").innerHTML = "Your current grade is " + currentGrade + "%";
    }
    return currentGrade;
    console.log(currentGrade);

}

function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade(true);
    console.log(currentGrade);
    var gradeWanted = strToNum(document.getElementById("gradeWanted").value);
    var finalWeight = parseInt(document.getElementById("examWeight").value);

    var a = (gradeWanted - currentGrade);
    console.log(a);
    var gradeNeeded = Math.floor((a / finalWeight) * 100) ;
    console.log(gradeWanted);
    document.getElementById("gradeNeeded").innerHTML = "You will need " + gradeNeeded + " to get a " + gradeWanted + " in the class.";

}

function strToNum(str){
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i ++){
        arr[i] = parseInt(arr[i]);
        if(arr[i] > 200){
            alert("Value too high.");
            return;
        }
    }
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
