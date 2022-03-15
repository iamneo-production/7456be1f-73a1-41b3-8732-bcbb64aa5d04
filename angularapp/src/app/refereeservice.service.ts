import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Referee } from './referee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {
  private baseURL = "https://8080-eefddafbcddebacfeebeceffdebcfbfabeadcafacdc.examlyiopb.examly.io/admin/referees";

  constructor(private httpClient : HttpClient
    ) { }
    createReferee(referee : Referee):Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,referee);
    }
    getRefereeList(): Observable<Referee[]>{
      return this.httpClient.get<Referee[]>(`${this.baseURL}`);
    }
    getRefereeById(id: number):Observable<Referee>{
      return this.httpClient.get<Referee>(`${this.baseURL}/${id}`)
    }

    updateReferee(id : number,referee : Referee): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,referee);
    }
    deleteReferee(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`)
    }
} 