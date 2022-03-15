import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from '../referee';
import { RefereeService } from '../refereeservice.service';

@Component({
  selector: 'app-addreferee',
  templateUrl: './addreferee.component.html',
  styleUrls: ['./addreferee.component.css']
})
export class AddrefereeComponent implements OnInit {
  referee : Referee = new Referee();
  constructor(private refereeService : RefereeService,
    private router : Router){}


  ngOnInit(): void {
  }
  saveReferee(){
    this.refereeService.createReferee(this.referee).subscribe(data =>{
      console.log(data),
      this.goToRefereeList();
      (error: any) => console.log(error);
    });
  }
  goToRefereeList(){
    this.router.navigate(['/view-referee']);
    }
  onSubmit(){
    
    console.log(this.referee);
    this.saveReferee();
  }
  
}
