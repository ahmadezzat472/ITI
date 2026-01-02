use AdventureWorks2012

-- 1 ----------------------------
select soh.SalesOrderID, soh.ShipDate
from Sales.SalesOrderHeader soh
where soh.ShipDate between '7/28/2002' and '7/29/2014'

-- 2 ----------------------------
select p.ProductID, p.Name
from Production.Product p
where p.StandardCost < 110

-- 3 ----------------------------
select p.ProductID, p.Name
from Production.Product p
where weight is not null  

-- 4 ----------------------------
select p.ProductID, p.Name, p.Color
from Production.Product p
where p.Color in ('Red', 'Silver', 'Black')  

-- 5 ----------------------------
select p.ProductID, p.Name
from Production.Product p
where p.Name like 'B%'

UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3


-- 6 ----------------------------
select p.Description
from Production.ProductDescription p
where p.Description LIKE '%[_]%';

select p.Description
from Production.ProductDescription p
where p.Description LIKE '%/_%' escape '/';

-- 7 ----------------------------
select 
  s.OrderDate,
  SUM(TotalDue) AS [Total Sales Per Day]
FROM Sales.SalesOrderHeader s
WHERE OrderDate BETWEEN '2001-07-01' AND '2014-07-31'
GROUP BY OrderDate

-- 8 ----------------------------
select distinct HireDate
from HumanResources.Employee

-- 9 ----------------------------
select 
  AVG(distinct ListPrice) as [Average Unique ListPrice]
from Production.Product;

-- 10 ----------------------------
select 
  'The ' + Name + ' is only! ' + CAST(ListPrice AS VARCHAR(10)) AS [Product Info]
from Production.Product
where ListPrice between 100 and 120
order by ListPrice;

-- 11 ----------------------------
select rowguid, Name, SalesPersonID, Demographics into store_Archive
from Sales.Store 

select rowguid, Name, SalesPersonID, Demographics into store_Archive_empty
from Sales.Store 
where 1=0

-- 12 ----------------------------
select GETDATE()
select FORMAT(GETDATE(), 101)
select FORMAT(GETDATE(), 102)
select FORMAT(GETDATE(), 103)



