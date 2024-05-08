using System.ComponentModel.DataAnnotations;

namespace Ecommerce.Controllers.Dto
{
    public class LoginDto
    {


        [Required,DataType(DataType.EmailAddress)]
        [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", ErrorMessage = "Invalid email address format.")]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }




    }
}
