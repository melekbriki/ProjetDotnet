using Projet.BLL.Contract;
using Projet.Entities;
using Projet.Services.Interfaces;


namespace Projet.Services
{
    public class SoumissionService : ISoumissionService
    {
        private readonly IGenericBLL<Soumission> _bll;

        public SoumissionService(IGenericBLL<Soumission> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Soumission> GetAll() => _bll.GetMany();

        public Soumission GetById(int id) => _bll.GetById(id);

        public void Add(Soumission soumission)
        {
            soumission.DateSoumission = DateTime.Now;
            _bll.Add(soumission);
        }

        public void Update(Soumission soumission) => _bll.Update(soumission);

        public void Delete(int id)
        {
            var soumission = _bll.GetById(id);
            _bll.Delete(soumission);
        }
    }
}
