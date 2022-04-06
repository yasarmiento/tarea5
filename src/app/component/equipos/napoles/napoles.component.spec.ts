import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapolesComponent } from './napoles.component';

describe('NapolesComponent', () => {
  let component: NapolesComponent;
  let fixture: ComponentFixture<NapolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
