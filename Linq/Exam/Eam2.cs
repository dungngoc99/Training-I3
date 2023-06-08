using System;
using System.Collections.Generic;
using System.Linq;

namespace Exam2
{
    public class User
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class Restaurant
    {
        public int ResId { get; set; }
        public string ResName { get; set; }
        public string Image { get; set; }
        public string Desc { get; set; }
    }
    public class RateRes
    {
        public int UserId { get; set; }
        public int ResId { get; set; }
        public int Amount { get; set; }
        public DateTime DateRate { get; set; }
    }
    public class LikeRes
    {
        public int UserId { get; set; }
        public int ResId { get; set; }
        public DateTime DateLike { get; set; }
    }
    public class Order
    {
        public int UserId { get; set; }
        public int FoodId { get; set; }
        public int Amount { get; set; }
        public string Code { get; set; }
        public string ArrSubId { get; set; }
    }
    public class Food
    {
        public int FoodId { get; set; }
        public string FoodName { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public string Desc { get; set; }
        public int TypeId { get; set; }
    }
    public class SubFood
    {
        public int SubId { get; set; }
        public string SubName { get; set; }
        public float SubPrice { get; set; }
        public int FoodId { get; set; }
    }
    public class FoodType
    {
        public int TypeId { get; set; }
        public string TypeName { get; set; }
    }

    class Program
    {
        public void Main(string[] args)
        {
            var users = new List<User>();
            var restaurants = new List<Restaurant>();
            var ratesRes = new List<RateRes>();
            var likesRes = new List<LikeRes>();
            var foods = new List<Food>();
            var orders = new List<Order>();
            var subfoods = new List<SubFood>();
            var foodtype = new List<FoodType>();
            // 1.Tìm 5 người đã like nhà hàng nhiều nhất          

            var top5LikesUser = likesRes
                .GroupBy(x => x.UserId)
                .OrderByDescending(a => a.Count())
                .Select(g => new
                {
                    UserId = g.Key,
                    count = g.Count()
                })
                .GroupBy(x => x.count)
                .Take(5);

            //2.Tìm 2 nhà hàng có lượt like nhiều nhất.     

            var top2ResWasLiked = likesRes
               .GroupBy(x => x.ResId)
               .OrderByDescending(a => a.Count())
               .Select(g => new
               {
                   ResId = g.Key,
                   count = g.Count()
               })
               .GroupBy(x => x.count)
               .Take(2);



            //3.Tìm người đã đặt hàng nhiều nhất.
            var userOrdersMost = orders
                .GroupBy(x => x.UserId)
                .OrderByDescending(a => a.Count())
                .Select(g => new
                {
                    UserId = g.Key,
                    Count = g.Count(),
                })
                .GroupBy(x => x.Count)
                .Take(1);

            //4.Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng).

            var inactiveUser = users
                .Where(u => !orders.Any(o => o.UserId == u.UserId) &&
                            !likesRes.Any(l => l.UserId == u.UserId) &&
                            !ratesRes.Any(r => r.UserId == u.UserId)
                            )
                .Select(g => new
                {
                    UserId = g.UserId,
                    FullName = g.FullName
                }).ToList();



            //5.Tính trung bình sub_food 

            var Avg = subfoods.Average(a => a.SubPrice);

        }
    }
}

