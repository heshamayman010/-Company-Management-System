import { Component } from '@angular/core';
import { EntryapiService } from '../Services/entryapi.service';
import { DepjobService } from '../Services/depjob.service';

@Component({
  selector: 'app-dep-delete',
  templateUrl: './dep-delete.component.html',
  styleUrl: './dep-delete.component.scss'
})
export class DepDeleteComponent {
 deptId: number | undefined;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private apiService: DepjobService) {}

  deleteDepartment(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.deptId) {
      this.errorMessage = 'Please enter the ID of the department you want to delete.';
      return;
    }

    const confirmed = confirm('Are you sure you want to delete this department?');

    if (confirmed) {
      this.apiService.deletedepart(this.deptId).subscribe(
        () => {
          this.successMessage = 'Department deleted successfully.';
          this.deptId = undefined;
        },
        (error) => {
          this.errorMessage = `Failed to delete department}`;
        }
      );
    } else {
      this.errorMessage = 'Delete operation canceled.';
    }
  }

  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
