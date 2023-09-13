import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscComponent } from './bsc.component';

describe('BscComponent', () => {
  let component: BscComponent;
  let fixture: ComponentFixture<BscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
