import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LightchangeDirective } from './Directives/lightchange.directive';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryComponent } from './Components/entry/entry.component';
import { CommonModule } from '@angular/common';
import { SinglesearchComponent } from './Components/singlesearch/singlesearch.component';
import { GroupsearchComponent } from './Components/groupsearch/groupsearch.component';
import { AddingEntryComponent } from './Components/adding-entry/adding-entry.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComponent } from './Components/delete/delete.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './Components/edit-dialog/edit-dialog.component';
import { EditComponent } from './Components/edit/edit.component';
import { DepartAddComponent } from './Components/depart-add/depart-add.component';
import { DepartEditComponent } from './Components/depart-edit/depart-edit.component';
import { DepDeleteComponent } from './Components/dep-delete/dep-delete.component';
import { JobdelComponent } from './Components/jobdel/jobdel.component';
import { RangesearchComponent } from './Components/rangesearch/rangesearch.component';
import { JobaddComponent } from './Components/jobadd/jobadd.component';
import { EditjobComponent } from './Components/editjob/editjob.component';
import { ExcelComponent } from './Components/excel/excel.component';
import { AccountComponent } from './Components/account/account.component';
import { RegisterComponent } from './Components/register/register.component';
import { DeptSearchComponent } from './Components/dept-search/dept-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LightchangeDirective,
    NotfoundComponent,
    HomeComponent,
    MainlayoutComponent,
 EntryComponent, SinglesearchComponent, GroupsearchComponent, 
    AddingEntryComponent, DeleteComponent, EditDialogComponent, EditComponent, 
    DepartAddComponent, DepartEditComponent, DepDeleteComponent, JobdelComponent, RangesearchComponent, JobaddComponent, EditjobComponent, ExcelComponent, AccountComponent, RegisterComponent, DeptSearchComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,CommonModule,  MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,BrowserAnimationsModule,MatDialogModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
