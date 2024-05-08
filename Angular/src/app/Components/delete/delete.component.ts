import { Component } from '@angular/core';
import { EntryapiService } from '../Services/entryapi.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  entryId: number | undefined;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private entryService: EntryapiService) { }

deleteEntry(): void {
  this.errorMessage = '';

  if (!this.entryId) {
    this.errorMessage = 'Please enter the ID of the entry you want to delete.';
    return;
  }

  // Ask for confirmation using an alert dialog
  const confirmed = confirm('Are you sure you want to delete this entry?');

  if (confirmed) {
    // Call the deleteEntry method from the service
    this.entryService.deleteEntry(this.entryId).subscribe(
      () => {
        this.successMessage = 'Entry deleted successfully.';
        this.entryId = undefined;
      },
      (error) => {
        this.errorMessage = 'Failed to delete entry. Please try again.';
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