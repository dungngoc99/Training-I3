
use App_food
go

create table userInfor(
	userId int not null,
	fullName varchar (100) not null,
	email varchar(100) not null,
	password varchar (100) not null,

	constraint PK_userInfor primary key(userId asc)
	)
go

 
create table restaurant(
	resId int not null,
	resName varchar (100) not null,
	image varchar(100) not null,
	descRes varchar (100) not null,

	constraint PK_restaurant primary key(resId asc)
)
go

create table rateRes(
	userId int not null,
	resId int not null,
	amount int not null,
	dateRate datetime not null,
)
go



create table likeRes(
	userId int not null,
	resId int not null,	
	dateLike datetime not null,
)
go

create table food(
	foodId int not null,
	foodName varchar (100) not null,
	image varchar(100) not null,
	price float not null,
	descFood varchar (100) not null,
	typeId int not null,

	constraint PK_food primary key (foodId asc)
)
go

create table orderInfor(
	userId int not null,
	foodId int not null,
	amount int not null,
	code varchar (100) not null,
	arrSubId varchar (100) not null,	
)
go

create table subFood(
	subId int not null,
	subName varchar (100) not null,
	subPrice float not null,
	foodId int not null
	
	constraint PK_subFood primary key (subId asc)
)
go

create table foodType(
	typeId int not null,
	typeName varchar (100)
	
	constraint PK_foodType primary key (typeId asc)
)
go

alter table rateRes
add constraint FK_rateRes_userId 
foreign key (userId) references userInfor(userId)
go

alter table rateRes
add constraint FK_rateRes_resId
foreign key (resId) references restaurant(resId)
go

alter table likeRes
add constraint FK_likeRes_userId 
foreign key (userId) references userInfor(userId)
go

alter table likeRes
add constraint FK_likeRes_resId 
foreign key (resId) references restaurant(resId)
go

alter table orderInfor
add constraint FK_orderInfor_userId 
foreign key (userId) references userInfor(userId)
go

alter table orderInfor
add constraint FK_orderInfor_foodId 
foreign key (foodId) references food(foodId)
go

alter table subFood
add constraint FK_subFood_foodId 
foreign key (foodId) references food(foodId)
go

alter table food
add constraint FK_food_typeId
foreign key (typeId) references foodType(typeId)
go

-- userInfor table data
INSERT INTO userInfor (userId, fullName, email, password)
VALUES 
(1, 'John Smith', 'john.smith@example.com', 'password123'),
(2, 'Jane Doe', 'jane.doe@example.com', 'password456'),
(3, 'Bob Johnson', 'bob.johnson@example.com', 'password789'),
(4, 'Alice Williams', 'alice.williams@example.com', 'passwordabc'),
(5, 'David Lee', 'david.lee@example.com', 'passworddef'),
(6, 'Karen Chen', 'karen.chen@example.com', 'passwordghi');

-- restaurant table data
INSERT INTO restaurant (resId, resName, image, descRes)
VALUES 
(1, 'Pizza Place', 'pizza.jpg', 'A family-friendly pizza restaurant.'),
(2, 'Burger Joint', 'burger.jpg', 'A classic burger joint with a retro vibe.'),
(3, 'Taco Stand', 'taco.jpg', 'Authentic Mexican tacos and more.'),
(4, 'Indian Palace', 'indian.jpg', 'A taste of India in the heart of the city.'),
(5, 'Sushi Bar', 'sushi.jpg', 'Fresh sushi and Japanese cuisine.'),
(6, 'Chinese Garden', 'chinese.jpg', 'Traditional Chinese favorites in a serene atmosphere.');

-- rateRes table data
INSERT INTO rateRes (userId, resId, amount, dateRate)
VALUES 
(1, 1, 4, '2022-05-01 12:00:00'),
(2, 2, 3, '2022-04-15 18:30:00'),
(3, 3, 5, '2022-06-02 10:45:00'),
(4, 4, 4, '2022-03-28 20:15:00'),
(5, 5, 4, '2022-05-12 14:00:00'),
(6, 6, 5, '2022-06-01 17:20:00');

-- likeRes table data
INSERT INTO likeRes (userId, resId, dateLike)
VALUES 
(1, 1, '2022-06-05 12:45:00'),
(1, 5, '2022-06-03 20:30:00'),
(3, 3, '2022-06-04 08:45:00'),
(3, 2, '2022-06-05 15:15:00'),
(5, 5, '2022-06-02 08:39:00'),
(6, 4, '2022-06-05 14:01:00');
(1, 1, '2022-06-05 11:00:00'),
(2, 2, '2022-06-03 19:30:00'),
(3, 3, '2022-06-04 13:45:00'),
(4, 4, '2022-06-05 21:15:00'),
(5, 5, '2022-06-02 08:00:00'),
(6, 6, '2022-06-01 14:30:00');


