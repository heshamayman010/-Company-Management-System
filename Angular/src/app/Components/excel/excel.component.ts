import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.scss'
})
export class ExcelComponent {
  constructor(private service:DepjobService) {
    
  }
 downloadExcel(): void {
    this.service.downloadExcelFile().subscribe((response: HttpResponse<Blob>) => {
      const blob = new Blob([response.body as BlobPart], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'AllEntries.xlsx'; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
}}
