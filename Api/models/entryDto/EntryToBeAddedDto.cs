using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Reflection;
using Tamweely.models;

namespace Tamweely.models.entryDto
{
    public class EntryToBeAddedDto
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", ErrorMessage = "Invalid email address format.")]
        public string email { get; set; }

        [Required]
        [RegularExpression(@"^01[0-9]{9}$",ErrorMessage ="please enter a valid for number in egypt ")]
        public string mobile { get; set; }
      
        [Required]
        public DateTime birth { get; set; }
       
        [Required]
        public string address { get; set; }

        public string? photo { get; set; }

        [Required]

        public int age { get; set; }

        [Required]

        public string departmentName { get; set; }

        [Required]

        public string jobTitle { get; set; }
    
    }
}





