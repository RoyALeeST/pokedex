import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackDescriptionComponent } from './attack-description.component';

describe('AttackDescriptionComponent', () => {
  let component: AttackDescriptionComponent;
  let fixture: ComponentFixture<AttackDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
