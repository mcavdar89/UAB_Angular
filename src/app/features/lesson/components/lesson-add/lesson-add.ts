import { Component, inject, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LessonStore } from '../../../../core/ngRx/actions/stores/lesson.store';
import { LessonModel } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson-add',
  imports: [FormField, InputTextModule, ButtonModule],
  templateUrl: './lesson-add.html',
  styleUrl: './lesson-add.scss',
})
export class LessonAdd implements OnInit {

  lessonInit = signal<LessonModel>({ id: 0, name: '', credit: 0, days: '' });

  form = form(this.lessonInit);


  // store = inject(Store);
  readonly store = inject(LessonStore);



  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }


  add(): void {
    console.log(this.lessonInit());

    const newLesson = { ...this.lessonInit() };
    // this.store.dispatch(addLesson(newLesson));
    // patchState(this.store, ({ lessons }) => ({
    //   lessons: [...lessons, newLesson]
    // }));

    this.store.addLesson(newLesson);


    // this.lessonInit.set({ id: 0, name: '', credit: 0, days: '' });

  }


}
