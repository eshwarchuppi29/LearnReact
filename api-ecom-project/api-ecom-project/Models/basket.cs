namespace ApiEcomProject.Models
{
    public class Basket
    {
        public Guid Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
    public class BasketItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
        public int Stock { get; set; }
    }
}
