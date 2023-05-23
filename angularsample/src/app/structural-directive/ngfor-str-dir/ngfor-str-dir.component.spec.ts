import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforStrDirComponent } from './ngfor-str-dir.component';

describe('NgforStrDirComponent', () => {
  let component: NgforStrDirComponent;
  let fixture: ComponentFixture<NgforStrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforStrDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
