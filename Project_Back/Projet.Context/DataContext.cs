using Microsoft.EntityFrameworkCore;
using Projet.Entities;

namespace Projet.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Cours> Cours { get; set; }
        public DbSet<Lecon> Lecons { get; set; }
        public DbSet<Inscription> Inscriptions { get; set; }
        public DbSet<Devoir> Devoirs { get; set; }
        public DbSet<Soumission> Soumissions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // =========================
            // USER -> INSCRIPTIONS
            // =========================
            modelBuilder.Entity<Inscription>()
                .HasOne(i => i.User)
                .WithMany(u => u.Inscriptions)
                .HasForeignKey(i => i.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            // =========================
            // USER -> SOUMISSIONS
            // =========================
            modelBuilder.Entity<Soumission>()
                .HasOne(s => s.User)
                .WithMany(u => u.Soumissions)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            // =========================
            // COURS -> INSCRIPTIONS
            // =========================
            modelBuilder.Entity<Inscription>()
                .HasOne(i => i.Cours)
                .WithMany()
                .HasForeignKey(i => i.CoursId)
                .OnDelete(DeleteBehavior.NoAction);

            // =========================
            // DEVOIR -> SOUMISSIONS
            // =========================
            modelBuilder.Entity<Soumission>()
                .HasOne(s => s.Devoir)
                .WithMany(d => d.Soumissions)
                .HasForeignKey(s => s.DevoirId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
