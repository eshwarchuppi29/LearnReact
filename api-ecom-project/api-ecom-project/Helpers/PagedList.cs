using Microsoft.AspNetCore.Mvc.RazorPages;

public class PagedList<T> : List<T>
{
    public PaginationMetadata metadata;

    public PagedList(List<T> item, int count, int pageNumber, int pageSize)
    {
        metadata = new PaginationMetadata
        {
            TotalCount = count,
            CurrentPage = pageNumber,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling(count / (double)pageSize)
        };

        AddRange(item);
    }

    public static PagedList<T> ToPagedList(IEnumerable<T> query, int pageNumber, int pageSize)
    {
        var count = query.Count();

        var items = query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }
}