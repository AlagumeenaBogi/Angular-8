import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrynewComponent } from './countrynew.component';

describe('CountrynewComponent', () => {
  let component: CountrynewComponent;
  let fixture: ComponentFixture<CountrynewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrynewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
