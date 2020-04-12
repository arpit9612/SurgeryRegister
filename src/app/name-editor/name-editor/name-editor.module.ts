import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import {MatInputModule} from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
    declarations: [        
        NameEditorComponent,
           
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
              
    ],
    exports: [
        NameEditorComponent
    ],
    entryComponents: [

    ],
})
export class NameEditorModule {}