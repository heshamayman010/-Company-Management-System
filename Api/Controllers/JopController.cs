using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tamweely.models;

namespace Tamweely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JopController : ControllerBase
    {
        private readonly AppdbContext context;

        public JopController(AppdbContext context)
        {
            this.context = context;
        }

        // only ======>> Add /Edit/Delete 

        [HttpPost]
        public IActionResult Add([FromBody] Job jobtobeadded)
        {
            if (jobtobeadded == null)
            {
                return BadRequest("enter a valid job ");
            }
            else
            {
                if (ModelState.IsValid)
                {


                    context.Jobs.Add(jobtobeadded);
                    context.SaveChanges();
                    var url = Url.Link("GetJobbyid", new { id = jobtobeadded.Id });
                    return Created(url, jobtobeadded);
                }
                else
                {

                    return BadRequest(ModelState);

                }
            }
        }



        [HttpGet("{id:int}", Name = "GetJobbyid")]
        public IActionResult Getbyid(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }
            else
            {
                var thejobfound = context.Jobs.FirstOrDefault(c => c.Id == id);
                if (thejobfound == null)
                {

                    return BadRequest("this Job not found");
                }
                else
                {
                    return Ok(thejobfound);
                }
            }

        }




        [HttpPut("Edit/{id}")]
        public IActionResult Edit([FromBody] Job jobtobeadded, int id)
        {

            if (id == 0)
            {
                return BadRequest("cant use this id ");
            }
            else
            {
                var oldone = context.Jobs.FirstOrDefault(a => a.Id == id);
                if (oldone == null)
                {

                    return BadRequest("this job cant be found ");
                }
                else
                {
                    oldone.Description = jobtobeadded.Description;
                    oldone.Title = jobtobeadded.Title;
                    context.SaveChanges();
                    return Ok("updated correctly");
                }
            }

        }




        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var tobedeleted = context.Jobs.FirstOrDefault(c => c.Id == id);

            if (tobedeleted == null)
            {

                return BadRequest();
            }
            else
            {

                context.Jobs.Remove(tobedeleted);
                context.SaveChanges();
                return Ok();
            }
        }

    }
}



//}

