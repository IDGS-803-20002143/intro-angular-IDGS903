import { Component } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs903';

  grupo='IDGS-903';
  alumnos={
    matricula:123,
    nombre:'jazmin',
    fechaNacimiento:new Date(),
    pago:123.5
  }

  duplicarN(valor:number):number{
    return valor*2;
  }
}
