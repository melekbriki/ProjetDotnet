using Projet.BLL.Contract;
using Projet.BLL;
using Projet.Context;
using Projet.DAL;
using Projet.DAL.Contracts;
using Projet.Entities;
using Projet.Services.Interfaces;
using Projet.DAL.Repos;
using Microsoft.EntityFrameworkCore;
using Projet.Services;

var builder = WebApplication.CreateBuilder(args);

// --------------------
// Connexion DB
// --------------------
var Cnx = builder.Configuration.GetConnectionString("ConnectionString");
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(Cnx, b => b.MigrationsAssembly("API")));

// --------------------
// Controllers
// --------------------
builder.Services.AddControllers();

// --------------------
// UnitOfWork
// --------------------
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

// --------------------
// User & Client
// --------------------
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped(typeof(IGenericBLL<User>), typeof(GenericBLL<User>));
builder.Services.AddScoped<IRepository<User>, UserRepository>();
builder.Services.AddScoped<IRepository<Client>, ClientRepository>();



// Repositories
builder.Services.AddScoped<IRepository<User>, UserRepository>();
builder.Services.AddScoped<IRepository<Client>, ClientRepository>();
builder.Services.AddScoped<IRepository<Cours>, CoursRepository>();
builder.Services.AddScoped<IRepository<Soumission>, SoumissionRepository>();
builder.Services.AddScoped<IRepository<Inscription>, InscriptionRepository>();

// UnitOfWork
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


// --------------------
// Cours
// --------------------
builder.Services.AddScoped(typeof(IGenericBLL<Cours>), typeof(GenericBLL<Cours>));
builder.Services.AddScoped<IRepository<Cours>, CoursRepository>();

// --------------------
// Soumission
// --------------------
builder.Services.AddScoped<ISoumissionService, SoumissionService>();
builder.Services.AddScoped(typeof(IGenericBLL<Soumission>), typeof(GenericBLL<Soumission>));
builder.Services.AddScoped<IRepository<Soumission>, SoumissionRepository>();



builder.Services.AddScoped<CoursService>();
builder.Services.AddScoped(typeof(IGenericBLL<Cours>), typeof(GenericBLL<Cours>));
builder.Services.AddScoped<IRepository<Cours>, CoursRepository>();


// --------------------
// Inscription
// --------------------
builder.Services.AddScoped(typeof(IGenericBLL<Inscription>), typeof(GenericBLL<Inscription>));
builder.Services.AddScoped<IRepository<Inscription>, InscriptionRepository>();


builder.Services.AddScoped<DevoirService>();
builder.Services.AddScoped(typeof(IGenericBLL<Devoir>), typeof(GenericBLL<Devoir>));
builder.Services.AddScoped<IRepository<Devoir>, DevoirRepository>();


// --------------------
// Swagger
// --------------------
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Projet DOTNET" });
});

// --------------------
// Pipeline
// --------------------
var app = builder.Build();

app.UseAuthorization();
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V2");
});

app.Run();
