import { Component, OnInit,
         Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'ed-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png';

  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>()

  constructor() { }

  ngOnInit() {

  }

  onClick(e: Estudiante) {
    this.onMouseClick.emit(e);
  }

}
