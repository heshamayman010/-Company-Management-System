using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tamweely.models
{
    public class Job
    {
        public int Id { get; set; }

        public string Title { get; set; }
        
        public string? Description { get; set; }



    }
}


