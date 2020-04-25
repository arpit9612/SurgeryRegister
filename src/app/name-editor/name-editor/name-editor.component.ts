import { Component, OnInit,Input} from '@angular/core';
import { FormGroup ,FormBuilder ,Validators,FormControl, NgForm} from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from '@angular/common';
import { DropdownService } from "../../dropdown.service";
import { SurgeryService } from "../../surgery.service";
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { validateBasis } from '@angular/flex-layout';
interface surgeon {
  SurgeonId: string;
  SurgeonName: string;
}

interface surgeryId{
  SurgeryId: BigInteger;
}

interface SurgeryType {
  SurgeryTypeId : string;
  SurgeryType : string;
}


interface surgerySite{

  SurgerySiteId: string;
  SurgerySite: string;
}

interface SurgeryById{
  surgeryId: number;
}

interface antibiotic{
  
  Antibiotics: string;
}



@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit{
 
  constructor(private fb : FormBuilder , private _dropdownservice : DropdownService, private surgeryService : SurgeryService){  }

  SurgeryForm = this.fb.group({
    SurgeryId :[],
    TagNumber :['',Validators.required],
    EmergencyNumber:[,Validators.required],
    AnimalType:['',Validators.required],
    SurgeryDate:['',Validators.required],
    SurgeonId:[,Validators.required],
    SurgerySiteId:[,Validators.required],
    AnesthesiaMinutes:[],
    SurgeryTypeId:[,Validators.required],
    Died:[''],
    DeathComment:[''],
    AntibioticsGiven:[,Validators.required],
    Comment:[''],
    SearchSurgeryId:['']
  });





  surgeryId : number;  
  types$: Observable<SurgeryType[]> ;

  surgeriesById : Observable<SurgeryById[]>;
  
  surgeons$: Observable<surgeon[]> ;

  sites$ : Observable<surgerySite[]>;
  
  drugs$  : Observable<antibiotic[]>;

    
  ngOnInit(){
    this.sites$ = this._dropdownservice.getSurgerySite();
    this.surgeons$ = this._dropdownservice.getSurgeon();
    this.drugs$ = this._dropdownservice.getAntibiotic();
    this.types$ = this._dropdownservice.getSurgeryType();
    
    
  }


  Submit(SurgeryForm:any)
  {
    this.surgeryService.SurgeryRegisterSubmit(this.SurgeryForm.value).subscribe(
      response => console.log('Success!',response)
    );

  }

  Load()
  {
    this.surgeryService.getSurgeryDetail(this.SurgeryForm.get("SearchSurgeryId").value).subscribe(response =>
      this.SurgeryForm.patchValue(response[0])
      // console.log(response)
    );
  }
    // .subscribe(
    //   response => console.log('Success!',response)
    // );

   
    // console.log(this.SurgeryForm.get("surgeryId").value);


 
 

}
