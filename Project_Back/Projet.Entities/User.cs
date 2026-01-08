

namespace Projet.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string NomUser { get; set; }
        public string EmailUser { get; set; }
        public string MotDePasse { get; set; }

        public int RoleId { get; set; }      // 👈 IMPORTANT
        public Role Role { get; set; }

        public ICollection<Cours> Cours { get; set; }
        public ICollection<Inscription> Inscriptions { get; set; }
        public ICollection<Soumission> Soumissions { get; set; }
    }

}
