using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Entities
{
    public class Soumission
    {
        public int Id { get; set; }
        public DateTime DateSoumission { get; set; }
        public float Note { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int DevoirId { get; set; }
        public Devoir Devoir { get; set; }
    }
}

