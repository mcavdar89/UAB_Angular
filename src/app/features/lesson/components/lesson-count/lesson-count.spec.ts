import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCount } from './lesson-count';

describe('LessonCount', () => {
  let component: LessonCount;
  let fixture: ComponentFixture<LessonCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
