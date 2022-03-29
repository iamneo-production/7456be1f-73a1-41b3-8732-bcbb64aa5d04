import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from '../venue'
import { VenueService } from '../venue.service'

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  venues: Venue[];

  

  constructor(private venueService: VenueService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVenues();
  }

  private getVenues(){
    this.venueService.getVenuesList().subscribe(data => {
      this.venues = data;
    });
  }

  venueDetails(id: number){
    this.router.navigate(['venue-details', id]);
  }

  updateVenue(id: number){
    this.router.navigate(['update-venue', id]);
  }

  deleteVenue(id: number){
    this.venueService.deleteVenue(id).subscribe( data => {
      console.log(data);
      this.getVenues();
    });
  }

}
