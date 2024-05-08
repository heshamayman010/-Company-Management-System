import { Component } from '@angular/core';
import { Entrytoadd } from '../Models/entrytoadd';
import { EntryapiService } from '../Services/entryapi.service';

@Component({
  selector: 'app-adding-entry',
  templateUrl: './adding-entry.component.html',
  styleUrl: './adding-entry.component.scss'
})
export class AddingEntryComponent {



 public newEntry: Entrytoadd = {
    fullName: '',
    jobTitle: '',
    departmentName: '',
    mobile: '',
    birth: new Date(),
    photo:'',
    address: '',
    email: '',
    age: 0
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: EntryapiService) {}

  addEntry(): void {
    // Reset error message
    this.errorMessage = '';

    // Perform validation, e.g., check if required fields are filled
    if (!this.newEntry.fullName || !this.newEntry.email || !this.newEntry.mobile) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Perform other validations as needed

    // If no errors, proceed with adding the entry
    this.http.addEntry(this.newEntry).subscribe(
      () => {
  this.successMessage='the entry is added completely'
        this.resetForm();
            this.resetSuccessMessageAfterDelay(10000); // Reset success message after 10 seconds 

      },
      (error) => {
        this.errorMessage = 'Failed to add entry. Please try again.';
      }
    );
  }  

  resetForm(): void {
    this.newEntry = {
      fullName: '',
      jobTitle: '',
      departmentName: '',
      mobile: '',
      photo:'',
      birth: new Date(),
      address: '',
      email: '',
      age: 0
    };
  }

// and to clear the success message after short time 
resetSuccessMessageAfterDelay(delayMs: number): void {
  setTimeout(() => {
    this.successMessage = '';
  }, delayMs);
}



}
