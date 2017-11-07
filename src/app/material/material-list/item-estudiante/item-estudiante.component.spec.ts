import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEstudianteComponent } from './item-estudiante.component';

describe('ItemEstudianteComponent', () => {
  let component: ItemEstudianteComponent;
  let fixture: ComponentFixture<ItemEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
