import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialButtonComponent } from './material-button.component';

describe('MaterialButtonComponent', () => {
  let component: MaterialButtonComponent;
  let fixture: ComponentFixture<MaterialButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
