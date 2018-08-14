import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktpersonerComponent } from './kontaktpersoner.component';

describe('KontaktpersonerComponent', () => {
  let component: KontaktpersonerComponent;
  let fixture: ComponentFixture<KontaktpersonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktpersonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktpersonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
