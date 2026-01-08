using Projet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Services.Interfaces
{
    public interface ISoumissionService
    {
        IEnumerable<Soumission> GetAll();
        Soumission GetById(int id);
        void Add(Soumission soumission);
        void Update(Soumission soumission);
        void Delete(int id);
    }
}
