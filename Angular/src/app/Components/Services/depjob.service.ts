import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Job } from '../Models/job';
import { Department } from '../Models/department';
import { Depttoadd } from '../Models/depttoadd';
import { Jobtoadd } from '../Models/jobtoadd';
import { ILogin } from '../Models/ilogin';
import { IRegister } from '../Models/iregister';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepjobService {

  constructor(private httpclient:HttpClient) {
  
  
  
  }



deletedepart(idd: number): Observable<any> {
  const url = `http://localhost:30761/api/Department/Delete/${idd}`;
  return this.httpclient.delete<any>(url);
}
  

deletejob(id:number):Observable<any>{

return this.httpclient.delete<any>(`http://localhost:30761/api/Jop/Delete/${id}`);

}


Addjob(myjob:Jobtoadd): Observable<any> {
     return this.httpclient.post<any>('http://localhost:30761/api/Jop', myjob);
   }


   Adddepartment(mydept:Depttoadd): Observable<any> {
     return this.httpclient.post<any>('http://localhost:30761/api/Department', mydept);
   }

SearchById(id:number):Observable<Department>{

return this.httpclient.get<Department>(`http://localhost:30761/api/Department/${id}`);

}
  editdepartment(id:number,dept:Depttoadd):Observable<any>{

return this.httpclient.put<any>(`http://localhost:30761/api/Department/Edit/${id}`,dept)

  }

   
  
  
  editJob(id:number,job:Jobtoadd):Observable<any>{

return this.httpclient.put<any>(`http://localhost:30761/api/Jop/Edit/${id}`,job)
  }
SearchJobById(id:number):Observable<Job>{

return this.httpclient.get<Job>(`http://localhost:30761/api/Jop/${id}`);
}



// to obtain the excel file 

downloadExcelFile(): Observable<HttpResponse<Blob>> {
    return this.httpclient.get('http://localhost:30761/api/Entry/exportToExcel', {
      responseType: 'blob',
      observe: 'response'
    });

}



// and for the login and the register 
  login(loginData: ILogin): Observable<any> {
    return this.httpclient.post<any>('http://localhost:30761/api/Account/Login', loginData).pipe(
        catchError(this.handleError)
      );
      ;


};
register(registerData: IRegister): Observable<any> {
    return this.httpclient.post<any>('http://localhost:30761/api/Account/Register', registerData).pipe(
        catchError(this.handleError)
      );
};
 private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred during registration.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error: ${error.status} - ${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}