import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venue } from '../venue';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css']
})
export class VenueDetailsComponent implements OnInit {
  id: number
  venue: Venue
  constructor(private route: ActivatedRoute, private venueService: VenueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.venue = new Venue();
    this.venueService.getVenueById(this.id).subscribe( data => {
      this.venue = data;
    });
  }

}
