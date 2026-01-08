using Projet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projet.Services.Interfaces
{
    public interface ILeconService
    {
        IEnumerable<Lecon> GetAll();
        Lecon GetById(int id);
        void Add(Lecon lecon);
        void Update(Lecon lecon);
        void Delete(int id);
    }
}