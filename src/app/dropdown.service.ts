import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DropdownService {


  _url = "http://localhost:3000/register";
  constructor( private http : HttpClient) { }

  surgeryregister(surgerydata)
  {
    return this.http.post<any>(this._url , surgerydata);
  }
}
