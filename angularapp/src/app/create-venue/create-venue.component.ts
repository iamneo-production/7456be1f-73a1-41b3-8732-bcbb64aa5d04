import { Component, OnInit } from '@angular/core';
import { Venue } from '../venue';
import { VenueService } from '../venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.css']
})
export class CreateVenueComponent implements OnInit {
  venue: Venue = new Venue();

  constructor(private venueService: VenueService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveVenue(){
    this.venueService.createVenue(this.venue).subscribe(data => {
      console.log(data);
      this.goToVenueList();
    },
    error => console.log(error));
  }

  goToVenueList(){
      this.router.navigate(['/venues']);
  }

  onSubmit(){
    console.log(this.venue);
    this.saveVenue();
    
  }

}
