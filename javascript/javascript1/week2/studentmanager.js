//4. Student manager

const class07Students = [];

function addStudentToClass(studentName) {
    const isClassFull = class07Students.length >= 6 && studentName !== "Queen";
    
    if (isClassFull) {
        console.log("Cannot add more students to class 07");
        return; // Exit the function early if the class is full
    } 
    
    if (studentName.trim() === "") {
        console.log("You cannot add an empty string to a class");
        return; // Exit the function early if the student name is empty
    }

    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return; // Exit the function early if the student is already in the class
    }
    
    class07Students.push(studentName);
    console.log(`Added ${studentName} to the class`);
}

function getNumberOfStudents() {
  return class07Students.length;
}
getNumberOfStudents()