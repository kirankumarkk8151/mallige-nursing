import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanComponent } from './chairman.component';

describe('ChairmanComponent', () => {
  let component: ChairmanComponent;
  let fixture: ComponentFixture<ChairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
