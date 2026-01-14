using Microsoft.AspNetCore.Mvc;
using Projet.Entities.DTO;
using Projet.Services.DTO;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AuthService _service;

    public AuthController(AuthService service)
    {
        _service = service;
    }

    // -------------------
    // REGISTER
    // -------------------
    [HttpPost("register")]
    public IActionResult Register(RegisterDto dto)
    {
        _service.Register(dto);
        return Ok("Compte créé avec succès !");
    }

    // -------------------
    // LOGIN
    // -------------------
    [HttpPost("login")]
    public IActionResult Login(LoginDto dto)
    {
        try
        {
            var user = _service.Login(dto);

            // Tu peux renvoyer juste un message ou les infos de l'utilisateur
            return Ok(new
            {
                message = "Connexion réussie !",
                userId = user.Id,
                nom = user.NomUser,
                email = user.EmailUser
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
}
