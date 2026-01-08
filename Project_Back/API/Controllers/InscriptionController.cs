using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inscriptions")]
    public class InscriptionController : ControllerBase
    {
        private readonly InscriptionService _service;

        public InscriptionController(InscriptionService service)
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
            var inscription = _service.GetById(id);
            if (inscription == null)
                return NotFound();

            return Ok(inscription);
        }

        [HttpPost]
        public IActionResult Add([FromBody] Inscription inscription)
        {
            _service.Add(inscription);
            return Ok("Inscription ajoutée avec succès");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok("Inscription supprimée avec succès");
        }
    }
}
