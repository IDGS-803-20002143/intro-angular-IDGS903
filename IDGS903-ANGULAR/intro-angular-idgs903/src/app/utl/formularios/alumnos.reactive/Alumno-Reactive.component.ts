import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ievn',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
   alumnoForm!:FormGroup;
  constructor(private readonly fb: FormBuilder){
   this.alumnoForm=this.initForm()
  }

  onSumbit():void{
    console.log('Form-> ',this.alumnoForm.value)

  }
  obtenerValores():void{
    const mat=this.alumnoForm.get('matricula')?.value
    const nom=this.alumnoForm.get('nombre')?.value
    console.log('Matricula: ',mat);
    console.log('Nombre: ',nom);
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required]],
      nombre:['',[Validators.required, Validators.minLength(3)]],
      edad:['',[Validators.required]],
      correo:['',[Validators.required]],
      pago:[''],
      foto:[''],
      califi:[''],
    })
  }
}