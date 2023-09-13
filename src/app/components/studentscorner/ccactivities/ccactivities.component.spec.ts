import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcactivitiesComponent } from './ccactivities.component';

describe('CcactivitiesComponent', () => {
  let component: CcactivitiesComponent;
  let fixture: ComponentFixture<CcactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
