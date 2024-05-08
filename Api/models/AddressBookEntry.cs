using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace Tamweely.models
{
    public class AddressBookEntry
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


        public virtual Job Job { get; set; }


        public virtual Department Department { get; set; }
        



    }
}





