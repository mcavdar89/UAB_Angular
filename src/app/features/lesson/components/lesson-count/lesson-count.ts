import { Component, computed, inject } from '@angular/core';
import { LessonStore } from '../../../../core/ngRx/actions/stores/lesson.store';

@Component({
  selector: 'app-lesson-count',
  imports: [],
  templateUrl: './lesson-count.html',
  styleUrl: './lesson-count.scss',
})
export class LessonCount {

  store = inject(LessonStore);
  count = computed(() => this.store.lessons().length
  );



}
