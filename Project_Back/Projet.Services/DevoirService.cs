using Projet.Entities;
using Projet.BLL.Contract;
using System.Collections.Generic;

namespace Projet.Services
{
    public class DevoirService
    {
        private readonly IGenericBLL<Devoir> _bll;

        public DevoirService(IGenericBLL<Devoir> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Devoir> GetAll() => _bll.GetMany();

        public Devoir GetById(int id) => _bll.GetById(id);

        public void Add(Devoir devoir) => _bll.Add(devoir);

        public void Update(Devoir devoir) => _bll.Update(devoir);

        public void Delete(int id)
        {
            var devoir = _bll.GetById(id);
            _bll.Delete(devoir);
        }
    }
}
