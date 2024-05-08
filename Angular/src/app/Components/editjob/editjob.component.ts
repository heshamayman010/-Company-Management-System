import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { Jobtoadd } from '../Models/jobtoadd';
import { Job } from '../Models/job';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrl: './editjob.component.scss'
})
export class EditjobComponent {
 job: Job | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  public newjob: Jobtoadd = { title: '', description: '' };
  JobId: number = 0;

  constructor(private service: DepjobService) {}

  searchbyjob(): void {
    this.service.SearchJobById(this.JobId).subscribe(
      (data) => {
        this.job = data;
        this.errorMessage = null;
      },
      (error) => {
        this.job = null;
        this.errorMessage = 'Department not found.';
      }
    );
  }


  updateJob(): void {
    if (this.job) {
     

      this.service.editJob(this.job.id, this.newjob).subscribe(
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
