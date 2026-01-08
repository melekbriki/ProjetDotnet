using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services.Interfaces;

[ApiController]
[Route("api/lecons")]
public class LeconController : ControllerBase
{
    private readonly ILeconService _service;

    public LeconController(ILeconService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetAll() => Ok(_service.GetAll());

    [HttpGet("{id}")]
    public IActionResult GetById(int id) => Ok(_service.GetById(id));

    [HttpPost]
    public IActionResult Add(Lecon lecon)
    {
        _service.Add(lecon);
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Lecon lecon)
    {
        lecon.Id = id;
        _service.Update(lecon);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return Ok();
    }
}
