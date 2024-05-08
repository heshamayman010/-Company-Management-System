// import { Component } from '@angular/core';
// import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrl: './edit.component.scss'
// })
// export class EditComponent {
// constructor(private dialog: MatDialog) {}

//   openEditDialog(): void {
//     const dialogRef = this.dialog.open(EditDialogComponent, {
//       width: '400px',
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         console.log('Edited entry:', result);
//         // Call your API service to update the entry with the result data
//       }
//     });
//   }
// }
import { Component } from '@angular/core';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Entrytoadd } from '../Models/entrytoadd';

import { EntryapiService } from '../Services/entryapi.service';
import { Ientry } from '../Models/Ientry';
import { error } from 'console';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  entryId: number | null = null; // Initialize entryId as null

  myentrfound:Ientry|null=null;
  constructor(private dialog: MatDialog, private apiService: EntryapiService)
   {}

openEditDialog(): void {
  if (!this.entryId) {
    console.error('Entry ID is required.');
    return;
  }

  this.apiService.SearchById(this.entryId).subscribe(
    () => {
      // Entry exists, open the dialog
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '400px',
        data: { entryId: this.entryId } // Pass entryId to the dialog
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Edited entry:', result);
          this.updateEntry(result);
        }
      });
    },
    (error) => {
      console.log('The entry was not found.');
    }
  );
}

  updateEntry(entry: Entrytoadd): void {
    if (this.entryId) {
      this.apiService.editEntry(this.entryId, entry).subscribe(response => {
        console.log('API Response:', response);
        // Handle success or error responses as needed
      }, error => {
        console.error('API Error:', error);
        // Handle API error responses
      });
    } else {
      console.error('Entry ID is required.');
      // Handle the case where entry ID is not available
    }
  }}
