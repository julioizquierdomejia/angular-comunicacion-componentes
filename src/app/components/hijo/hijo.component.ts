import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']


})



export class HijoComponent {

  @Input() textoHijo  = "Soy el texto del Hijo";
  @Output() enviarTexto = new EventEmitter<string>;

  constructor(private dataServices:DataService){}  


  @Input() parrafoHijo = "soy el parrafo del hijo, soy el parrafo del hijo, soy el parrafo del hijo, soy el parrafo del hijo, soy el parrafo del hijo, "

  cambiarTextoHijo(){
    this.textoHijo = "Texto cambiado desde el hijo";
    this.enviarTexto.emit(this.textoHijo);

    this.parrafoHijo = "soy el nuevo parrafo del hijo";

    this.dataServices.textoNabvar = this.textoHijo;
  }

}
