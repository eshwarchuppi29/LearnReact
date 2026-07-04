using api_ecom_project.services;
using ApiEcomProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ApiEcomProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private static readonly Basket Basket = new Basket
        {
            Id = Guid.NewGuid(),
            Items = new List<BasketItem>()
        };

        [HttpGet]
        public ActionResult<Basket> GetBasket()
        {
            return Ok(Basket);
        }

        [HttpPost("{productId}/{quantity}")]
        public ActionResult<Basket> AddToBasket(int productId, int quantity)
        {
            var product = new ProductService()
                .GetProduct()
                .FirstOrDefault(p => p.ProductId == productId);

            if (product == null)
                return NotFound("Product not found.");

            var existingItem = Basket.Items
                .FirstOrDefault(i => i.ProductId == productId);

            if (existingItem != null)
            {
                existingItem.Quantity += quantity;
            }
            else
            {
                Basket.Items.Add(new BasketItem
                {
                    Name = product.Name,
                    Brand = product.Brand,
                    Description = product.Description,
                    Image = product.Image,
                    Price = product.Price,
                    ProductId = product.ProductId,
                    Quantity = quantity,
                    Stock = product.Stock,
                    Type = product.Type
                });
            }

            return Ok(Basket);
        }

        [HttpDelete("{productId}/{quantity}")]
        public IActionResult DeleteBasket(int productId, int quantity)
        {
            var item = Basket.Items.FirstOrDefault(i => i.ProductId == productId);
            if (item == null)
                return NotFound();

            if (quantity >= item.Quantity)
            {
                Basket.Items.Remove(item);
            }
            else
            {
                item.Quantity -= quantity;
            }
            return NoContent();
        }
    }
}