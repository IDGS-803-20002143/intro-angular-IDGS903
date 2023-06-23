import {Component} from '@angular/core'
@Component({
    selector:'app-ievn',
    templateUrl:'./ievn.component.html',
    template:'./ievn.component.html'  
})

export class ievnComponent{
     imageWidth:number=50;
     imageMargin:number=2;
     muestraImg:boolean=true;
     listFilter:string='';


     showImage():void{
        this.muestraImg=!this.muestraImg;
     }

    alumnos:any[]=[
        {"matricula":1234,
        "nombre":'jazmin',
        "edad":23,
        "correo":'mario@gmail.com',
        "pago":129.12,
        foto:"data:image/jpeg;base64,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"
    },
    {"matricula":1234,
    "nombre":'citlalli',
    "edad":20,
    "correo":'clitlalli@gmail.com',
    "pago":129.12,
}
    
    ]
    
    constructor(){}
}
