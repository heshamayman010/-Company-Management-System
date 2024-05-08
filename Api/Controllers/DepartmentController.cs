using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tamweely.models;

namespace Tamweely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly AppdbContext context;

        public DepartmentController(AppdbContext context)
        {
            this.context = context;
        }

        // only ======>> Add /Edit/Delete 

        [HttpPost]
        public IActionResult Add([FromBody] Department departmenttobeadded)
        {
            if (departmenttobeadded == null)
            {
                return BadRequest("enter a valid department ");
            }
            else
            {
                if (ModelState.IsValid)
                {


                    context.Departments.Add(departmenttobeadded);
                    context.SaveChanges();
                    var url = Url.Link("GetDepartementbyid", new { id = departmenttobeadded.Id });
                    return Created(url, departmenttobeadded);
                }
                else
                {

                    return BadRequest(ModelState);

                }
            }
        }


        [HttpGet("{id:int}", Name = "GetDepartementbyid")]
        public IActionResult Getbyid(int id)
            {
            if (id == 0)
            {
                return NotFound();
            }
            else
            {
                var thedepartmentfound = context.Departments.FirstOrDefault(c => c.Id == id);
                if (thedepartmentfound == null)
                {

                    return BadRequest("this department not found");
                }
                else
                {
                    return Ok(thedepartmentfound);
                }
            }

            }




        [HttpPut("Edit/{id}")]
        public IActionResult Edit([FromBody] Department departmenttobeadded,int id)
        {

            if (id == 0)
            {
                return BadRequest("cant use this id ");
            }
            else
            {
                var oldone = context.Departments.FirstOrDefault(a => a.Id == id);
                if (oldone == null)
                {

                    return BadRequest("this department cant be found ");
                }
                else
                {
                    oldone.Description = departmenttobeadded.Description;
                    oldone.Name = departmenttobeadded.Name;
                    context.SaveChanges();
                    return Ok("updated correctly");
                }
            }

        }




        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
           var tobedeleted=context.Departments.FirstOrDefault(c=>c.Id==id);
            
            if(tobedeleted == null)
            {

                return BadRequest();
            }
            else
            {

                context.Departments.Remove(tobedeleted);
                context.SaveChanges();
                return Ok();
            }
        }

    }
}

