using Projet.Context;
using Projet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.DAL.Repos
{
    public class CoursRepository : GenericRepository<Cours>
    {
        public CoursRepository(DataContext context) : base(context)
        {
        }
    }
}
