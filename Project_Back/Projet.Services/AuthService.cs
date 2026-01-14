using Projet.Context;
using Projet.Entities;
using Projet.Entities.DTO;
using Projet.Services.DTO;

public class AuthService
{
    private readonly DataContext _context;

    public AuthService(DataContext context)
    {
        _context = context;
    }
    // LOGIN
    public User Login(LoginDto dto)
    {
        // Cherche l'utilisateur par email
        var user = _context.Users
            .FirstOrDefault(u => u.EmailUser == dto.EmailUser);

        if (user == null)
            throw new Exception("Email incorrect ou utilisateur inexistant.");

        // Vérifie le mot de passe
        if (user.MotDePasse != dto.MotDePasse)
            throw new Exception("Mot de passe incorrect.");

        // Si tout est ok, retourne l'utilisateur
        return user;
    }



public void Register(RegisterDto dto)
    {
        var roleUser = _context.Set<Role>()
            .FirstOrDefault(r => r.Name == "STUDENT");

        if (roleUser == null)
            throw new Exception("Rôle USER inexistant");

        var user = new User
        {
            NomUser = dto.NomUser,
            EmailUser = dto.EmailUser,
            MotDePasse = dto.MotDePasse,
            RoleId = roleUser.Id   // ✅ ICI est la solution
        };

        _context.Users.Add(user);
        _context.SaveChanges();
    }
}
