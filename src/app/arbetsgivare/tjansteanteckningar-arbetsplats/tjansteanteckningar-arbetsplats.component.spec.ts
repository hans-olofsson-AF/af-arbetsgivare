import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjansteanteckningarArbetsplatsComponent } from './tjansteanteckningar-arbetsplats.component';

describe('TjansteanteckningarArbetsplatsComponent', () => {
  let component: TjansteanteckningarArbetsplatsComponent;
  let fixture: ComponentFixture<TjansteanteckningarArbetsplatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjansteanteckningarArbetsplatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjansteanteckningarArbetsplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
