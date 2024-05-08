import { Component } from '@angular/core';
import { Ientry } from '../Models/Ientry';
import { EntryapiService } from '../Services/entryapi.service';

@Component({
  selector: 'app-groupsearch',
  templateUrl: './groupsearch.component.html',
  styleUrl: './groupsearch.component.scss'
})
export class GroupsearchComponent   {
public listrecieved:Ientry[]=[];

  Department: string = '';
  jobtitle: string = '';
  fromDate: Date | null = null; // Use Date type or null for initialization
  toDate: Date | null = null;
constructor(private service:EntryapiService){


}

onInputChange(): void {
    if (this.Department !== '') {
      this.service.SearchByDepartment(this.Department).subscribe(result => this.listrecieved = result);
    } else if (this.jobtitle !== '') {
      this.service.SearchByJob(this.jobtitle).subscribe(result => this.listrecieved = result);
    } else if (this.fromDate && this.toDate) {
      // Perform search within the date range
      this.service.SearchByDateRange(this.fromDate, this.toDate).subscribe(result => this.listrecieved = result);
    } else {
      this.listrecieved = []; // Clear the result if no input value is present
    }
  }
  }




