using Projet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Services.Interfaces
{
    public interface IInscriptionService
    {
        IEnumerable<Inscription> GetAll();
        Inscription GetById(int id);
        void Add(Inscription inscription);
        void Delete(int id);
    }
}