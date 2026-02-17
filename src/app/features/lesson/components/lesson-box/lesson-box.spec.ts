import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonBox } from './lesson-box';

describe('LessonBox', () => {
  let component: LessonBox;
  let fixture: ComponentFixture<LessonBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
