using Projet.DAL.Contracts;
using Projet.Entities;

namespace Projet.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly Dictionary<Type, IRepository> _repositories;

        public UnitOfWork(
            IRepository<User> userRepo,
            IRepository<Client> clientRepo,
            IRepository<Cours> coursRepo,
            IRepository<Soumission> soumissionRepo,
            IRepository<Inscription> inscriptionRepo,
            IRepository<Devoir> devoirRepo,
            IRepository<Lecon> leconRepo
            )

        {
            _repositories = new Dictionary<Type, IRepository>();

            _repositories.Add(typeof(User), userRepo);
            _repositories.Add(typeof(Client), clientRepo);
            _repositories.Add(typeof(Cours), coursRepo);
            _repositories.Add(typeof(Soumission), soumissionRepo);
            _repositories.Add(typeof(Inscription), inscriptionRepo);
            _repositories.Add(typeof(Devoir), devoirRepo);
            _repositories.Add(typeof(Lecon), leconRepo);

        }

        public IRepository GetRepository<T>() where T : class
        {
            return _repositories[typeof(T)];
        }
    }
}