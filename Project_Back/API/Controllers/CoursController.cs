using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cours")]
    public class CoursController : ControllerBase
    {
        private readonly CoursService _service;

        public CoursController(CoursService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpGet("{id}")]
        public IActionResult GetById(int id) => Ok(_service.GetById(id));

        [HttpPost]
        public IActionResult Add(Cours cours)
        {
            _service.Add(cours);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Cours cours)
        {
            cours.Id = id;
            _service.Update(cours);
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