-- food table data
INSERT INTO food (foodId, foodName, image, price, descFood, typeId)
VALUES 
(1, 'Pepperoni Pizza', 'pepperoni.jpg', 12.99, 'A classic pizza with spicy pepperoni.', 1),
(2, 'Cheeseburger', 'cheeseburger.jpg', 8.99, 'A juicy burger with melted cheese.', 2),
(3, 'Beef Tacos', 'beef-tacos.jpg', 10.99, 'Authentic Mexican tacos with seasoned beef.', 3),
(4, 'Chicken Tikka Masala', 'chicken-tikka-masala.jpg', 14.99, 'A popular Indian dish with tender chicken in a creamy tomato sauce.', 4),
(5, 'California Roll', 'california-roll.jpg', 9.99, 'A sushi roll with crab, avocado, and cucumber.', 5),
(6, 'Kung Pao Chicken', 'kung-pao-chicken.jpg', 11.99, 'A spicy Sichuan dish with chicken, peanuts, and vegetables.', 6),
(7, 'Margherita Pizza', 'margherita.jpg', 10.99, 'A simple pizza with fresh tomatoes, mozzarella, and basil.', 1),
(8, 'Veggie Burger', 'veggie-burger.jpg', 8.99, 'A meatless burger made with vegetables and grains.', 2),
(9, 'Fish Tacos', 'fish-tacos.jpg', 12.99, 'Tacos filled with crispy fish and topped with fresh salsa.', 3),
(10, 'Saag Paneer', 'saag-paneer.jpg', 13.99, 'A vegetarian Indian dish with spinach and cheese.', 4),
(11, 'Dragon Roll', 'dragon-roll.jpg', 12.99, 'A sushi roll with shrimp, avocado, and eel sauce.', 5),
(12, 'Mongolian Beef', 'mongolian-beef.jpg', 14.99, 'A sweet and savory Chinese dish with tender beef.', 6);

-- orderInfor table data
INSERT INTO orderInfor (userId, foodId, amount, code, arrSubId)
VALUES 
(1, 1, 2, 'ABCD1234', '1,2'),
(2, 5, 1, 'EFGH5678', '5'),
(3, 3, 3, 'IJKL9012', '3,4'),
(4, 4, 2, 'MNOP3456', '7'),
(5, 6, 1, 'QRST7890', '8'),
(6, 2, 2, 'UVWX1234', '9');

-- subFood table data
INSERT INTO subFood (subId, subName, subPrice, foodId)
VALUES 
(1, 'Extra Cheese', 1.50, 1),
(2, 'Mushrooms', 1.00, 1),
(3, 'Guacamole', 2.00, 3),
(4, 'Sour Cream', 1.00, 3),
(5, 'Naan Bread', 2.50, 4),
(6, 'Raita', 1.50, 4),
(7, 'Soy Sauce', 0.50, 5),
(8, 'Wonton Soup', 3.00, 6);

-- foodType table data
INSERT INTO foodType (typeId, typeName)
VALUES 
(1, 'Pizza'),
(2, 'Burgers'),
(3, 'Mexican'),
(4, 'Indian'),
(5, 'Sushi'),
(6, 'Chinese');

--1.Tìm 5 người đã like nhà hàng nhiều nhất. hiển thị thông tin userId, fullName

select 
	userId,
	fullName,
	LikeTimes
from (
	select 
		userInfor.userId,
		userInfor.fullName,
		count(*) as LikeTimes,
		DENSE_RANK() over (order by count(*) desc) as Rank
	from
		userInfor
		join likeRes on userInfor.userId = likeRes.userId
	group by userInfor.userId,userInfor.fullName
	) as ranked
where rank <= 5


--2.Tìm 2 nhà hàng có lượt like nhiều nhất.

select 
	resId,
	resName,
	LikeTimes
from (
	select 
		restaurant.resId,
		restaurant.resName,
		count (*) as LikeTimes,
		DENSE_RANK()over(order by count(*) desc) as Rank
	from likeRes 
	join restaurant  on likeRes.resId = restaurant.resId
	group by restaurant.resId,restaurant.resName
	) as ranked
where rank <=2


--3.Tìm người đã đặt hàng nhiều nhất.

select 
	userId,
	fullName,
	OrderTimes
from (
	select 
		userInfor.userId,
		userInfor.fullName,
		COUNT(*) OrderTimes,
		DENSE_RANK() over(order by count(*) desc) as Rank
	from 
		userInfor
		join orderInfor on userInfor.userId = orderInfor.userId
	group by userInfor.userId, userInfor.fullName
	) as ranked
where rank = 1

--4.Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng).

select 
	ui.userId,
	ui.fullName,
	ui.email,
	ui.password
from
	userInfor ui
	left join likeRes lr on ui.userId = lr.userId
	left join rateRes rr on ui.userId = rr.userId
	left join orderInfor oi on ui.userId = oi.userId
where 
	lr.userId is null 
	and rr.userId is null 
	and oi.userId is null

--5.Tính trung bình sub_food của một food.

select 	
	avg(foodCount) as AverageSubfoodOfFood
from (
	select count(*) as foodCount
	from 
		subFood sf
		left join food f on f.foodId = sf.foodId	
	group by 
	f.foodId,
	f.foodName
	) subquery_alias;

	