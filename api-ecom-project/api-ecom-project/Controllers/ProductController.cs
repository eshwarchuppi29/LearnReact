using System.Collections.Generic;
using api_ecom_project.services;
using Microsoft.AspNetCore.Mvc;
using api_ecom_project.Extensions;
using api_ecom_project.Models;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace api_ecom_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        IEnumerable<ProductDTO> products = new List<ProductDTO>();

        public ProductController()
        {
            products = new ProductService().GetProduct();
        }

        // GET: api/proudct
        [HttpGet]
        public IActionResult Get([FromQuery] ProductParams productParams)
        {
            var query = products
            .ProductBySort(productParams.orderBy)
            .ProductBySearch(productParams.searchTerm)
            .ProductByFilter(productParams.brand, productParams.type)
            .AsQueryable();

            var prod = PagedList<ProductDTO>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

            Response.AddPagenationHeader(prod.metadata);
            return Ok(prod);
        }

        // GET: api/proudct/id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(products.Where(p => p.ProductId == id).FirstOrDefault());
        }

        [HttpGet("Filters")]
        public IActionResult GetProductFiltersData()
        {
            var brands = products.Select(b => b.Brand).Distinct().ToList();
            var types = products.Select(t => t.Type).Distinct().ToList();
            return Ok(new { brands, types });
        }
    }
}
