use Training
go

select * from dbo.Cart
select * from dbo.CartDetail
select * from dbo.Product
select * from dbo.ProductCategory

/*
1. Truy vấn danh sách mặt hàng không disabled với các thông tin: 
Id, Name, UnitName, CategoryId, CategoryName
(select, where, join)
*/
select pd.Id, pd.Name, pd.UnitName, pd.CategoryId, pc.Name as CategoryName
from dbo.Product as pd 
join dbo.ProductCategory as pc
on pd.IsDisabled = 1
where pd.CategoryId = pc.Id


/*
2. Truy vấn danh sách mặt hàng đang nằm trong giỏ với các thông tin:
CartId, ProductId, ProductName, CategoryName, Quantity, UnitName
(select, join)
*/
select Cart.Id, Product.Id, Product.Name, ProductCategory.Name, CartDetail.Quantity,Product.UnitName from dbo.CartDetail 
join dbo.Cart on Cart.Id = CartDetail.CartId
join dbo.Product on CartDetail.ProductId = Product.Id
join dbo.ProductCategory on Product.CategoryId = ProductCategory.Id
 
/*
3. Truy vấn danh sách các mặt hàng cùng với tổng số lượng mua trong tất cả cart, sắp xếp theo tổng số lượng giảm dần
ProductId, ProductName, TotalQuantityInCart
(select, join, group by, order by)
*/
select Product.Id,Product.Name,CartDetail.Quantity as TotalQuantityInCart 
from dbo.Cart 
join dbo.CartDetail on Cart.Id = CartDetail.CartId
join dbo.Product on CartDetail.ProductId = Product.Id
order by TotalQuantityInCart desc

/*
4. Truy vấn danh sách cart và tổng tiền của từng cart, sắp xếp theo số tiền giảm dần
CartId, TotalPrice
*/
select Cart.Id,SUM(Product.UnitPrice * CartDetail.Quantity) as TotalPrice
from dbo.Cart 
join dbo.CartDetail on Cart.Id = CartDetail.CartId
join dbo.Product on CartDetail.ProductId = Product.Id
group by Cart.Id
order by TotalPrice desc

/*
5. Truy vấn danh sách mặt hàng cùng số lượng cao nhất có trong tất cả cart
ProductId, ProductName, MaxQuantityInCart
*/
select Product.Id as ProductId,Product.Name as ProductName, CartDetail.Quantity as MaxQuantityInCart
from dbo.Product
join dbo.CartDetail on CartDetail.ProductId = Product.Id
where CartDetail.Quantity = 
(
	select max(CartDetail.Quantity) 
	from dbo.CartDetail	
)
group by Product.Id,Product.Name,CartDetail.Quantity

/*
6. Truy vấn danh sách category cùng với số lượng sản phẩm, sắp xếp theo số lượng giảm dần
CategoryId, CategoryName, NumberOfProduct
*/

select ProductCategory.Id as CategoryId, ProductCategory.Name as CategoryName, Sum(CartDetail.Quantity) as NumberOfProduct
from dbo.CartDetail  
right join dbo.Product on CartDetail.ProductId= Product.Id
right join dbo.ProductCategory on Product.CategoryId = ProductCategory.Id
group by ProductCategory.Id, ProductCategory.Name
order by NumberOfProduct desc


/*
7. Truy vấn danh sách category cùng tổng tiền hàng trong tất cả Cart, sắp xếp theo tiền hàng giảm dần
CategoryId, CategoryName, TotalPrice
*/
select ProductCategory.Id as CategoryId, 
		ProductCategory.Name as CategoryName, 
		SUM(CartDetail.Quantity*Product.UnitPrice) as TotalPrice
from dbo.ProductCategory 
left join dbo.Product on ProductCategory.Id = Product.CategoryId
left join dbo.CartDetail on Product.Id = CartDetail.ProductId
group by ProductCategory.Id, ProductCategory.Name
order by TotalPrice desc


/*
8. Số lượng Cart phát sinh theo ngày
Date, NumberOfCart
*/
select GETDATE() as Date,sum(CartDetail.Quantity) as NumberOfCart
from dbo.CartDetail
left join dbo.Cart on CartDetail.CartId = Cart.Id
group by CartDetail.CartId


/*
9. Tổng tiền trong Cart theo ngày
Date, TotalPrice
*/
select Cart.CreatedDate as Date, sum(CartDetail.Quantity*Product.UnitPrice ) as TotalPrice
from dbo.CartDetail
left join dbo.Cart on Cart.Id = CartDetail.CartId
left join dbo.Product on CartDetail.ProductId = Product.Id
group by Cart.CreatedDate
