import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() labelName: string = '';
  @Input() inputName: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  onInputChange(newValue: string) {
    this.inputValueChange.emit(newValue);
  }

  inputValue: string = '';
}
