import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackComponent } from './attack.component';

describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
