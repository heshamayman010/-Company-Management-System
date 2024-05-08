import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { Depttoadd } from '../Models/depttoadd';

@Component({
  selector: 'app-depart-add',
  templateUrl: './depart-add.component.html',
  styleUrl: './depart-add.component.scss'
})
export class DepartAddComponent {
constructor(private myservice: DepjobService) {}
departmenttobeadded:Depttoadd={name:'',description:''}
 addit(): void {
    this.myservice.Adddepartment(this.departmenttobeadded).subscribe(
      () => {
        console.log('Department added successfully.');
        // Optionally, you can reset the form after successful addition
        this.resetForm();
      },
      (error) => {
        console.error('Failed to add department:', error);
      }
    );
  }

  resetForm(): void {
    this.departmenttobeadded = { name: '', description: '' };
  }
}


