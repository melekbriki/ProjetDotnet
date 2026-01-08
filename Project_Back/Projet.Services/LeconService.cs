using Projet.BLL.Contract;
using Projet.Entities;
using System.Collections.Generic;

namespace Projet.Services
{
    public class LeconService
    {
        private readonly IGenericBLL<Lecon> _bll;

        public LeconService(IGenericBLL<Lecon> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Lecon> GetAll()
        {
            return _bll.GetMany();
        }

        public Lecon GetById(int id)
        {
            return _bll.GetById(id);
        }

        public void Add(Lecon lecon)
        {
            _bll.Add(lecon);
        }

        public void Update(Lecon lecon)
        {
            _bll.Update(lecon);
        }

        public void Delete(int id)
        {
            var lecon = _bll.GetById(id);
            if (lecon != null)
            {
                _bll.Delete(lecon);
            }
        }
    }
}
