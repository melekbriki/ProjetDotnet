using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Entities
{
    public class Inscription
    {
        public int Id { get; set; }
        public DateTime DateInscription { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int CoursId { get; set; }
        public Cours Cours { get; set; }
    }
}
