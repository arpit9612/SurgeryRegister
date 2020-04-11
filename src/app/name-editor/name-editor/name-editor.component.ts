import { Component, OnInit,Input} from '@angular/core';
import { FormGroup ,FormBuilder ,Validators,FormControl, NgForm} from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { strict } from 'assert';
import { NgForOf } from '@angular/common';
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
  
 
  constructor(private fb : FormBuilder){  }

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

  Type(value)
  {
    console.log(value);
  }

  Submit(SurgeryForm:any)
  {
      console.log(SurgeryForm.value);

  }

 
 

}
