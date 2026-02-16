import { Component, effect, Input, input, OnInit } from '@angular/core';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'uab-date-picker',
  imports: [FormField],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker implements OnInit {
  @Input() label: string = '';
  form = input({} as any);
  @Input() fieldName: string = '';



  constructor() {

    effect(() => {

      if (this.form()[this.fieldName]) {
        const dateValue = new Date(this.form()[this.fieldName]);
        const formattedDate = dateValue.toISOString().split('T')[0];
        this.form()[this.fieldName] = formattedDate;
      }

      console.log(this.form());
    });


  }

  ngOnInit(): void {

  }
}
