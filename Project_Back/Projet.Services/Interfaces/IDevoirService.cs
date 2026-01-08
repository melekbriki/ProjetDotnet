using Projet.Entities;
using System.Collections.Generic;

namespace Projet.Services.Interfaces
{
 public interface IDevoirService
 {
 IEnumerable<Devoir> GetAll();
 Devoir GetById(int id);
 void Add(Devoir devoir);
 void Update(Devoir devoir);
 void Delete(int id);
 }
}
