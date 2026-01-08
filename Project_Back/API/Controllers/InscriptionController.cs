using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inscriptions")]
    public class InscriptionController : ControllerBase
    {
        private readonly IInscriptionService _service;

        public InscriptionController(IInscriptionService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpPost]
        public IActionResult Add(Inscription inscription)
        {
            _service.Add(inscription);
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