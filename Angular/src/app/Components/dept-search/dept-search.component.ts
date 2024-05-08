import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { Department } from '../Models/department';
import { Job } from '../Models/job';

@Component({
  selector: 'app-dept-search',
  templateUrl: './dept-search.component.html',
  styleUrl: './dept-search.component.scss'
})
export class DeptSearchComponent {

deptid:string='';
jobjd:string='';
foundDepartment:Department |undefined = undefined;
foundJob:Job|undefined = undefined;
constructor(private service:DepjobService) {}
  
onInputChange(): void {
this.foundDepartment=undefined;
this.foundJob=undefined;
//Check which input field has a value and perform corresponding search
    if (this.deptid !== '') {
      this.service.SearchById(+this.deptid).subscribe(result => this.foundDepartment = result);
    } else if (this.jobjd !== '') {
      this.service.SearchJobById(+this.jobjd).subscribe(result => this.foundJob = result);
    }
 else {
      this.foundDepartment = undefined; // Clear the result if no input value is present
      this.foundJob=undefined;
    }
}
}





