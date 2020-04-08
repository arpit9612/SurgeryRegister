import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule  } from "./material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorModule } from './name-editor/name-editor/name-editor.module';


@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NameEditorModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
