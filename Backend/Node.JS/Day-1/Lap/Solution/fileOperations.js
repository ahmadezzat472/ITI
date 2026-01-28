const studentData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    course: "Computer Science",
    grades: {
      math: 90,
      programming: 95,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    course: "Data Science",
    grades: {
      statistics: 88,
      machine_learning: 92,
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    age: 21,
    course: "Web Development",
    grades: {
      html: 95,
      javascript: 89,
    },
  },
];

const fsSync = require("node:fs");
const fsAsync = require("node:fs/promises");
const FILE_NAME = "students.json";

// *=================================== synchronous operations ===================================*

/**
 ** ================
 ** Read from students.json
 ** ================
 */
function readStudentsSync() {
  const data = fsSync.readFileSync(FILE_NAME, "utf-8");
  return JSON.parse(data);
}

/**
 ** ================
 ** Write the studentData to students.json
 ** ================
 */
function writeStudentsSync(data) {
  fsSync.writeFileSync(FILE_NAME, JSON.stringify(data, null, 2));
}
writeStudentsSync(studentData);

/**
 ** ================
 ** Add a new student
 ** ================
 */
function addStudent(newStudent) {
  const students = readStudentsSync();
  students.push(newStudent);
  writeStudentsSync(students);
}

/**
 ** ================
 ** (bonus) Update a student
 ** ================
 */
function updateStudentCourse(id, newCourse) {
  const students = readStudentsSync();
  const student = students.find((s) => s.id === id);

  if (!student) return console.log("Student not found");

  student.course = newCourse;
  writeStudentsSync(students);
}

/**
 ** ================
 ** (bonus) Delete a student
 ** ================
 */
function deleteStudent(id) {
  const students = readStudentsSync();
  const filtered = students.filter((s) => s.id !== id);

  writeStudentsSync(filtered);
}

// *=================================== asynchronous operations ===================================*
async function readStudents() {
  const data = await fsAsync.readFile(FILE_NAME, "utf-8");
  return JSON.parse(data);
}

async function writeStudents(students) {
  await fsAsync.writeFile(FILE_NAME, JSON.stringify(students, null, 2));
}

async function addStudent(student) {
  const students = await readStudents();
  students.push(student);
  await writeStudents(students);
}

// *=================================== comparison ===================================*
/*
 * ┌───────────────────────────────┬───────────────────────────────┬───────────────────────────────┐
 * │ Feature                       │       fs.readFileSync         │     fs.promises.readFile      │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Type                          │ Synchronous                   │ Asynchronous (Promise-based)  │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Blocking                      │ Blocks event loop             │ Non-blocking                  │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Execution                     │ Waits until file is read      │ Continues execution           │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Performance                   │ Slower under load             │ Better for scalability        │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Syntax                        │ Simple                        │ Uses `async / await`          │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Error handling                │ `try / catch`                 │ `try / catch`                 │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Best use case                 │ Scripts, learning, small tools│ APIs, servers, production     │
 * ├───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
 * │ Node.js style                 │ Old / blocking                │ Modern / recommended          │
 * └───────────────────────────────┴───────────────────────────────┴───────────────────────────────┘
  
  * Sync
  * Read File ────────▶ Continue
  * (blocked)
  
  * Async
  * Read File ────────▶ Continue
  *              └── File done later

  * fs.readFileSync blocks the event loop
  * fs.promises.readFile is non-blocking and should be used in scalable Node.js applications.
*/
