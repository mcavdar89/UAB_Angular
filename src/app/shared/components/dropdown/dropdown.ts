import { Component, Input, input, OnInit } from '@angular/core';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'uab-dropdown',
  imports: [FormField],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown implements OnInit {

  options = input([] as any[]);

  form = input({} as any);

  @Input() valueName: string = 'value';
  @Input() labelName: string = 'label';
  @Input() fieldName: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }






}
