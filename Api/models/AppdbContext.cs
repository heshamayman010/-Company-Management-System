using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Tamweely.models
{
    public class AppdbContext:IdentityDbContext<AppUser>
    {

        public AppdbContext()
        {

        }
        public AppdbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<AddressBookEntry> AddressBookEntries { get; set; }

        public DbSet<Job> Jobs { get; set; }
        public DbSet<Department>Departments  { get; set; }




    }
}
