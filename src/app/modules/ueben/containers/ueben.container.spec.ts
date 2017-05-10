import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UebenContainer } from './ueben.container';

describe('UebenComponent', () => {
  let component: UebenContainer;
  let fixture: ComponentFixture<UebenContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UebenContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UebenContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
