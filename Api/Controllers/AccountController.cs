using Ecommerce.Controllers.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Tamweely.models;

namespace Tamweely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    // make check for the email confirm using whaterver 
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> manger;
        private readonly IConfiguration settingfolder;

        public AccountController(UserManager<AppUser> manger, IConfiguration settingfolder)
        {
            this.manger = manger;
            this.settingfolder = settingfolder;
        }

        // the task of  register

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDto user)
        {


            if (ModelState.IsValid)
            {
                AppUser appuser = new AppUser();

                appuser.UserName = user.UserName;
                appuser.Email = user.Email;                
                appuser.PasswordHash = user.Password;
                IdentityResult usercreeated = await manger.CreateAsync(appuser, user.Password);

                if (usercreeated.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(usercreeated.Errors.FirstOrDefault());
                }
            }

            return BadRequest(ModelState);
        }


        // the task of login 

        // to login to the account and create token for the users 
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto user)
        {
            if (ModelState.IsValid)
            {
                AppUser userfound = await manger.FindByEmailAsync(user.Email);

                
                if (userfound != null)
                {
                // here the user is found and we will check for his password 

                    bool PasswordIsCorrect = await manger.CheckPasswordAsync(userfound, user.Password);
                    if (PasswordIsCorrect == true)
                    {

                        List<Claim> myclaims = new List<Claim>();

                        // this for giving unique id for the token using Guid

                        Claim second = new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString());
                        Claim first = new Claim(ClaimTypes.Email,user.Email);
                        myclaims.Add(second);
                        myclaims.Add(first);

                        // for creating the key to be used and i used SymmetricKey

                        SecurityKey mykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(settingfolder["jwt:Secret"]));
                        SigningCredentials mysignincredintial = new SigningCredentials(mykey, SecurityAlgorithms.HmacSha256);
                        // 
                        //__________________________________________________________________________________________________________

                        // for creating the token   

                        JwtSecurityToken mytoken = new JwtSecurityToken(
                            issuer: settingfolder["jwt:issuer"],
                            audience: settingfolder["jwt:audiance"], expires: DateTime.Now.AddDays(1),

                            claims: myclaims,
                            signingCredentials: mysignincredintial
                            );
                       
                        // and to use the token we created before 
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(mytoken),
                            expiration = mytoken.ValidTo
                        }

                            );
                    }
                    else
                    {
                        return BadRequest();
                    }
                }
                else
                {
                    return BadRequest();
                }
            }
            return BadRequest(ModelState);
        }

    }
}
