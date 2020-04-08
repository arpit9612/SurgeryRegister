import { Component, OnInit,Input} from '@angular/core';
import { FormGroup ,FormBuilder ,Validators} from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
interface surgeon {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit{
  ngOnInit(){
    
  }

  favoriteSeason: string;
  seasons: string[] = ['Spay','Neuter','Tumor Removal','Ceasarian Section','Leg Amputation','Tail Amputation','Haematoma','Wound Repair','Bone Fracture Repair','Eye Surgery','Jaw Repair','Hernia Repair','Exploratory Surgery Abdominal','Other'];

  surgeons: surgeon[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'none-3', viewValue: 'None'}
  ];
    constructor(){}
  
 
 

}
