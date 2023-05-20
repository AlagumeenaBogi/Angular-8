import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryviewComponent } from './countryview.component';

describe('CountryviewComponent', () => {
  let component: CountryviewComponent;
  let fixture: ComponentFixture<CountryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
