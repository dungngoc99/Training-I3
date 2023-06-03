USE [Training]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 3/06/2023 11:13:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Cart] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartDetail]    Script Date: 3/06/2023 11:13:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartDetail](
	[CartId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_CartDetail] PRIMARY KEY CLUSTERED 
(
	[CartId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 3/06/2023 11:13:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[UnitPrice] [int] NOT NULL,
	[UnitName] [nvarchar](50) NOT NULL,
	[IsDisabled] [bit] NOT NULL,
	[CategoryId] [int] NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductCategory]    Script Date: 3/06/2023 11:13:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategory](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_ProductCategory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Cart] ON 
GO
INSERT [dbo].[Cart] ([Id], [CreatedDate]) VALUES (1, CAST(N'2023-02-27T16:24:57.160' AS DateTime))
GO
INSERT [dbo].[Cart] ([Id], [CreatedDate]) VALUES (2, CAST(N'2022-04-22T10:34:24.000' AS DateTime))
GO
INSERT [dbo].[Cart] ([Id], [CreatedDate]) VALUES (3, CAST(N'2022-04-25T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Cart] OFF
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (1, 10, 5)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (1, 20, 3)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (1, 22, 4)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (1, 30, 3)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (2, 10, 3)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (2, 21, 3)
GO
INSERT [dbo].[CartDetail] ([CartId], [ProductId], [Quantity]) VALUES (2, 22, 3)
GO
INSERT [dbo].[Product] ([Id], [Name], [UnitPrice], [UnitName], [IsDisabled], [CategoryId]) VALUES (10, N'Ipad Pro', 1000, N'Ipad Pro 2020', 1, 1)
GO
INSERT [dbo].[Product] ([Id], [Name], [UnitPrice], [UnitName], [IsDisabled], [CategoryId]) VALUES (20, N'Macbook Pro', 2000, N'Macbook  M1 2020', 1, 2)
GO
INSERT [dbo].[Product] ([Id], [Name], [UnitPrice], [UnitName], [IsDisabled], [CategoryId]) VALUES (21, N'Dell', 2000, N'Dell Ins', 1, 2)
GO
INSERT [dbo].[Product] ([Id], [Name], [UnitPrice], [UnitName], [IsDisabled], [CategoryId]) VALUES (22, N'Lenovo', 2000, N'Thinkpad', 1, 2)
GO
INSERT [dbo].[Product] ([Id], [Name], [UnitPrice], [UnitName], [IsDisabled], [CategoryId]) VALUES (30, N'Iphone', 999, N'Iphone 12', 1, 3)
GO
INSERT [dbo].[ProductCategory] ([Id], [Name]) VALUES (1, N'Tablet')
GO
INSERT [dbo].[ProductCategory] ([Id], [Name]) VALUES (2, N'Laptop')
GO
INSERT [dbo].[ProductCategory] ([Id], [Name]) VALUES (3, N'Phone')
GO
INSERT [dbo].[ProductCategory] ([Id], [Name]) VALUES (4, N'Desktop')
GO
ALTER TABLE [dbo].[CartDetail]  WITH CHECK ADD  CONSTRAINT [FK_CartDetail_Cart] FOREIGN KEY([CartId])
REFERENCES [dbo].[Cart] ([Id])
GO
ALTER TABLE [dbo].[CartDetail] CHECK CONSTRAINT [FK_CartDetail_Cart]
GO
ALTER TABLE [dbo].[CartDetail]  WITH CHECK ADD  CONSTRAINT [FK_CartDetail_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[CartDetail] CHECK CONSTRAINT [FK_CartDetail_Product]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_ProductCategory1] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[ProductCategory] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_ProductCategory1]
GO