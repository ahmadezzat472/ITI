import type { Student } from "./models/student";

let studentArr: Student[] = [];

function addStudent(student: Student): void {
  studentArr.push(student);
}

function calcAvgGarde(grades: number[]): number {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });

  return sum / grades.length;
}

function getStatus(grade: number): string {
  if (grade >= 90) {
    return "Excellent";
  } else if (grade >= 70) {
    return "good";
  } else {
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
