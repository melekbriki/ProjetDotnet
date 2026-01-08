using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/soumissions")]
    public class SoumissionController : ControllerBase
    {
        private readonly ISoumissionService _service;

        public SoumissionController(ISoumissionService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpPost]
        public IActionResult Add(Soumission soumission)
        {
            _service.Add(soumission);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Soumission soumission)
        {
            soumission.Id = id;
            _service.Update(soumission);
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