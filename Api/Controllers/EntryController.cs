using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using Tamweely.models.entryDto;
using Tamweely.models.Repos;
using static System.Reflection.Metadata.BlobBuilder;

namespace Tamweely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        private readonly IEntryRepo myrepo;

        public EntryController(IEntryRepo myrepo)
        {
            this.myrepo = myrepo;
        }



        [HttpPut("Edit/{id}")]
        public IActionResult Edit(int id, [FromBody] EntryToBeAddedDto entryToBeAddedDto)
        {
            if (ModelState.IsValid)
            {
                // Call the EditEntry method in your repository or service
                myrepo.EditEntry(id, entryToBeAddedDto);

                // Return a successful response
                return Ok("Entry edited successfully");
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [HttpPost("AddEntry")]
        public IActionResult Addentry([FromBody] EntryToBeAddedDto entryToBeAddedDto)
        {
            if (ModelState.IsValid)
            {

                var myresult = myrepo.AddEntry(entryToBeAddedDto);

                var url = Url.Link("Getbyid", new { id = myresult.Id });
                return Created(url, entryToBeAddedDto);
            }
            return BadRequest(ModelState);



        }


        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {

            var isdeleted = myrepo.DeleteEntry(id);
            if (isdeleted == true)
            {
                return Ok(); // the data is deleted 

            }
            else
            {

                return BadRequest(); // the data is not deleted and the status code will be 400
            }



        }


        [HttpGet("{id:int}", Name = "Getbyid")]
        public IActionResult SearchById(int id)
        {
            var result = myrepo.SearchForOne(entry => entry.Id == id);

            if (result != null)
            {

                var retrievdto = new RetrieveAddressbookDto();
                retrievdto.Email = result.Email;
                retrievdto.Id = result.Id;
                retrievdto.Address = result.Address;
                retrievdto.FullName = result.FullName;
                retrievdto.Birth = result.Birth;
                retrievdto.Photo = result.Photo;
                retrievdto.Age = result.Age;
                retrievdto.DepartmentName = result.Department.Name;
                retrievdto.JobTitle = result.Job.Title;
                retrievdto.Mobile = result.Mobile;


                return Ok(retrievdto);



            }
            else
            {
                return NotFound();  // status code 404
            }
        }



        [HttpGet("searchByName/{fullname}")]
        public IActionResult SearchByName(string fullname)
        {
            var result = myrepo.SearchForOne(entry => entry.FullName == fullname);

            if (result != null)
            {

                var retrievdto = new RetrieveAddressbookDto();
                retrievdto.Email = result.Email;
                retrievdto.Id = result.Id;
                retrievdto.Address = result.Address;
                retrievdto.FullName = result.FullName;
                retrievdto.Birth = result.Birth;
                retrievdto.Photo = result.Photo;
                retrievdto.Age = result.Age;
                retrievdto.DepartmentName = result.Department.Name;
                retrievdto.JobTitle = result.Job.Title;
                retrievdto.Mobile = result.Mobile;


                return Ok(retrievdto);

            }
            else
            {
                return NotFound();  // status code 404
            }
        }


        [HttpGet("searchByMobile/{mobileNumber}")]
        public IActionResult SearchByMobile(string mobileNumber)
        {
            var result = myrepo.SearchForOne(entry => entry.Mobile == mobileNumber);
            if (result != null)
            {

                var retrievdto = new RetrieveAddressbookDto();
                retrievdto.Id = result.Id;
                retrievdto.Email = result.Email;
                retrievdto.Address = result.Address;
                retrievdto.FullName = result.FullName;
                retrievdto.Birth = result.Birth;
                retrievdto.Photo = result.Photo;
                retrievdto.Age = result.Age;
                retrievdto.DepartmentName = result.Department.Name;
                retrievdto.JobTitle = result.Job.Title;
                retrievdto.Mobile = result.Mobile;


                return Ok(retrievdto);

            }
            else
            {
                return NotFound();  // status code 404
            }
        }


        [HttpGet("searchByEmail/{EmailAddress}")]
        public IActionResult SearchByEmail(string EmailAddress)
        {
            var result = myrepo.SearchForOne(entry => entry.Email == EmailAddress);

            if (result != null)
            {

                var retrievdto = new RetrieveAddressbookDto();
                retrievdto.Id=result.Id;
                retrievdto.Email = result.Email;
                retrievdto.Address = result.Address;
                retrievdto.FullName = result.FullName;
                retrievdto.Birth = result.Birth;
                retrievdto.Photo = result.Photo;
                retrievdto.Age = result.Age;
                retrievdto.DepartmentName = result.Department.Name;
                retrievdto.JobTitle = result.Job.Title;
                retrievdto.Mobile = result.Mobile;


                return Ok(retrievdto);

            }
            else
            {
                return NotFound();  // status code 404
            }
        }


        [HttpGet("searchByAddress/{Addresss}")]
        public IActionResult SearchByAddress(string Addresss)
        {
            var result = myrepo.SearchForOne(entry => entry.Address == Addresss);

            if (result != null)
            {

                var retrievdto = new RetrieveAddressbookDto();
                    retrievdto.Id=result.Id;
                retrievdto.Email = result.Email;
                retrievdto.Address = result.Address;
                retrievdto.FullName = result.FullName;
                retrievdto.Birth = result.Birth;
                retrievdto.Photo = result.Photo;
                retrievdto.Age = result.Age;
                retrievdto.DepartmentName = result.Department.Name;
                retrievdto.JobTitle = result.Job.Title;
                retrievdto.Mobile = result.Mobile;


                return Ok(retrievdto);

            }
            else
            {
                return NotFound();  // status code 404
            }
        }




        [HttpGet("searchByDate")]
        public IActionResult SearchByDate(DateTime from, DateTime to)
        {
            var entries = myrepo.SearchForList(entry => entry.Birth >= from && entry.Birth <= to);

            if (entries != null && entries.Any())
            {
                var mylistofretrieve = new List<RetrieveAddressbookDto>();

                foreach (var entry in entries)
                {

                    mylistofretrieve.Add(new RetrieveAddressbookDto
                    {Id = entry.Id,
                        Email = entry.Email,
                        Address = entry.Address,
                        FullName = entry.FullName,
                        Birth = entry.Birth,
                        Photo = entry.Photo,
                        Age = entry.Age,
                        DepartmentName = entry.Department.Name,
                        JobTitle = entry.Job.Title,
                        Mobile = entry.Mobile,

                    });

                }

                return Ok(mylistofretrieve);
            }
            else
            {
                return NotFound();
            }
        }


        [HttpGet("searchByDepartment/{departmentName}")]
        public IActionResult SearchByDepartment(string departmentName)
        {
            var entries = myrepo.SearchForList(entry => entry.Department.Name == departmentName);

            if (entries != null && entries.Any())
            {
                var mylistofretrieve = new List<RetrieveAddressbookDto>();

                foreach (var entry in entries)
                {
                    mylistofretrieve.Add(new RetrieveAddressbookDto
                    {Id = entry.Id,
                        Email = entry.Email,
                        Address = entry.Address,
                        FullName = entry.FullName,
                        Birth = entry.Birth,
                        Photo = entry.Photo,
                        Age = entry.Age,
                        DepartmentName = entry.Department.Name,
                        JobTitle = entry.Job.Title,
                        Mobile = entry.Mobile,
                    });
                }


                return Ok(mylistofretrieve);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("searchByJob/{jobTitle}")]
        public IActionResult SearchByJob(string jobTitle)
        {
            var entries = myrepo.SearchForList(entry => entry.Job.Title == jobTitle);


            if (entries != null && entries.Any())
            {
                var mylistofretrieve = new List<RetrieveAddressbookDto>();

                foreach (var entry in entries)
                {
                    mylistofretrieve.Add(new RetrieveAddressbookDto
                    {Id = entry.Id,
                        Email = entry.Email,
                        Address = entry.Address,
                        FullName = entry.FullName,
                        Birth = entry.Birth,
                        Photo = entry.Photo,
                        Age = entry.Age,
                        DepartmentName = entry.Department.Name,
                        JobTitle = entry.Job.Title,
                        Mobile = entry.Mobile,
                    });
                }


                return Ok(mylistofretrieve);
            }
            else
            {
                return NotFound();
            }
        }


        [HttpGet("GetAllentries")]
        public IActionResult GetAllentries()
        {
            var entries = myrepo.GetAllentries();


            if (entries != null && entries.Any())
            {
                var mylistofretrieve = new List<RetrieveAddressbookDto>();

                foreach (var entry in entries)
                {
                    mylistofretrieve.Add(new RetrieveAddressbookDto
                    {   Id= entry.Id,
                        Email = entry.Email,
                        Address = entry.Address,
                        FullName = entry.FullName,
                        Birth = entry.Birth,
                        Photo = entry.Photo,
                        Age = entry.Age,
                        DepartmentName = entry.Department.Name,
                        JobTitle = entry.Job.Title,
                        Mobile = entry.Mobile,
                    });
                }


                return Ok(mylistofretrieve);
            }
            else
            {
                return NotFound();
            }
        }


       // now to export all the data to excel file


       [HttpGet("exportToExcel")]
        public IActionResult ExportToExcel()
        {
            var entries = myrepo.GetAllentries();

            if (entries != null && entries.Any())
            {
                var mylistofretrieve = new List<RetrieveAddressbookDto>();
                foreach (var entry in entries)
                {
                    mylistofretrieve.Add(new RetrieveAddressbookDto
                    {
                        Id= entry.Id,
                        Email = entry.Email,
                        Address = entry.Address,
                        FullName = entry.FullName,
                        Birth = entry.Birth,
                        Photo = entry.Photo,
                        Age = entry.Age,
                        DepartmentName = entry.Department.Name,
                        JobTitle = entry.Job.Title,
                        Mobile = entry.Mobile,
                    });
                }

                using (var package = new ExcelPackage())
                {
                    var worksheet = package.Workbook.Worksheets.Add("Address Book");

                    // Add headers
                    worksheet.Cells[1, 1].Value = "Full Name";
                    worksheet.Cells[1, 2].Value = "Job Title";
                    worksheet.Cells[1, 3].Value = "Department";
                    worksheet.Cells[1, 4].Value = "Email";
                    worksheet.Cells[1, 5].Value = "Mobile";
                    worksheet.Cells[1, 6].Value = "Birth";
                    worksheet.Cells[1, 7].Value = "Address";
                    worksheet.Cells[1, 8].Value = "Photo";
                    worksheet.Cells[1, 9].Value = "Age";

                    // Add data rows
                    int row = 2;
                    foreach (var item in mylistofretrieve)
                    {
                        worksheet.Cells[row, 1].Value = item.FullName;
                        worksheet.Cells[row, 2].Value = item.JobTitle;
                        worksheet.Cells[row, 3].Value = item.DepartmentName;
                        worksheet.Cells[row, 4].Value = item.Email;
                        worksheet.Cells[row, 5].Value = item.Mobile;
                        worksheet.Cells[row, 6].Value = item.Birth;
                        worksheet.Cells[row, 7].Value = item.Address;
                        worksheet.Cells[row, 8].Value = item.Photo;
                        worksheet.Cells[row, 9].Value = item.Age;
                        row++;
                    }

                    // Convert the Excel package to a byte array
                    var excelBytes = package.GetAsByteArray();

                    // Return the Excel file as a FileStreamResult
                    return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "AddressBook.xlsx");
                }
            }
            else
            {
                return NotFound();
            }






        }
    }
}









