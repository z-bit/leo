import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventurContainer } from './inventur.container';

describe('InventurComponent', () => {
  let component: InventurContainer;
  let fixture: ComponentFixture<InventurContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventurContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventurContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
