import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryaddComponent } from './countryadd.component';

describe('CountryaddComponent', () => {
  let component: CountryaddComponent;
  let fixture: ComponentFixture<CountryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
