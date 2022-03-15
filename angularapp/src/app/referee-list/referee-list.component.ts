import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from '../referee';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RefereeService } from '../refereeservice.service';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.css']
})
export class RefereeListComponent implements OnInit {
  referees! : Referee[];
  p:number=1;

  constructor(private referrService : RefereeService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getReferee();

  }
 private getReferee(){
   this.referrService.getRefereeList().subscribe(data =>{
     this.referees = data;
   })

 }
 updateReferee(id: number){
  this.router.navigate(['update-referee',id]);
  

 }
 deleteReferee(id : number){
  this.referrService.deleteReferee(id).subscribe(data =>{
    console.log(data);
    this.getReferee();
  })
}

}
