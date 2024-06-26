using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Text;
using Tamweely.models;
using Tamweely.models.Repos;

namespace Tamweely
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddScoped<IEntryRepo, EntryRepository>();


            // to configure the AppdbContext 
            builder.Services.AddDbContext<AppdbContext>(
               options =>
               {
                   // and here we used the lazy loading 

                   options.UseLazyLoadingProxies().UseSqlServer(builder.Configuration["constring"]);


               }

               ); ;

            // to enable the m.ef.identity on the appuser and the dbcontext 
            
            builder.Services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<AppdbContext>();


            // to enable the authentication of the token using the jwt 
            // ___________________________________________________________________________

            builder.Services.AddAuthentication(options =>
            {

                // to check if the token is valid or not 

                options.DefaultAuthenticateScheme=JwtBearerDefaults.AuthenticationScheme;

                //// to check if you are not valid to redirect you again to the login form 
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }


            // and here we will check for the specified token parameters to be able to use it 
            ).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {

                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = builder.Configuration["jwt:audiance"],
                    ValidIssuer = builder.Configuration["jwt:issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["jwt:Secret"]))
                };
            });

            // to modify the cors policy 

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("firstpolicy", x => { x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); });


            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();
            builder.Services.AddSwaggerGen(swagger =>
            {
                swagger.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Tamweely v1",
                    Description = "Tamweely"
                });

                // To Enable authorization using Swagger (JWT)
                swagger.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter 'Bearer' [space] and then your valid token in the text input below.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\""
                });
                swagger.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Tamweely v1");

                });
            }

            app.UseCors("firstpolicy");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}