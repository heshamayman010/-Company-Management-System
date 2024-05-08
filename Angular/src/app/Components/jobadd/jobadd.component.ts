import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { Jobtoadd } from '../Models/jobtoadd';

@Component({
  selector: 'app-jobadd',
  templateUrl: './jobadd.component.html',
  styleUrl: './jobadd.component.scss'
})
export class JobaddComponent {
constructor(private myservice: DepjobService) {}


jobtobeadded:Jobtoadd={title:'',description:''}
 addit(): void {
    this.myservice.Addjob(this.jobtobeadded).subscribe(
      () => {
        console.log('Job added successfully.');
        // Optionally, you can reset the form after successful addition
        this.resetForm();
      },
      (error) => {
        console.error('Failed to add Job:', error);
      }
    );
  }

  resetForm(): void {
    this.jobtobeadded = { title: '', description: '' };
  }
}
