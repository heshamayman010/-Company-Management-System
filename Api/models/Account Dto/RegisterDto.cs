using System.ComponentModel.DataAnnotations;

namespace Ecommerce.Controllers.Dto
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }

        
        [Required,DataType(DataType.EmailAddress)]
        [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", ErrorMessage = "Invalid email address format.")]
        public string Email { get; set; }

        
        [Required,DataType(DataType.Password)]
        public string Password { get; set; }


        [Required, DataType(DataType.Password)]
        [Compare("Password")]
        public string VerifyPassword { get; set; }



    }
}
