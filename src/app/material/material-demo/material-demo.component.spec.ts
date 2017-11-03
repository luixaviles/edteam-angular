import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemoComponent } from './material-demo.component';

describe('MaterialDemoComponent', () => {
  let component: MaterialDemoComponent;
  let fixture: ComponentFixture<MaterialDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
