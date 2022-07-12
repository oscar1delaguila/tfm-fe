import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteListComponent } from './juguete-list.component';

describe('ImagesComponent', () => {
  let component: JugueteListComponent;
  let fixture: ComponentFixture<JugueteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
