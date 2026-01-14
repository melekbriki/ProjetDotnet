using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Services.DTO
{
    public class CreateDevoirDto
    {
        public string Titre { get; set; }
        public string? Description { get; set; }
        public DateTime DateDevoir { get; set; }
    }

}
