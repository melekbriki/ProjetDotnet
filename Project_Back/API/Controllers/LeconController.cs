using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/lecons")]
    public class LeconController : ControllerBase
    {
        private readonly LeconService _service;

        public LeconController(LeconService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var lecon = _service.GetById(id);
            if (lecon == null)
                return NotFound();

            return Ok(lecon);
        }

        [HttpPost]
        public IActionResult Add([FromBody] Lecon lecon)
        {
            _service.Add(lecon);
            return Ok("Leçon ajoutée avec succès");
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Lecon lecon)
        {
            lecon.Id = id;
            _service.Update(lecon);
            return Ok("Leçon modifiée avec succès");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok("Leçon supprimée avec succès");
        }
    }
}
