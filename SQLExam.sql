use Training
go

select * from Cart
select * from CartDetail
select * from Product
select * from ProductCategory

/*
1. Truy vấn danh sách mặt hàng không disabled với các thông tin: 
Id, Name, UnitName, CategoryId, CategoryName
(select, where, join)
*/
select  
	p.Id as Id,  
	p.Name as Name,  
	p.UnitName as UnitName, 
	p.CategoryId as CategoryId, 
	pc.Name as CategoryName
from 
	Product p  
	join ProductCategory pc on p.CategoryId = pc.Id
where  
	p.IsDisabled = 1


/*
2. Truy vấn danh sách mặt hàng đang nằm trong giỏ với các thông tin:
CartId, ProductId, ProductName, CategoryName, Quantity, UnitName
(select, join)
*/
select
	c.Id as CartId, 
	p.Id as ProductId, 
	p.Name as ProductName, 
	pc.Name as CategoryName, 
	cd.Quantity as Quantity,
	p.UnitName as UnitName
from 
	CartDetail cd 
	join Cart c on c.Id = cd.CartId
	join Product p on cd.ProductId =  p.Id
	join ProductCategory pc on  p. CategoryId = pc.Id
 
/*
3. Truy vấn danh sách các mặt hàng cùng với tổng số lượng mua trong tất cả cart, sắp xếp theo tổng số lượng giảm dần
ProductId, ProductName, TotalQuantityInCart
(select, join, group by, order by)
*/
select  
	p.Id as ProductId,
	p.Name as ProductName, 
	cd.Quantity as TotalQuantityInCart 
from 
	Cart c 
	join CartDetail cd on c.Id = cd.CartId
	join Product p on cd.ProductId =  p. Id
order by 
	TotalQuantityInCart desc

/*
4. Truy vấn danh sách cart và tổng tiền của từng cart, sắp xếp theo số tiền giảm dần
CartId, TotalPrice
*/
select c.Id,SUM( p. UnitPrice * cd.Quantity) as TotalPrice
from Cart c 
join CartDetail cd on c.Id = cd.CartId
join Product p on cd.ProductId =  p. Id
group by c.Id
order by TotalPrice desc

/*
5. Truy vấn danh sách mặt hàng cùng số lượng cao nhất có trong tất cả cart
ProductId, ProductName, MaxQuantityInCart
*/
select  
	p.Id as ProductId, 
	p.Name as ProductName,
	max(cd.Quantity) as MaxQuantityInCart
from 
	Product p
	join CartDetail cd on cd.ProductId = p.Id
group by  
	p.Id, p.Name

/*
6. Truy vấn danh sách category cùng với số lượng sản phẩm, sắp xếp theo số lượng giảm dần
CategoryId, CategoryName, NumberOfProduct
*/

select 
	pc.Id as CategoryId, 
	pc.Name as CategoryName,
	coalesce(Sum(cd.Quantity),0) as NumberOfProduct
from 
	CartDetail cd  
	right join Product p on cd.ProductId=  p. Id
	right join ProductCategory pc on  p. CategoryId = pc. Id
group by 
	pc. Id, pc. Name
order by 
	NumberOfProduct desc


/*
7. Truy vấn danh sách category cùng tổng tiền hàng trong tất cả Cart, sắp xếp theo tiền hàng giảm dần
CategoryId, CategoryName, TotalPrice
*/
select 
	pc.Id as CategoryId, 
	pc. Name as CategoryName, 
	coalesce(SUM(cd.Quantity * p.UnitPrice),0) as TotalPrice
from 
	ProductCategory pc  
	left join Product p on pc.Id =  p. CategoryId
	left join CartDetail cd on  p.Id = cd.ProductId
group by 
	pc.Id, pc.Name
order by 
	TotalPrice desc


/*
8. Số lượng Cart c phát sinh theo ngày
Date, NumberOfCart
*/
select 
	c.CreatedDate as Date,
	sum(cd.Quantity) as NumberOfCart
from 
	CartDetail cd
	left join Cart c on cd.CartId = c.Id
group by 
	c.CartId


/*
9. Tổng tiền trong Cart c theo ngày
Date, TotalPrice
*/
select c.CreatedDate as Date, sum( cd.Quantity* p. UnitPrice ) as TotalPrice
from CartDetail
left join Cart c on c.Id = cd.CartId
left join Product p on cd.ProductId =  p. Id
group by c.CreatedDate
