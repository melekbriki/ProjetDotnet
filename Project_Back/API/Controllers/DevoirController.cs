using Microsoft.AspNetCore.Mvc;
using Projet.Entities;
using Projet.Services;
using Projet.Services.DTO;
using System.Collections.Generic;

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

        // =========================
        // GET ALL
        // =========================
        [HttpGet]
        public IActionResult GetAll()
        {
            var devoirs = _service.GetAll();
            return Ok(devoirs);
        }

        // =========================
        // GET BY ID
        // =========================
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var devoir = _service.GetById(id);
            if (devoir == null)
                return NotFound();

            return Ok(devoir);
        }

        // =========================
        // POST (CREATE) - DTO
        // =========================
        [HttpPost]
        public IActionResult Add([FromBody] CreateDevoirDto dto)
        {
            var devoir = new Devoir
            {
                Titre = dto.Titre,
                Description = dto.Description,
                DateDevoir = dto.DateDevoir,
                Soumissions = new List<Soumission>()
            };

            _service.Add(devoir);

            return CreatedAtAction(
                nameof(GetById),
                new { id = devoir.Id },
                devoir
            );
        }

        // =========================
        // PUT (UPDATE) - DTO
        // =========================
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] UpdateDevoirDto dto)
        {
            var existing = _service.GetById(id);
            if (existing == null)
                return NotFound();

            existing.Titre = dto.Titre;
            existing.Description = dto.Description;
            existing.DateDevoir = dto.DateDevoir;

            _service.Update(existing);

            return Ok(existing);
        }

        // =========================
        // DELETE
        // =========================
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existing = _service.GetById(id);
            if (existing == null)
                return NotFound();

            _service.Delete(id);
            return NoContent();
        }
    }
}
