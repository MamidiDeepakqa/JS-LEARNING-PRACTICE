// /Combined Exercise: Student Exam Result System 🎓

// Here's your data — plus a real API call combined:

let examSystem = {
  instituteName: "TechAcademy",
  location: "Hyderabad",
  apiStatus: 200,
  data: {
    examiner: {
      examinerId: "E001",
      name: "Dr. Sharma",
      subject: "Computer Science",
      isAvailable: true
    },
    students: [
      { studentId: "S001", name: "Deepak", score: 85, grade: "A", hasPassed: true },
      { studentId: "S002", name: "Suresh", score: 45, grade: "F", hasPassed: false },
      { studentId: "S003", name: "Priya", score: 92, grade: "A+", hasPassed: true },
      { studentId: "S004", name: "Anjali", score: 55, grade: "C", hasPassed: true },
      { studentId: "S005", name: "Ravi", score: 38, grade: "F", hasPassed: false }
    ],
    examStats: {
      totalStudents: 5,
      passPercentage: 60,
      isResultPublished: true
    }
  }
};



// Eight tasks — all in one file
console.log("Task 1: Print instituteName, location and apiStatus directly.")
console.log("Institution Name: ", examSystem.instituteName);
console.log("Location: ", examSystem.location);
console.log("apiStatus: ", examSystem.apiStatus);
console.log("___________________");

console.log("Task 2: Print name and subject from the nested examiner object.");
console.log("examiner name: ", examSystem.data.examiner.name);
console.log("subject name: ", examSystem.data.examiner.subject);
console.log("___________________");

console.log("Task 3:Write an if/else checking all three simultaneously:");
// apiStatus === 200
// examiner.isAvailable === true
// examStats.isResultPublished === true

if (examSystem.apiStatus === 200 &&
  examSystem.data.examiner.isAvailable === true &&
  examSystem.data.examStats.isResultPublished === true
) {
  console.log("Exam system ready - results published");
} else {
  console.log("System not ready");
}
console.log("___________________");


console.log("Task 4: Use .filter() to get only passed students (hasPassed === true), then .forEach() to print:")
//Passed: S001 - Deepak - 85 - A

let response = examSystem.data.students.filter((value) => {
  return value.hasPassed === true;
});
response.forEach((code) => {
  console.log("Passed: " + code.studentId + " - " + code.name + " - " + code.score + " = " + code.grade);
})
console.log("___________________");

console.log("Task 5: Use .filter() to get only failed students (hasPassed === false), then .map() to transform into just their name values and print:");
//["Suresh", "Ravi"]

let allStudents = examSystem.data.students.filter((students) => {
  return students.hasPassed === false;
});
let failedStudents = allStudents.map((code) => {
  return code.name;
});
console.log(failedStudents);
console.log("___________________");


console.log("Task 6: Write a function called getStudentResult that takes a student object and returns:");
//"Distinction" if score is >= 90
// "First Class" if score is >= 75 AND < 90
// "Pass" if score is >= 50 AND < 75
// "Fail" if score is < 50

let studentHierarchy = examSystem.data.students;
function getStudentResult(student) {
  if (student.score >= 90) {
    return "Distinction";
  } else if (student.score >= 75 && student.score < 90) {
    return "First Class";
  } else if (student.score >= 50 && student.score < 75) {
    return "Pass";
  } else if (student.score < 50) {
    return "Fail";
  }
}
studentHierarchy.forEach((student) => {
  console.log(student.name + " : " + getStudentResult(student));
});
console.log("___________________");

console.log("Task 7: Write an async function called getExaminerDetails that:");
// Fetches from https://jsonplaceholder.typicode.com/users/1
// Uses try/catch/finally
// Checks response.status === 200
// Prints name and email from the response
// catch prints "ERROR: " + error.message
// finally prints "API test complete"

async function getExaminerDetails() {
 try{
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if(response.status === 200){
     const useData = await response.json();
    console.log("Student Name : " + ":" + useData.name);
    console.log("Student Email : " + ":" + useData.email);
  }
}catch(error){
    console.log("ERROR: " + error.message);
  }finally{
    console.log("API test complete");
  }
}  


getExaminerDetails();

// NOTE : When you need to check both condition[If else] then on failure it will print else part.
// If you need to print only if condition part then instead else part directly can use console[this part will print can refer above code].
console.log("___________________");

console.log("Write an if/else checking the examStats object:")
// If passPercentage >= 80 → print "Excellent batch performance"
// If passPercentage >= 60 AND < 80 → print "Good batch performance"
// If passPercentage >= 40 AND < 60 → print "Average batch performance"
// Otherwise → print "Poor batch performance"

if(studentHierarchy.examStats.passPercentage >= 80){
  console.log("Excellent batch performance");
}else if(studentHierarchy.examStats.passPercentage >= 60 && studentHierarchy.examStats.passPercentage < 80){
  console.log("Good batch performance");
}else if(studentHierarchy.examStats.passPercentage >= 40 && studentHierarchy.examStats.passPercentage < 60){
  console.log("Average batch performance");
}else{
  console.log("Poor batch performance");
}