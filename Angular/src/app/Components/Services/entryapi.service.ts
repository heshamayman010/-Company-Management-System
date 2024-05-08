import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ientry } from '../Models/Ientry';
import { EntryType } from 'perf_hooks';
import { Entrytoadd } from '../Models/entrytoadd';

@Injectable({
  providedIn: 'root'
})
export class EntryapiService {

  // here we will make all the buisness logic in the service 
  constructor(private httpclient:HttpClient) {

   }

SearchByName(name:string):Observable<Ientry>{

return this.httpclient.get<Ientry>(`http://localhost:30761/api/Entry/searchByName/${name}`);

}

SearchById(id:number):Observable<Ientry>{

return this.httpclient.get<Ientry>(`http://localhost:30761/api/Entry/${id}`);

}



GetAllentries():Observable<Ientry[]>{

return this.httpclient.get<Ientry[]>('http://localhost:30761/api/Entry/GetAllentries');

}



SearchByMobile(mobilenumber:string):Observable<Ientry>{

 return this.httpclient.get<Ientry>(`http://localhost:30761/api/Entry/searchByMobile/${mobilenumber}`);
}




SearchByEmail(email:string):Observable<Ientry>{

 return this.httpclient.get<Ientry>(`http://localhost:30761/api/Entry/searchByEmail/${email}`);
}

SearchByAddress(Address:string):Observable<Ientry>{

 return this.httpclient.get<Ientry>(`http://localhost:30761/api/Entry/searchByAddress/${Address}`);
}


SearchByDepartment(department:string):Observable<Ientry[]>{

 return this.httpclient.get<Ientry[]>(`http://localhost:30761/api/Entry/searchByDepartment/${department}`);
}

SearchByJob(job:string):Observable<Ientry[]>{

 return this.httpclient.get<Ientry[]>(`http://localhost:30761/api/Entry/searchByJob/${job}`);
}


  addEntry(entry: Entrytoadd): Observable<any> {
    return this.httpclient.post<any>('http://localhost:30761/api/Entry/AddEntry', entry);
  }

  deleteEntry(id: number): Observable<any> {
    return this.httpclient.delete<any>(`http://localhost:30761/api/Entry/Delete/${id}`);
  }


  editEntry(id:number,entry:Entrytoadd):Observable<any>{

return this.httpclient.put<any>(`http://localhost:30761/api/Entry/Edit/${id}`,entry)

  }


// SearchByDepartment(department:string):Observable<Ientry[]>{

//  return this.httpclient.get<Ientry[]>(`http://localhost:30761/api/Entry/searchByDepartment/${department}`);
// }


SearchByDateRange(from:Date,to:Date):Observable<Ientry[]>{
  return this.httpclient.get<Ientry[]>(`http://localhost:30761/api/Entry/searchByDate?from=${from}&to=${to}`)

}
// http://localhost:30761/api/Entry/searchByDate?from=1%2F5%2F2002&to=5%2F6%2F2025
}





