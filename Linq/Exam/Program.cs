using System;
using System.Collections.Generic;
using System.Linq;

namespace Exam
{
    public class Cart
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
    }
    public class CartDetail
    {
        public int CardId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

    }
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double UnitPrice { get; set; }
        public string UnitName { get; set; }
        public bool IsDisable { get; set; }
        public int CategoryId { get; set; }

    }
    public class ProductCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var carts = new List<Cart>();
            var cartDetails = new List<CartDetail>();
            var products = new List<Product>();
            var productCategorys = new List<ProductCategory>();
            //1. Truy vấn danh sách mặt hàng không disabled với các thông tin: Id, Name, UnitName, CategoryId, CategoryName
            var query1 = (from p in products
                          join cd in cartDetails on p.Id equals cd.ProductId
                          where p.IsDisable == false
                          select new
                          {
                              Id = p.Id,
                              Name = p.Name,
                              UnitName = p.UnitName,
                              CategoryId = p.CategoryId
                          }).ToList();
            //2.Truy vấn danh sách mặt hàng đang nằm trong giỏ với các thông tin:CartId, ProductId, ProductName, CategoryName, Quantity, UnitName
            var query2 = (from cd in cartDetails
                          join p in products on cd.ProductId equals p.Id
                          join pc in productCategorys on p.CategoryId equals pc.Id
                          select new
                          {
                              CartId = cd.CardId,
                              ProductId = p.Id,
                              ProductName = p.Name,
                              CategoryName = pc.Name,
                              Quantity = cd.Quantity,
                              UnitName = p.UnitName
                          }).ToList();
            //3. Truy vấn danh sách các mặt hàng cùng với tổng số lượng mua trong tất cả cart, sắp xếp theo tổng số lượng giảm dần            ProductId, ProductName, TotalQuantityInCart
            //var query3 = (from cd in cartDetails
            //              group cd.Quantity by cd.ProductId into g
            //              join p in products on g.Key equals p.Id
            //              orderby g.Sum(x => x.Quantity) descending
            //              select new
            //              {
            //                  ProductId = g.Key,
            //                  ProductName = p.Name,
            //                  TotalQuantityInCart = g.Sum(x => x.Quantity)


            //              })

            var query4 = from cd in cartDetails
                        group cd by cd.ProductId into g
                        join p in products on g.Key equals p.Id
                        orderby g.Sum(x => x.Quantity) descending
                        select new
                        {
                            ProductId = g.Key,
                            ProductName = p.Name,
                            TotalQuantityInCart = g.Sum(x => x.Quantity)
                        };
        }


    }
}
