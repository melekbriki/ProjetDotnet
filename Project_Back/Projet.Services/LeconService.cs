using Projet.BLL.Contract;
using Projet.Entities;
using Projet.Services.Interfaces;

namespace Projet.Services
{
    public class LeconService : ILeconService
    {
        private readonly IGenericBLL<Lecon> _bll;

        public LeconService(IGenericBLL<Lecon> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Lecon> GetAll() => _bll.GetMany();

        public Lecon GetById(int id) => _bll.GetById(id);

        public void Add(Lecon lecon) => _bll.Add(lecon);

        public void Update(Lecon lecon) => _bll.Update(lecon);

        public void Delete(int id)
        {
            var lecon = _bll.GetById(id);
            _bll.Delete(lecon);
        }
    }
}
