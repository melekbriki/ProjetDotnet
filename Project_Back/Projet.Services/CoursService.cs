using Projet.Entities;
using Projet.BLL.Contract;
using Projet.BLL;
using System.Collections.Generic;

namespace Projet.Services
{
    public class CoursService
    {
        private readonly IGenericBLL<Cours> _bll;

        public CoursService(IGenericBLL<Cours> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Cours> GetAll() => _bll.GetMany();

        public Cours GetById(int id) => _bll.GetById(id);

        public void Add(Cours cours) => _bll.Add(cours);

        public void Update(Cours cours) => _bll.Update(cours);

        public void Delete(int id)
        {
            var cours = _bll.GetById(id);
            _bll.Delete(cours);
        }
    }
}
