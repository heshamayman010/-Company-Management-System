// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Entrytoadd } from '../Models/entrytoadd';
// @Component({
//   selector: 'app-edit-dialog',
//   templateUrl: './edit-dialog.component.html',
//   styleUrl: './edit-dialog.component.scss'
// })
// export class EditDialogComponent {

//   // MatDialogRef is used to control the dialog.

//    editedEntry: Entrytoadd = {  fullName: ' ',mobile:'',address:'',email:'',age:0, birth:new Date,jobTitle:'',photo:'',departmentName:''};




//   constructor(
//     public dialogRef: MatDialogRef<EditDialogComponent>,
//   ) {}

//   onEdit(): void {

//     this.dialogRef.close(this.editedEntry);
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

// }
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entrytoadd } from '../Models/entrytoadd';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  editedEntry: Entrytoadd = { fullName: '', mobile: '', address: '', email: '', age: 0, birth: new Date(), jobTitle: '', photo: '', departmentName: '' };

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize editedEntry if existing data is provided
    if (data && data.entryId) {
      // Example: Fetch existing data based on entryId and populate editedEntry
      // this.editedEntry = this.apiService.getEntry(data.entryId); // You need to implement this method in your API service
    }
  }

  onEdit(): void {
    // Validate the editedEntry if needed
    this.dialogRef.close(this.editedEntry);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
