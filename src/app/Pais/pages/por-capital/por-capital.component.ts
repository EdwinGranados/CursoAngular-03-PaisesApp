import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  constructor(
    private PaisService: PaisService
  ) { }

  buscar(termino: string) {
    this.termino = termino
    this.hayError = false;
    this.PaisService.buscarPaisPorCapital(termino).subscribe((paises) => {
      this.paises = paises

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
