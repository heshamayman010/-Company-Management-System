import { Component } from '@angular/core';
import { Department } from '../Models/department';
import { DepjobService } from '../Services/depjob.service';
import { Depttoadd } from '../Models/depttoadd';

@Component({
  selector: 'app-depart-edit',
  templateUrl: './depart-edit.component.html',
  styleUrls: ['./depart-edit.component.scss']
})
export class DepartEditComponent {
  department: Department | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  public newdepartment: Depttoadd = { name: '', description: '' };
  deptid: number = 0;

  constructor(private service: DepjobService) {}

  searchDepartment(): void {
    this.service.SearchById(this.deptid).subscribe(
      (data) => {
        this.department = data;
        this.errorMessage = null;
      },
      (error) => {
        this.department = null;
        this.errorMessage = 'Department not found.';
      }
    );
  }

  updateDepartment(): void {
    if (this.department) {
     

      this.service.editdepartment(this.department.id, this.newdepartment).subscribe(
        () => {
          this.successMessage = 'Department updated successfully.';
          this.errorMessage = null;
        },
        (error) => {
          this.successMessage = null;
          this.errorMessage = 'Failed to update department. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please search for a department first.';
    }
  }
}
