import { Component, OnInit,Input} from '@angular/core';
import { FormGroup ,FormBuilder ,Validators,FormControl, NgForm} from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from '@angular/common';
import { DropdownService } from "../../dropdown.service";
import { SurgeryService } from "../../surgery.service";
import { Observable } from 'rxjs';
interface surgeon {
  SurgeonId: string;
  SurgeonName: string;
}



interface surgerySite{

  SurgerySiteId: string;
  SurgerySite: string;
}

interface antibiotic{
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit{
  selectable = true;
 
  constructor(private fb : FormBuilder , private _dropdownservice : DropdownService, private surgeryService : SurgeryService){  }

  SurgeryForm = this.fb.group({
    surgeryId : [],
    tagnumber :[''],
    emergencynumber:[],
    animaltype:[''],
    surgerydate:[''],
    surgeon:[],
    surgerySite:[],
    anesthesiaMinutes:[],
    surgeryType:[],
    deathDate:[''],
    deathComment:[''],
    antibioticsGiven:[],
    comment:['']



  });


  surgeryType : string;
    types: string[] = ['Spay','Neuter','Tumor Removal','Ceasarian Section','Leg Amputation','Tail Amputation','Haematoma','Wound Repair','Bone Fracture Repair','Eye Surgery','Jaw Repair','Hernia Repair','Exploratory Surgery Abdominal'];

  surgeons$: Observable<surgeon[]> ;

  sites$ : Observable<surgerySite[]>;
  
  drugs$  : Observable<antibiotic[]>;

    
  ngOnInit(){
    this.sites$ = this._dropdownservice.getSurgerySite();
    this.surgeons$ = this._dropdownservice.getSurgeon();
    this.drugs$ = this._dropdownservice.getAntibiotic();
  }


  Submit(SurgeryForm:any)
  {
    this.surgeryService.SurgeryRegisterSubmit(this.SurgeryForm.value).subscribe(
      response => console.log('Success!',response)
    );

  }

 
 

}
