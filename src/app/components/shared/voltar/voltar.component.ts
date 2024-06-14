import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.css']
})
export class VoltarComponent {

  constructor(private location: Location) { }

  voltar() {
    this.location.back();
  }
}
