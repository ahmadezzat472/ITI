use Company_SD

SELECT * 
FROM Employee;

SELECT Fname, Lname, Salary, Dno
FROM Employee;

SELECT Pname, Plocation, Dnum 
FROM Project;

SELECT full_name = Fname + ' ' + Lname, ANNUAL_COMM = Salary * 12 * 0.10
FROM Employee;
-- == -----------
SELECT Fname + ' ' + Lname as full_name, ANNUAL_COMM = Salary * 12 * 0.10
FROM Employee;

SELECT Fname, salary
FROM Employee
WHERE Salary > 1000;

SELECT Fname, salary
FROM Employee
WHERE (Salary * 12) > 1000;

SELECT Fname, salary
FROM Employee
WHERE Sex = 'F';

SELECT Dnum, Dname
FROM Departments
WHERE MGRSSN = 968574;

SELECT Pname, Plocation, Dnum 
FROM Project
WHERE Dnum = 10;