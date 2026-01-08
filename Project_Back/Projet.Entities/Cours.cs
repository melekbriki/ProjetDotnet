using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Entities
{
    public class Cours
    {
        public int Id { get; set; }
        public string Titre { get; set; }
        public string Description { get; set; }

        public int EnseignantId { get; set; }
        public User Enseignant { get; set; }

        public ICollection<Lecon> Lecons { get; set; }
    }
}
