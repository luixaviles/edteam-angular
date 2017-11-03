import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1, 'Luis Aviles', 'Cochabamba');
    console.log('edad.estudiante1:', this.estudiante1.getEdad());

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      ciudad: 'Lima'
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      ciudad: 'Bogota'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Juana Lopez',
        ciudad: 'Santiago'
      }
    }, 3000);
  }

}
