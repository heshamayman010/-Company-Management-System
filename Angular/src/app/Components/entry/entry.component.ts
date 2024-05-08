import { EntryapiService } from '../Services/entryapi.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ientry } from '../Models/Ientry';



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent implements OnInit {

entrylist:Ientry[]=[];


  constructor(private entryapiservice:EntryapiService) {
  
  
}
  ngOnInit(): void {

this.entryapiservice.GetAllentries().subscribe(entlist=>{
this.entrylist=entlist;

});

  }
}
