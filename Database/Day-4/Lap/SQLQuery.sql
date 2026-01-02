use Company_SD

-- 1 ----------------------------
select d.Dependent_name, d.Sex
from Dependent d inner join Employee e
on d.ESSN = e.SSN and d.Sex = 'F' and e.Sex = 'F'
union
select d.Dependent_name, d.Sex
from Dependent d inner join Employee e
on d.ESSN = e.SSN and d.Sex = 'M' and e.Sex = 'M'

-- 2 ----------------------------
select p.Pname as projectName, sum(w.Hours) as totalHours
from Project p 
inner join Works_for w on p.Pnumber = w.Pno
inner join Employee e on w.ESSn = e.SSN
group by p.Pname

-- 3 ----------------------------
select d.*
from Departments d
inner join Employee e
on d.Dnum = e.Dno
where e.SSN = (select min(e.SSN) from Employee e)

-- 4 ----------------------------
select d.Dnum, max(e.Salary), min(e.Salary), avg(e.Salary)
from Departments d inner join Employee e
on d.Dnum = e.Dno
group by d.Dnum

-- 5 ----------------------------
select e.Fname + ' ' + e.Lname as fullName
from Employee e 
inner join Departments d on e.SSN = d.MGRSSN
left outer join Dependent on Dependent.ESSN = e.SSN
where Dependent.Dependent_name is null

select e.*
from Employee e 
inner join Departments d 
on e.SSN = d.MGRSSN and e.SSN not in (select ESSN from Dependent)

-- 6 ----------------------------
select d.Dnum, d.Dname, AVG(e.Salary) as avgSalary , count(e.SSN) as numOfEmp
from Departments d
inner join Employee e on d.Dnum = e.Dno 
group by d.Dnum, d.Dname
having AVG(e.Salary) < (select AVG(salary) from Employee)

-- 7 ----------------------------
select e.Fname + ' ' + e.Lname as fullName, p.Pname, e.Dno
from Employee e
inner join Works_for w on e.SSN = w.ESSn
inner join Project p on w.Pno = p.Pnumber
order by e.Dno, e.Lname, e.Fname

-- 8 ----------------------------
select MAX(salary) as FirstHighestSalary from Employee
union
select MAX(Salary) as SecondHighestSalary
from Employee
where Salary < (select MAX(Salary) from Employee);


select top(2) Salary
from Employee
ORDER BY Salary DESC

-- 9 ----------------------------
select e.Fname + ' ' + e.Lname as intersectName
from Employee e
intersect
select d.Dependent_name
from Dependent d

-- 11 ----------------------------
insert into Departments
values('it', '100', '112233', '1-11-2006')

-- 12 ----------------------------
update Departments 
set MGRSSN = 968574
where Dnum = 100

update Departments 
set MGRSSN = 102672
where Dnum = 20 

update Employee 
set Superssn = 102672 
where SSN = 102660 

-- 13 ----------------------------
delete from Dependent
where ESSN = 223344

update Departments
set MGRSSN = 102672  
where MGRSSN = 223344

update Employee
set Superssn = 102672  
where Superssn = 223344

delete Works_for
where ESSN = 223344

delete from Employee
where SSN = 223344

-- 14 ----------------------------
update e
set e.Salary *= 1.3
from Employee e
inner join Works_for w on w.ESSn = e.SSN
inner join Project p on w.Pno = p.Pnumber
where p.Pname = 'Al Rabwah';