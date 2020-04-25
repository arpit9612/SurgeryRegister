import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DropdownService {


  url = "http://localhost:3000/";
  constructor( private http : HttpClient) { }



  public getSurgerySite()
  {
    return this.http.get<any>(this.url + "Dropdown/SurgerySite" ); 
  }

  public getSurgeon()
  {
    return this.http.get<any>(this.url + "Dropdown/Surgeon" ); 
  }

  public getAntibiotic()
  {
    return this.http.get<any>(this.url + "Dropdown/Antibiotic" ); 
  }

  public getSurgeryType()
  {
    return this.http.get<any>(this.url + "Dropdown/SurgeryType");
  }

    

 
}
