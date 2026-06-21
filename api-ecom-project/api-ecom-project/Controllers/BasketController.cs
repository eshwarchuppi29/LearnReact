using api_ecom_project.services;
using ApiEcomProject.Models;
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
        private static readonly List<Basket> Baskets = new List<Basket>();

        [HttpGet]
        public ActionResult<List<Basket>> GetBaskets()
        {
            return Ok(Baskets);
        }

        [HttpGet("{id}")]
        public ActionResult<Basket> GetBasket(Guid id)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == id);
            if (basket == null) return NotFound();
            return Ok(basket);
        }

        [HttpPost("{productId}/{quantity}")]
        public ActionResult<Basket> CreateBasket([FromUri] int productId, int quantity)
        {
            var productDet = new ProductService().GetProduct().Where(p => p.ProductId == productId).FirstOrDefault();
            Basket basket = new Basket();
            basket.Id = Guid.NewGuid();
            basket.Items = new List<BasketItem>(){new BasketItem(){
                    Name=productDet.Name,
                    Brand=productDet.Brand,
                    Description=productDet.Description,
                    Image=productDet.Image,
                    Price=productDet.Price,
                    ProductId= productDet.ProductId,
                    Quantity=quantity,
                    Stock= productDet.Stock,
                    Type= productDet.Type
                }};
            Baskets.Add(basket);
            return CreatedAtAction(nameof(GetBasket), new { id = basket.Id }, basket);
        }

        [HttpPost]
        public ActionResult<Basket> CreateBasket([FromBody] Basket basket)
        {
            if (basket == null)
            {
                return BadRequest();
            }

            basket.Id = Guid.NewGuid();
            basket.Items = basket.Items ?? new List<BasketItem>();
            Baskets.Add(basket);
            return CreatedAtAction(nameof(GetBasket), new { id = basket.Id }, basket);
        }

        [HttpPut("{id}")]
        public ActionResult<Basket> UpdateBasket(Guid id, [FromBody] Basket updatedBasket)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == id);
            if (basket == null) return NotFound();
            if (updatedBasket == null) return BadRequest();

            basket.Items = updatedBasket.Items ?? new List<BasketItem>();
            return Ok(basket);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBasket(Guid id)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == id);
            if (basket == null) return NotFound();
            Baskets.Remove(basket);
            return NoContent();
        }

        [HttpGet("{basketId}/items")]
        public ActionResult<List<BasketItem>> GetBasketItems(Guid basketId)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null) return NotFound();
            return Ok(basket.Items);
        }

        [HttpGet("{basketId}/items/{itemId}")]
        public ActionResult<BasketItem> GetBasketItem(Guid basketId, int itemId)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null) return NotFound();

            var item = basket.Items.FirstOrDefault(i => i.Id == itemId);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost("{basketId}/items")]
        public ActionResult<BasketItem> CreateBasketItem(Guid basketId, [FromBody] BasketItem item)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null) return NotFound();
            if (item == null) return BadRequest();

            item.Id = basket.Items.Any() ? basket.Items.Max(i => i.Id) + 1 : 1;
            basket.Items.Add(item);
            return CreatedAtAction(nameof(GetBasketItem), new { basketId = basket.Id, itemId = item.Id }, item);
        }

        [HttpPut("{basketId}/items/{itemId}")]
        public ActionResult<BasketItem> UpdateBasketItem(Guid basketId, int itemId, [FromBody] BasketItem updatedItem)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null) return NotFound();
            if (updatedItem == null) return BadRequest();

            var item = basket.Items.FirstOrDefault(i => i.Id == itemId);
            if (item == null) return NotFound();

            item.ProductId = updatedItem.ProductId;
            item.Quantity = updatedItem.Quantity;
            item.Price = updatedItem.Price;
            return Ok(item);
        }

        [HttpDelete("{basketId}/items/{itemId}")]
        public IActionResult DeleteBasketItem(Guid basketId, int itemId)
        {
            var basket = Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null) return NotFound();

            var item = basket.Items.FirstOrDefault(i => i.Id == itemId);
            if (item == null) return NotFound();

            basket.Items.Remove(item);
            return NoContent();
        }
    }

    internal class FromUriAttribute : Attribute
    {
    }
}
