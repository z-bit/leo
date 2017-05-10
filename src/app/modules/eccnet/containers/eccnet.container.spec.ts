import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccnetContainer } from './eccnet.container';

describe('EccnetComponent', () => {
  let component: EccnetContainer;
  let fixture: ComponentFixture<EccnetContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccnetContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccnetContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
