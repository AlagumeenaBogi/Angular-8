import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifStrDirComponent } from './ngif-str-dir.component';

describe('NgifStrDirComponent', () => {
  let component: NgifStrDirComponent;
  let fixture: ComponentFixture<NgifStrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifStrDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
