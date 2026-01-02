use Company_SD

-- 1 ------------------------------------
select Dname, Dnum, SSN, Fname
from Departments, Employee
where Departments.MGRSSN = Employee.SSN

select Dname, Dnum, SSN, Fname
from Departments inner join Employee
on Departments.MGRSSN = Employee.SSN

-- 2 ------------------------------------
select D.Dname, P.Pname
from Departments D inner join Project P
on D.Dnum = P.Dnum

-- 3 ------------------------------------
select D.*, E.Fname + ' ' + E.Lname as fullName
from Dependent D left outer join Employee E
on D.ESSN = E.SSN

-- 4 ------------------------------------
select P.Pname, P.Plocation, P.Pnumber, P.City
from Project P
where p.City in ('Cairo', 'Alex');

-- 5 ------------------------------------
select *
from Project P
where P.Pname like 'a%'

-- 6 ------------------------------------
select *
from Employee E
where E.Dno = 30 and E.Salary between 1000 and 2000

-- 7 ------------------------------------
select (Employee.Fname + ' ' + Employee.Lname) as FullName 
from Employee 
inner join Works_for ON Employee.Dno = 10 and Works_for.Hours >= 10
inner join Project ON Project.Pname = 'Al Rabwah' and Works_for.Pno = Project.Pnumber;

-- 8 ------------------------------------
select x.Fname + ' ' + x.Lname as fullName 
from Employee x, Employee y
where y.SSN = x.Superssn and y.Fname = 'Kamel' and y.Lname = 'mohamed'

-- 9 ------------------------------------
select E.Fname as EName, P.Pname as Pname
from Employee E, Works_for W, Project P
where E.SSN = W.ESSn and W.Pno = P.Pnumber
order by p.Pname

select E.Fname as EName, P.Pname as Pname
from Employee E 
inner join Works_for W on E.SSN = W.ESSn
inner join Project P on W.Pno = P.Pnumber
order by p.Pname asc

-- 10 ------------------------------------
select P.Pnumber, D.Dname, E.Lname ,E.Address, E.Bdate
from Project P 
inner join Departments D on P.Dnum = D.Dnum
inner join Employee E on D.MGRSSN = E.SSN
where P.City = 'Cairo'

-- 11 ------------------------------------
select E.* 
from Employee E inner join Departments D
on D.MGRSSN = E.ssn

-- 12 ------------------------------------
select E.*, D.*
from Employee E
left outer join Dependent D
on E.SSN = D.ESSN

-- 13 ------------------------------------
insert into Employee (dno,ssn,Superssn,Salary)
values(30,102672,112233,3000)

-- 14 ------------------------------------
insert into Employee (dno,ssn,fname,lname,bdate,address,sex)
values(30,102660,'Ziad','Alaa','2/9/2004','11 Ain shams.cairo','M')

-- 15 ------------------------------------
update Employee
set salary += salary * 0.2