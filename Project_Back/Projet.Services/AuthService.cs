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
        // 1. Cherche si le rôle ADMIN existe
        var adminRole = _context.Set<Role>()
            .FirstOrDefault(r => r.Name == "ADMIN");

        // 2. S'il n'existe pas, on le crée
        if (adminRole == null)
        {
            adminRole = new Role { Name = "ADMIN" };
            _context.Set<Role>().Add(adminRole);
            _context.SaveChanges(); // Sauvegarde pour avoir l'ID
        }

        // 3. Crée l'utilisateur avec le rôle ADMIN
        var user = new User
        {
            NomUser = dto.NomUser,
            EmailUser = dto.EmailUser,
            MotDePasse = dto.MotDePasse,
            RoleId = adminRole.Id
        };

        _context.Users.Add(user);
        _context.SaveChanges();
    }
}
