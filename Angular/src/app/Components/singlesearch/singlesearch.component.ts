import { Component } from '@angular/core';
import { EntryapiService } from '../Services/entryapi.service';
import { FormsModule } from '@angular/forms';

// Define the Ientry interface with the missing properties
interface Ientry {
  id: number;
  fullName: string;
  mobile: string;
  address: string;
  email: string;
  photo: string;
  birth: Date;
}

@Component({
  selector: 'app-singlesearch',
  templateUrl: './singlesearch.component.html',
  styleUrls: ['./singlesearch.component.scss']
})
export class SinglesearchComponent {

  public thefoundentry: Ientry | undefined = undefined;
  fullname: string = '';
  id: string = '';
  address: string = '';
  email: string = '';
  mobile:string='';
  jobtitle:string='';
  

  constructor(private service: EntryapiService) {}

  onInputChange(): void {
    // Check which input field has a value and perform corresponding search
    if (this.fullname !== '') {
      this.service.SearchByName(this.fullname).subscribe(result => this.thefoundentry = result);
    } else if (this.id !== '') {
      this.service.SearchById(+this.id).subscribe(result => this.thefoundentry = result);
    } else if (this.address !== '') {
      this.service.SearchByAddress(this.address).subscribe(result => this.thefoundentry = result);
    } else if (this.email !== '') {
      this.service.SearchByEmail(this.email).subscribe(result => this.thefoundentry = result);
    } 
         else if (this.mobile !== '') {
      this.service.SearchByMobile(this.mobile).subscribe(result => this.thefoundentry = result);}

    else {
      this.thefoundentry = undefined; // Clear the result if no input value is present
    }
  }
}
