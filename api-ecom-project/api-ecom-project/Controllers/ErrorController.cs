using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ErrorController : ControllerBase
{
    // 200 - OK
    [HttpGet("ok")]
    public IActionResult GetOk()
    {
        return Ok("Request successful.");
    }

    // 204 - No Content
    [HttpGet("nocontent")]
    public IActionResult GetNoContent()
    {
        return NoContent();
    }

    // 400 - Bad Request
    [HttpGet("badrequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("Invalid request.");
    }

    // 401 - Unauthorized
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    // 403 - Forbidden
    [HttpGet("forbidden")]
    public IActionResult GetForbidden()
    {
        return Forbid();
    }

    // 404 - Not Found
    [HttpGet("notfound")]
    public IActionResult GetNotFound()
    {
        return NotFound("Resource not found.");
    }

    // 409 - Conflict
    [HttpGet("conflict")]
    public IActionResult GetConflict()
    {
        return Conflict("Resource already exists.");
    }

    // 422 - Unprocessable Entity
    [HttpGet("unprocessable")]
    public IActionResult GetUnprocessableEntity()
    {
        return UnprocessableEntity("Validation failed.");
    }

    // 500 - Internal Server Error
    [HttpGet("internalservererror")]
    public IActionResult GetInternalServerError()
    {
        return StatusCode(500, "Internal server error.");
    }

    // 502 - Bad Gateway
    [HttpGet("badgateway")]
    public IActionResult GetBadGateway()
    {
        return StatusCode(502, "Bad gateway.");
    }

    // 503 - Service Unavailable
    [HttpGet("serviceunavailable")]
    public IActionResult GetServiceUnavailable()
    {
        return StatusCode(503, "Service unavailable.");
    }
}