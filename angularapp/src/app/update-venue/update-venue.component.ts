import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venue } from '../venue';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-update-venue',
  templateUrl: './update-venue.component.html',
  styleUrls: ['./update-venue.component.css']
})
export class UpdateVenueComponent implements OnInit {

  id: number;
  venue: Venue = new Venue();
  constructor(private venueService: VenueService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.venueService.getVenueById(this.id).subscribe(data => {
      this.venue = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.venueService.updateVenue(this.id, this.venue).subscribe( data =>{
      this.goToVenueList();
    }, 
    error => console.log(error));
    
  }
  
  goToVenueList(){
    this.router.navigate(['/venues']);
}
}
