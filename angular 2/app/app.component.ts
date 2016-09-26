import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { DropdownMultiComponent} from './dropdown-multi.component';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2</h1>
  <dropdown-multi controlType='wikisearch'></dropdown-multi>
  `,
  directives: [DropdownMultiComponent]
})

export class AppComponent  {
}