
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { EntryComponent } from './Components/entry/entry.component';
import { SinglesearchComponent } from './Components/singlesearch/singlesearch.component';
import { GroupsearchComponent } from './Components/groupsearch/groupsearch.component';
import { AddingEntryComponent } from './Components/adding-entry/adding-entry.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { DepDeleteComponent } from './Components/dep-delete/dep-delete.component';
import { JobdelComponent } from './Components/jobdel/jobdel.component';
import { EditComponent } from './Components/edit/edit.component';
import { DepartAddComponent } from './Components/depart-add/depart-add.component';
import { JobaddComponent } from './Components/jobadd/jobadd.component';
import { DepartEditComponent } from './Components/depart-edit/depart-edit.component';
import { EditjobComponent } from './Components/editjob/editjob.component';
import { ExcelComponent } from './Components/excel/excel.component';
import { register } from 'module';
import { RegisterComponent } from './Components/register/register.component';
import { DeptSearchComponent } from './Components/dept-search/dept-search.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login if no route specified

  // Login route
  { path: 'login', component: AccountComponent },
  {path:'Register',component:RegisterComponent},

  // Main layout routes
  {
    path: 'main',
    component: MainlayoutComponent,
    children: [
      { path: 'entry', component: EntryComponent },
      { path: 'singlesearch', component: SinglesearchComponent },
      { path: 'groubsearch', component: GroupsearchComponent },
      { path: 'edit', component: EditComponent },
      { path: 'add', component: AddingEntryComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'deptdelete', component: DepDeleteComponent },
      { path: 'deljob', component: JobdelComponent },
      { path: 'adddept', component: DepartAddComponent },
      { path: 'addjob', component: JobaddComponent },
      { path: 'editDept', component: DepartEditComponent },
      { path: 'editjob', component: EditjobComponent },
      { path: 'home', component: HomeComponent },
      { path: 'download', component: ExcelComponent },
      {path:'departmentandjobsearch',component:DeptSearchComponent}
    ],
  },

  // Not found route
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




