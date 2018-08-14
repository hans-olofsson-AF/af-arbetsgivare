import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjansteanteckningarOrganisationComponent } from './tjansteanteckningar-organisation.component';

describe('TjansteanteckningarOrganisationComponent', () => {
  let component: TjansteanteckningarOrganisationComponent;
  let fixture: ComponentFixture<TjansteanteckningarOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjansteanteckningarOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjansteanteckningarOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
