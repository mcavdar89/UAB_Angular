import { Component, computed, inject, OnInit } from '@angular/core';
import { LessonStore } from '../../../../core/ngRx/actions/stores/lesson.store';

@Component({
  selector: 'app-lesson-box',
  imports: [],
  templateUrl: './lesson-box.html',
  styleUrl: './lesson-box.scss',

})
export class LessonBox implements OnInit {

  store = inject(LessonStore);
  list = computed(() => this.store.lessons());



  constructor() { }

  ngOnInit(): void {

  }


  remove(id: number): void {
    this.store.removeLesson(id);
  }


}
