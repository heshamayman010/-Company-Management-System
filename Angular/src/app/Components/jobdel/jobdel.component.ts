import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';

@Component({
  selector: 'app-jobdel',
  templateUrl: './jobdel.component.html',
  styleUrl: './jobdel.component.scss'
})
export class JobdelComponent {
  jobId: number | undefined;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private entryService: DepjobService) { }

deleteJob(): void {
  this.errorMessage = '';

  if (!this.jobId) {
    this.errorMessage = 'Please enter the ID of the Job you want to delete.';
    return;
  }

  // Ask for confirmation using an alert dialog
  const confirmed = confirm('Are you sure you want to delete this entry?');

  if (confirmed) {
    // Call the deleteEntry method from the service
    this.entryService.deletejob(this.jobId).subscribe(
      () => {
        this.successMessage = 'Job deleted successfully.';
        this.jobId = undefined;
      },
      (error) => {
        this.errorMessage = 'Failed to delete Job. Please try again.';
      }
    );
  } else {
    // User canceled the delete operation
    this.errorMessage = 'Delete operation canceled.';
  }
}

  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }


}
