using Projet.Entities;
using Projet.BLL.Contract;
using System;
using System.Collections.Generic;

namespace Projet.Services
{
    public class InscriptionService
    {
        private readonly IGenericBLL<Inscription> _bll;

        public InscriptionService(IGenericBLL<Inscription> bll)
        {
            _bll = bll;
        }

        public IEnumerable<Inscription> GetAll()
        {
            return _bll.GetMany();
        }

        public Inscription GetById(int id)
        {
            return _bll.GetById(id);
        }

        public void Add(Inscription inscription)
        {
            inscription.DateInscription = DateTime.Now;
            _bll.Add(inscription);
        }

        public void Delete(int id)
        {
            var inscription = _bll.GetById(id);
            if (inscription != null)
            {
                _bll.Delete(inscription);
            }
        }
    }
}
