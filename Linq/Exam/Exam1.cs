using System;
using System.Collections.Generic;
using System.Linq;

namespace Exam1
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

            //3. Truy vấn danh sách các mặt hàng cùng với tổng số lượng mua trong tất cả cart, sắp xếp theo tổng số lượng giảm dần ProductId, ProductName, TotalQuantityInCart


            //var query4 = (from cd in cartDetails
            //              group cd by cd.ProductId into g
            //              join p in products on g.Key equals p.Id
            //              select new
            //              {
            //                  productid = g.Key,
            //                  productname = p.Name,
            //                  TotalQuantityInCart = g.Sum(x => x.Quantity)
            //              })
            //             .OrderBy(x => x.TotalQuantityInCart);
            //var Sort = from a in query4
            //           orderby a.TotalQuantityInCart descending
            //           select a;

            //var Sort2 = query4.OrderByDescending(x => x.TotalQuantityInCart);


            //query4.OrderBy();
            //query4.OrderByDescending()
            //query4.Where(x => x.TotalQuantityInCart > 0) == filter
            //query4.Select(x => x.productname); == map
            //query4.Sum() 
            //query4.Max()
            //query4.GroupBy(x => x.productname)
            //query4.Any() // == [].length > 0
            //query4.Any(x => x.productname == "DTXXXX")  == some
            //query4.All(x => x.TotalQuantityInCart > 5)  == every
            //query4.Concat(query4) -> nối data
            //query4.Distinct() -> gom data
            //query4.First() -> phải có phần tử mới dùng đc
            //query4.FirstOrDefault() -> nếu ko có phần tử nào thì trả về defautl
            //query4.ToList() = array



            var query3 = from cd in cartDetails
                         group cd by cd.ProductId into g
                         join p in products on g.Key equals p.Id
                         let total = g.Sum(x => x.Quantity)
                         orderby total descending
                         select new
                         {
                             ProductId = g.Key,
                             ProductName = p.Name,
                             TotalQuantityInCart = total
                         };
            //4.Truy vấn danh sách cart và tổng tiền của từng cart, sắp xếp theo số tiền giảm dần CartId, TotalPrice
            var query4 = from cd in cartDetails
                         join p in products on cd.ProductId equals p.Id
                         group new
                         {
                             Detail = cd,
                             Product = p,
                         }
                         by cd.CardId into g
                         let total = g.Sum(a => a.Detail.Quantity * a.Product.UnitPrice)
                         orderby total descending
                         select new
                         {
                             CartId = g.Key,
                             TotalPrice = total
                         };
            //5. Truy vấn danh sách mặt hàng cùng số lượng cao nhất có trong tất cả cart ProductId, ProductName, MaxQuantityInCart
            var query5 = from cd in cartDetails
                         group cd by cd.ProductId into g
                         join p in products on g.Key equals p.Id
                         select new
                         {
                             ProductId = g.Key,
                             ProductName = p.Name,
                             MaxQuantityInCart = g.Max(x => x.Quantity)
                         };
            //6. Truy vấn danh sách category cùng với số lượng sản phẩm, sắp xếp theo số lượng giảm dần CategoryId, CategoryName, NumberOfProduct
            var query6 = from p in products
                         group p by p.CategoryId into g
                         join pc in productCategorys on g.Key equals pc.Id
                         let count = g.Count()
                         orderby count descending
                         select new
                         {
                             CategoryId = g.Key,
                             CategoryName = pc.Name,
                             NumberOfProduct = count,
                         };

            //7. Truy vấn danh sách category cùng tổng tiền hàng trong tất cả Cart, sắp xếp theo tiền hàng giảm dần CategoryId, CategoryName, TotalPrice
            var query7 = from cd in cartDetails
                         join p in products on cd.ProductId equals p.Id
                         join pc in productCategorys on p.CategoryId equals pc.Id
                         group new
                         {
                             Detail = cd,
                             Product = p,
                         } by pc into g
                         let total = g.Sum(a => a.Detail.Quantity * a.Product.UnitPrice)
                         orderby total descending
                         select new
                         {
                             CategoryId = g.Key.Id,
                             CategoryName = g.Key.Name,
                             TotalPrice = total,
                         };

            //8. Số lượng Cart phát sinh theo ngày Date, NumberOfCart
            var query8 = from c in carts
                         group c by c.CreateDate.Date into g
                         select new
                         {
                             Date = g.Key,
                             NumberOfCart = g.Count()
                         };
            //9.Tổng tiền trong Cart theo ngày Date, TotalPrice
            var query9 = from c in carts
                         join cd in cartDetails on c.Id equals cd.CardId
                         join p in products on cd.ProductId equals p.Id
                         group new
                         {
                             Detail = cd,
                             Product = p,
                         }
                         by c.CreateDate.Date into g
                         let total = g.Sum(x => x.Detail.Quantity * x.Product.UnitPrice)
                         select new
                         {
                             Date = g.Key,
                             TotalPrice = total,
                         };
        }
    }
}