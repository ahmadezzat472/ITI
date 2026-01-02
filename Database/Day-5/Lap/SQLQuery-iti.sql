use ITI

-- 1 -------------------------
select COUNT(s.St_Age) as numOfStu
from Student s
-- where s.St_Age is not null

-- 2 -------------------------
select distinct  i.Ins_Name
from Instructor i

-- 3 -------------------------
select 
	 s.St_Id as [Student ID],
	ISNULL(s.St_Fname, '') + ' ' + ISNULL(s.St_Lname, '') as [Student Full Name], 
	ISNULL(d.Dept_Name, 'No Department') as [Department Name]	
from Student s left outer join Department d
on s.Dept_Id = d.Dept_Id

-- 4 -------------------------
select 
	i.Ins_Name, d.Dept_Name
from Instructor i left outer join Department d
on i.Dept_Id = d.Dept_Id

-- 5 -------------------------
select 
	s.St_Fname, c.Crs_Name, sc.Crs_Id
from Student s 
inner join Stud_Course sc on s.St_Id = sc.St_Id
inner join Course c on c.Crs_Id = sc.Crs_Id
WHERE sc.Grade IS NOT NULL;

-- 6 -------------------------
select t.Top_Name, count(c.Crs_Id) as numOfCources
from Topic t , Course c
where t.Top_Id = c.Top_Id
group by t.Top_Name
-- more true
select t.Top_Name, count(c.Crs_Id) as numOfCources
from Topic t left outer join Course c
on t.Top_Id = c.Top_Id
group by t.Top_Name

-- 7 -------------------------
select 
	max(i.Salary) as [max salary],
	min(i.Salary) as [min salary]
from Instructor i
-- Instructor with Max Salary
select top(1) Ins_Name, Salary
from Instructor
order by Salary DESC;
-- Instructor with Min Salary
select top(1) Ins_Name, Salary
from Instructor
order by Salary ASC;

-- 8 -------------------------
select i.Ins_Name, i.salary
from Instructor i
where i.salary < (select avg(salary) from Instructor)

-- 9 -------------------------
select d.Dept_Name, i.Salary
from Instructor i, Department d
where 
	i.Dept_Id = d.Dept_Id 
	and
	i.salary = (select min(salary) from Instructor)

-- 10 -------------------------
select top(2) Ins_Name, Salary
from Instructor 
order by Salary desc

-- 11 -------------------------
select 
  Ins_Name ,
  COALESCE(Salary, 'Bonus') AS [Salary]
FROM Instructor;

select 
  Ins_Name ,
  isnull(CAST(Salary AS VARCHAR(10)), 'Bonus') AS [Salary]
FROM Instructor;

-- 12 -------------------------
select avg(salary) as [avg salary] from Instructor

-- 13 -------------------------
select x.St_Fname as [stu name], y.St_Fname as [super name]
from Student x, Student y
where x.St_super = y.St_Id

-- 14 -------------------------
select *
from (select *,ROW_NUMBER() over(partition by Dept_Id order by Salary desc) as RN
      from Instructor ) as newtable
where RN<=2

-- 15 -------------------------
select *
from (select *,ROW_NUMBER() over(partition by Dept_Id order by newid()) as RN
      from Instructor ) as newtable
WHERE RN = 1;