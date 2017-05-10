import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelContainer } from './excel.container';

describe('ExcelComponent', () => {
  let component: ExcelContainer;
  let fixture: ComponentFixture<ExcelContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
