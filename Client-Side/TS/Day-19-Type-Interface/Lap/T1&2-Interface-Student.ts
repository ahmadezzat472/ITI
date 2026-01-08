interface Student {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
  grades: number[];
}

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
