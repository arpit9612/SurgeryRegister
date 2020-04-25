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
    console.log("SurgeryRegisterSubmit");
    if (surgerydata.surgeryId){ 
      return this.http.put<any>(this.url + "Surgery" , surgerydata);
    }
    else{
      return this.http.post<any>(this.url + "Surgery" , surgerydata);
    }
  }

  public getSurgeryDetail(surgeryId){
    

    return this.http.get<any>(this.url + "Surgery?surgeryId=" + surgeryId  );
    

  }
}
