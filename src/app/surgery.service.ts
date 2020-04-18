import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SurgeryService {
  url = "http://localhost:3000/";

  constructor(private http : HttpClient) { }

  SurgeryRegisterSubmit(surgerydata)
  {
    return this.http.post<any>(this.url + "Surgery/SurgeryRegisterSubmit" , surgerydata);
  }
}
