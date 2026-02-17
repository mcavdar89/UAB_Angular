import { Component, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
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


  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }


  add(): void {
    console.log(this.lessonInit());
    this.lessonInit.set({ id: 0, name: '', credit: 0, days: '' });

  }


}
