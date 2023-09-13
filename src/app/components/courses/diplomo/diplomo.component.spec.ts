import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomoComponent } from './diplomo.component';

describe('DiplomoComponent', () => {
  let component: DiplomoComponent;
  let fixture: ComponentFixture<DiplomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
