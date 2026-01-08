using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/devoirs")]
    public class DevoirController : ControllerBase
    {
        private readonly DevoirService _service;

        public DevoirController(DevoirService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpGet("{id}")]
        public IActionResult GetById(int id) => Ok(_service.GetById(id));

        [HttpPost]
        public IActionResult Add(Devoir devoir)
        {
            _service.Add(devoir);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Devoir devoir)
        {
            devoir.Id = id;
            _service.Update(devoir);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
