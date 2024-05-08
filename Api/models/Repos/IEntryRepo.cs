using Tamweely.models.entryDto;

namespace Tamweely.models.Repos
{
    public interface IEntryRepo
    {

        //crud operations

        AddressBookEntry AddEntry(EntryToBeAddedDto entryToBeAddedDto);

        bool DeleteEntry(int id);

        void EditEntry(int id, EntryToBeAddedDto entryToBeAddedDto);


        // // to make it search with all fields 
        // AddressBookEntry SearchByName(string fullname);
        // AddressBookEntry SearchByMobileNumber(string mobileNumber);
        // AddressBookEntry SearchByEmail(string email);
        // AddressBookEntry SearchByAddress(string address);

        // // the following is considerd to return list of entries 
        //List<AddressBookEntry> SearchByBirthDateRange(DateTime startDate, DateTime endDate);
        //List<AddressBookEntry> SearchByDepartment(string DepartmentName);
        //List<AddressBookEntry> SearchByJob(string JobTitle);


        IEnumerable<AddressBookEntry> GetAllentries();
        // and we can use the generic one to make it easier and not repeat the same code 
        AddressBookEntry SearchForOne(Func<AddressBookEntry, bool> predicate);
        IEnumerable<AddressBookEntry> SearchForList(Func<AddressBookEntry, bool> predicate);



        // and the following is to export it to exel file 



    }
}



