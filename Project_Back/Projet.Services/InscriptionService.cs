using Projet.Entities;
using Projet.Services.Interfaces;
using Projet.BLL.Contract;
using Projet.BLL;
using System;
using System.Collections.Generic;

namespace Projet.Services
{
    public class InscriptionService : IInscriptionService
    {
        private readonly IGenericBLL<Inscription> _bll;

        public InscriptionService(IGenericBLL<Inscription> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Inscription> GetAll() => _bll.GetMany();

        public Inscription GetById(int id) => _bll.GetById(id);

        public void Add(Inscription inscription)
        {
            inscription.DateInscription = DateTime.Now;
            _bll.Add(inscription);
        }

        public void Delete(int id)
        {
            var inscription = _bll.GetById(id);
            _bll.Delete(inscription);
        }
    }
}
