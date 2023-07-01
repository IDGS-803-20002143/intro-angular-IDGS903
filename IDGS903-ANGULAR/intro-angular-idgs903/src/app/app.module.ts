import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent}from './utl/ievn.component';
import { FormsModule, ReactiveFormsModule}from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { AppRoutingModule } from './app.routing.module';
import { AlumnoReactiveComponent } from './utl/formularios/alumnos.reactive/Alumno-Reactive.component';




@NgModule({
  declarations: [

    AppComponent,
    idgsComponent,
    ievnComponent,
    SumaComponent,
    OperasBasComponent,
    AlumnoReactiveComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
