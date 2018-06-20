import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfloatComponent } from './keyfloat.component';

describe('KeyfloatComponent', () => {
  let component: KeyfloatComponent;
  let fixture: ComponentFixture<KeyfloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyfloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
