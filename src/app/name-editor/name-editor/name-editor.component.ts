import { Component, OnInit,Input} from '@angular/core';
import { FormGroup ,FormBuilder ,Validators,FormControl, NgForm} from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from '@angular/common';
import { DropdownService } from "../../dropdown.service";
interface surgeon {
  id: string;
  viewValue: string;
}

interface surgerySite{

  id: string;
  viewValue: string;
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
 
  constructor(private fb : FormBuilder , private _dropdownservice : DropdownService){  }

  SurgeryForm = this.fb.group({
    tagnumber :[''],
    emergencynumber:[''],
    animaltype:[''],
    surgerydate:[''],
    surgeon:[''],
    anesthesia:[''],
    stype:[''],
    deathdate:[''],
    deathcomment:[''],
    antibiotics:[''],
    comment:['']



  });


  surgeryType : string;
    types: string[] = ['Spay','Neuter','Tumor Removal','Ceasarian Section','Leg Amputation','Tail Amputation','Haematoma','Wound Repair','Bone Fracture Repair','Eye Surgery','Jaw Repair','Hernia Repair','Exploratory Surgery Abdominal'];

  surgeons: surgeon[] = [
    {id: 'vaibhav', viewValue: 'Vaibhav'},
    {id: 'other', viewValue: 'Other'},
  ];

  sites : surgerySite[] = [
    {id: 'abccenter-0' , viewValue: 'ABC Center'},
    {id: 'mainhospital-1' , viewValue: 'Main Hospital'},
  ];
  drugs  : antibiotic[] = [
    {id: 'yes' , viewValue: 'Yes'},
    {id: 'no' , viewValue: 'NO'},
  ];

    
  ngOnInit(){
    
  }

  Submit(SurgeryForm:any)
  {
    this._dropdownservice.surgeryregister(this.SurgeryForm.value).subscribe(
      response => console.log('Success!',response)
    );

  }

 
 

}
