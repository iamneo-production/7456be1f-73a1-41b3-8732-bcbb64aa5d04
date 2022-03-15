import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Referee } from '../referee';
import { RefereeService } from '../refereeservice.service';

@Component({
  selector: 'app-update-referee',
  templateUrl: './update-referee.component.html',
  styleUrls: ['./update-referee.component.css']
})
export class UpdateRefereeComponent implements OnInit {
  id!: number;
  referee: Referee = new Referee();
  constructor(private refereeService : RefereeService,
    private route : ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.refereeService.getRefereeById(this.id).subscribe(data =>{

      this.referee = data;
      ( error: any) => console.log(error);
  })
  }
  onSubmit(){
    this.refereeService.updateReferee(this.id,this.referee).subscribe(data =>{
      this.goToRefereeList();
      (      error: any) => console.log(error);
      
    })
  }
  goToRefereeList() {
    this.router.navigate(['/view-referee']);
  }

}
