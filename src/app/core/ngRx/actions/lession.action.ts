// import { createAction, props } from "@ngrx/store";

import { createAction, props } from "@ngrx/store";
import { LessonModel } from "../../../features/lesson/models/lesson.model";


export const addLesson = createAction('[Lesson] Add Lesson', props<LessonModel>());

