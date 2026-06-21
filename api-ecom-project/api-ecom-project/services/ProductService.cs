namespace api_ecom_project.services
{
    public class ProductService
    {
        public List<ProductDTO> GetProduct()
        {
            List<ProductDTO> products = new List<ProductDTO>
                {
                    new ProductDTO
                    {
                        ProductId = 1,
                        Name = "iPhone 15",
                        Description = "Apple smartphone with A16 Bionic chip and advanced camera.",
                        Image = "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
                        Price = 79999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 2,
                        Name = "Samsung Galaxy S24",
                        Description = "Samsung flagship Android smartphone with AMOLED display.",
                        Image = "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
                        Price = 74999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 3,
                        Name = "Sony WH-1000XM5",
                        Description = "Premium wireless noise cancelling headphones.",
                        Image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                        Price = 29999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 4,
                        Name = "Apple Watch Series 9",
                        Description = "Smartwatch with fitness tracking and health monitoring.",
                        Image = "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
                        Price = 45999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 5,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },new ProductDTO
                    {
                        ProductId = 6,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 7,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 8,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 9,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },
                    new ProductDTO
                    {
                        ProductId = 10,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },new ProductDTO
                    {
                        ProductId = 11,
                        Name = "Dell XPS 15",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    },new ProductDTO
                    {
                        ProductId = 12,
                        Name = "Dell XPS 154",
                        Description = "High-performance laptop for developers and creators.",
                        Image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                        Price = 149999,
                        Brand="Apple",
                        Type="Mobile",
                        Stock=150
                    }
                };
            return products;
        }
    }
}
