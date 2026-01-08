using Projet.BLL.Contract;
using Projet.Entities;
using Projet.Services.Interfaces;

namespace Projet.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericBLL<User> _bll;

        public UserService(IGenericBLL<User> bll)
        {
            _bll = bll;
        }

        public IEnumerable<User> GetAll() => _bll.GetMany();

        public User GetById(int id) => _bll.GetById(id);

        public void Add(User user) => _bll.Add(user);

        public void Update(User user) => _bll.Update(user);

        public void Delete(int id)
        {
            var user = _bll.GetById(id);
            _bll.Delete(user);
        }
    }
}
