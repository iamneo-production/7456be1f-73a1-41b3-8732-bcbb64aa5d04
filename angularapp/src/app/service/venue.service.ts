import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venue } from '../Model/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  public addVenue(venue: Venue): any {
    return this.http.post<any>('https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/addVenue', venue);
  }

  public updateVenue(venue: Venue): any {
    return this.http.put<any>('https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/updateVenue', venue);
  }

  public deleteVenue(id: number): any {
    return this.http.delete<any>('https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/deleteVenue?id=' + id);
  }

  public viewVenue(): any {
    return this.http.get<any>('https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/viewVenue');
  }
  public getVenueById(id: number): any {
    return this.http.get<any>('https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/getVenue?id=' + id)
  }
}
