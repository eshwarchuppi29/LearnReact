namespace api_ecom_project.Extensions;

public static class ProductExtension
{
    // Sort
    public static IEnumerable<ProductDTO> ProductBySort(this IEnumerable<ProductDTO> query, string? orderBy)
    {
        switch (orderBy)
        {
            case "price":
                query = query.OrderBy(x => x.Price);
                break;
            case "priceDesc":
                query = query.OrderByDescending(x => x.Price);
                break;
            default:
                query = query.OrderBy(x => x.Name);
                break;
        }
        return query;
    }

    // Search
    public static IEnumerable<ProductDTO> ProductBySearch(this IEnumerable<ProductDTO> query, string? searchTerm)
    {
        if (string.IsNullOrEmpty(searchTerm))
            return query;
        var lowerCaseSearchTerm = searchTerm.ToLower();
        return query.Where(x => x.Name.ToLower().Contains(lowerCaseSearchTerm.Trim()));
    }

    //Filter
    public static IEnumerable<ProductDTO> ProductByFilter(this IEnumerable<ProductDTO> query, string? brands, string? types)
    {
        List<string> lstBrands = new List<string>();
        List<string> lstTypes = new List<string>();

        if (!string.IsNullOrEmpty(brands))
        {
            lstBrands = brands.ToLower().Split(',').ToList();
        }
        if (!string.IsNullOrEmpty(types))
        {
            lstTypes = types.ToLower().Split(',').ToList();
        }
        if (lstBrands.Count != 0)
        {
            query = query.Where(x => lstBrands.Contains(x.Brand.ToLower()));
        }
        if (lstTypes.Count != 0)
        {
            query = query.Where(x => lstTypes.Contains(x.Type.ToLower()));
        }
        return query;
    }
}
