
namespace Tamweely.models.entryDto
{
    public class RetrieveAddressbookDto
    {
        public int Id { get; set; }
        public string FullName { get; set; }

        public string Mobile { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        // here it has different way
        public string? Photo { get; set; }

        public int Age { get; set; }
        public DateTime Birth { get; set; }


        public string JobTitle { get; set; }


        public string DepartmentName { get; set; }





    }
}
