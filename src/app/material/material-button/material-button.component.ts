import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valido: true
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formulario.valido = false;
    }, 2000);

  }

  onClick($event) {
    console.log('Evento Click', $event);
  }

}
