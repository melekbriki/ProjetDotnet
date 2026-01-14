using Projet.Context;
using Projet.DAL;
using Projet.Entities;

public class RoleRepository : GenericRepository<Role>
{
    public RoleRepository(DataContext context) : base(context)
    {
    }
}
