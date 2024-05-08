using System.ComponentModel.DataAnnotations;

namespace Tamweely.models
{
    public class Department
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public string? Description { get; set; }
    
        
    }
}
