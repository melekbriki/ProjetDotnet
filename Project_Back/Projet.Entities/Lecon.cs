
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Entities
{
    public class Lecon
    {
        public int Id { get; set; }
        public string Titre { get; set; }
        public string Contenu { get; set; }
        public int UserId { get; set; }   // 👈 Associer un User


        public int CoursId { get; set; }
        public Cours Cours { get; set; }

        public ResourceType Resource { get; set; }

    }
}

