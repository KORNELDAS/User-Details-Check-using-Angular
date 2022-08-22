import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilComponent } from './deatil.component';

describe('DeatilComponent', () => {
  let component: DeatilComponent;
  let fixture: ComponentFixture<DeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
