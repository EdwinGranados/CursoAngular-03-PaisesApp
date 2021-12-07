import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias:boolean = false;
  constructor(
    private PaisService: PaisService
  ) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino
    this.hayError = false;
    this.PaisService.buscarPais(termino).subscribe((paises) => {
      this.paises = paises

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = true
    this.PaisService.buscarPais(termino).subscribe((paises) => {
      this.paisesSugeridos = paises.splice(0,5);
    },(err) => this.paisesSugeridos = []);
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
   
  }
}
