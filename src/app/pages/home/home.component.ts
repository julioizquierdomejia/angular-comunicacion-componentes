import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private dataServices:DataService){}

  textoPdre = "Soy el Texto del Padre";
  parrafoPadre = "Este es un parrafo del padre, Este es un parrafo del padre, Este es un parrafo del padre, Este es un parrafo del padre "

  cambiarTextoDelPadre(){
    this.textoPdre = "Cambie el texto desde el Padre";
    this.parrafoPadre = "Soy el nuevo parrafo"

    this.dataServices.textoNabvar = this.textoPdre;


  }

}
