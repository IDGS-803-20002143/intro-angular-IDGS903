import { RouterModule, Routes } from "@angular/router";
import {NgModule} from "@angular/core";
import { IevnComponent } from "./utl/ievn/ievn.component";
import { AlumnoReactiveComponent } from "./utl/formularios/alumnos.reactive/Alumno-Reactive.component";

const routes:Routes=[

     {path: '', redirectTo: '/home',pathMatch:'full'},
     {path:'IEVN', component:IevnComponent},
     {path:'Formulario',component:AlumnoReactiveComponent},
    //  {path:'**', component: PagenotfoutComponet}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}