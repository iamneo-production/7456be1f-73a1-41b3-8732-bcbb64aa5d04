import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venue } from './venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private baseURL = "https://8080-dddcceacddbacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/api/v1/venues";
  constructor(private httpClient: HttpClient) { }

  getVenuesList(): Observable<Venue[]>{
    return this.httpClient.get<Venue[]>(`${this.baseURL}`);
  }
  createVenue(venue: Venue): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, venue);
  }
  
  getVenueById(id: number): Observable<Venue>{
    return this.httpClient.get<Venue>(`${this.baseURL}/${id}`);
  }

  updateVenue(id: number, venue: Venue): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, venue);
  }

  deleteVenue(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
