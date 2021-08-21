import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupingformComponent } from './grupingform.component';

describe('GrupingformComponent', () => {
  let component: GrupingformComponent;
  let fixture: ComponentFixture<GrupingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
