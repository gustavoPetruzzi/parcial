import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public listadoPersonas: Array<any>;
  public servicePersonas: PersonasService;
  constructor(personasListado: PersonasService) {
    this.servicePersonas = personasListado;
   }

  ngOnInit() {
    this.servicePersonas.listar()
    .then(datos=>{
      console.info(datos);
      this.listadoPersonas = datos;
    })
  }

  public agregarUno(){
    this.servicePersonas.agregar();
  }

}
