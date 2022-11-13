import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveComponent } from './cove.component';

describe('CoveComponent', () => {
  let component: CoveComponent;
  let fixture: ComponentFixture<CoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
