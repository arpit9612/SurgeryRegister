import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule  } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
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
    NameEditorModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
