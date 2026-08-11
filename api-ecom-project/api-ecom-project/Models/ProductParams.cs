namespace api_ecom_project.Models
{
    public class ProductParams : PaginationPramas
    {
        public string? orderBy { get; set; }
        public string? searchTerm { get; set; }
        public string? brand { get; set; }
        public string? type { get; set; }
    }
}
