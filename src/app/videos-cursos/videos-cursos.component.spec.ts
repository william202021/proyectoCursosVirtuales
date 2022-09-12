import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCursosComponent } from './videos-cursos.component';

describe('VideosCursosComponent', () => {
  let component: VideosCursosComponent;
  let fixture: ComponentFixture<VideosCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
