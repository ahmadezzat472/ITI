let studentArr = [];
function addStudent(student) {
    studentArr.push(student);
}
function calcAvgGarde(grades) {
    let sum = 0;
    grades.forEach((grade) => {
        sum += grade;
    });
    return sum / grades.length;
}
function getStatus(grade) {
    if (grade >= 90) {
        return "Excellent";
    }
    else if (grade >= 70) {
        return "good";
    }
    else {
        return "Average";
    }
}
addStudent({
    id: 1,
    name: "ahmed",
    grades: [20, 50, 90],
    isActive: true,
    email: "ahmed@.com",
});
console.log(studentArr);
console.log(calcAvgGarde(studentArr[0] ? studentArr[0].grades : [20, 50, 90]));
console.log(getStatus(100));
export {};
//# sourceMappingURL=script.js.map