import { Component } from '@angular/core';
import { LessonAdd } from '../../components/lesson-add/lesson-add';
import { LessonBox } from '../../components/lesson-box/lesson-box';
import { LessonCount } from '../../components/lesson-count/lesson-count';

@Component({
  selector: 'app-lesson',
  imports: [LessonAdd, LessonBox, LessonCount],
  templateUrl: './lesson.html',
  styleUrl: './lesson.scss',
})
export class Lesson {

}
