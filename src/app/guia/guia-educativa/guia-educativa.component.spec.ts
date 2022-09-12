import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaEducativaComponent } from './guia-educativa.component';

describe('GuiaEducativaComponent', () => {
  let component: GuiaEducativaComponent;
  let fixture: ComponentFixture<GuiaEducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaEducativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
