import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchStrDirComponent } from './ngswitch-str-dir.component';

describe('NgswitchStrDirComponent', () => {
  let component: NgswitchStrDirComponent;
  let fixture: ComponentFixture<NgswitchStrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchStrDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
