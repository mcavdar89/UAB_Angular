import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { LessonModel } from "../../../../features/lesson/models/lesson.model";

type LessonState = {
  lessons: LessonModel[];
  isLoading: boolean;
  error: string | null;
};

const initialState: LessonState = {
  lessons: [] as LessonModel[],
  isLoading: false,
  error: null,
};

export const LessonStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((_state) => ({
    count: computed(() => _state.lessons.length),
    list: () => _state.lessons,

  })),
  withMethods((store) => ({
    addLesson(lesson: LessonModel): void {
      // 👇 Updating state using the `patchState` function.
      patchState(store, (state) => ({
        lessons: [...state.lessons, lesson],
      }));

    },
    removeLesson(lessonId: number): void {
      patchState(store, (state) => ({
        lessons: state.lessons.filter(lesson => lesson.id !== lessonId),
      }));
    }
  }))
);
