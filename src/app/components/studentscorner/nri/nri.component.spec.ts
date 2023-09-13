import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NriComponent } from './nri.component';

describe('NriComponent', () => {
  let component: NriComponent;
  let fixture: ComponentFixture<NriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
