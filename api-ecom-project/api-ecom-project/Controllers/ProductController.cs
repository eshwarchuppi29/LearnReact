using System.Collections.Generic;
using api_ecom_project.services;
using Microsoft.AspNetCore.Mvc;

namespace api_ecom_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        List<ProductDTO> products = new List<ProductDTO>();

        public ProductController()
        {
            products = new ProductService().GetProduct();
        }

        // GET: api/proudct
        [HttpGet]
        public ActionResult<IEnumerable<ProductDTO>> Get()
        {
            return Ok(products);
        }

        // GET: api/proudct/id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(products.Where(p => p.ProductId == id).FirstOrDefault());
        }
    }
}
