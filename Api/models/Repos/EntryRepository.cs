using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Net;
using System.Numerics;
using System.Reflection;
using System.Runtime.Intrinsics.X86;
using System.Xml.Linq;
using Tamweely.models;
using Tamweely.models.entryDto;

namespace Tamweely.models.Repos
{
    public class EntryRepository : IEntryRepo
    {
        private readonly AppdbContext context;

        public EntryRepository(AppdbContext context)
        {
            this.context = context;
        }

        public AddressBookEntry AddEntry(EntryToBeAddedDto entryToBeAddedDto)
        {

            var TheAddressbookEntry = new AddressBookEntry();
            TheAddressbookEntry.FullName=entryToBeAddedDto.FullName;
            TheAddressbookEntry.Address = entryToBeAddedDto.address;
            TheAddressbookEntry.Mobile = entryToBeAddedDto.mobile;
            TheAddressbookEntry.Birth = entryToBeAddedDto.birth;
            TheAddressbookEntry.Email = entryToBeAddedDto.email;
            TheAddressbookEntry.Photo = entryToBeAddedDto.photo;
            TheAddressbookEntry.Age = entryToBeAddedDto.age;

            TheAddressbookEntry.Job = new Job { Title = entryToBeAddedDto.jobTitle };
            TheAddressbookEntry.Department = new Department { Name = entryToBeAddedDto.departmentName };

            context.Add(TheAddressbookEntry);
            context.SaveChanges();
            return TheAddressbookEntry;

        }

        public bool DeleteEntry(int id)
        {

            var tobedeletedone = context.AddressBookEntries.FirstOrDefault(x => x.Id == id);
            if (tobedeletedone != null)
            {
                context.Remove(tobedeletedone);
                context.SaveChanges();

                return true;
            }
            return false;
            
        }

        public void EditEntry(int id, EntryToBeAddedDto entryToBeAddedDto)
        {
            var theoldone = context.AddressBookEntries.FirstOrDefault(x => x.Id == id);
            theoldone.FullName = entryToBeAddedDto.FullName;
            theoldone.Email=entryToBeAddedDto.email;
            theoldone.Department.Name = entryToBeAddedDto.departmentName;
            theoldone.Mobile=entryToBeAddedDto.mobile;
            theoldone.Job.Title= entryToBeAddedDto.jobTitle;
            theoldone.Age= entryToBeAddedDto.age;
            theoldone.Address = entryToBeAddedDto.address;
            theoldone.Birth=entryToBeAddedDto.birth;
            theoldone.Photo=entryToBeAddedDto.photo;
            context.SaveChanges();


        }

        public IEnumerable<AddressBookEntry> GetAllentries()
        {
            var alladdressbooks = context.AddressBookEntries
             .Include(entry => entry.Department)
             .Include(entry => entry.Job)
                .AsEnumerable();
            return alladdressbooks;


        }

        public IEnumerable<AddressBookEntry> SearchForList(Func<AddressBookEntry, bool> predicate)
        {
            //return context.AddressBookEntries.Where(predicate).ToList();

            return context.AddressBookEntries
             .Include(entry => entry.Department)
             .Include(entry => entry.Job)
              .Where(predicate)
                .AsEnumerable();
        }




        public AddressBookEntry SearchForOne(Func<AddressBookEntry, bool> predicate)
        {

            return context.AddressBookEntries.FirstOrDefault(predicate);

        }
    }
}

