import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'Luis'
  };

  placeholder = {
    nombre: 'Nombre'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = 'Juan';
      this.placeholder.nombre = 'Apellido';
    }, 2000);
  }

  onKeyUp($event) {
    console.log('keyUp, ', $event);
  }

  onBlur($event: FocusEvent) {
    console.log('onBlur, ', $event);
  }

}
