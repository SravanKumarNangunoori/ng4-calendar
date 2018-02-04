import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4CalendarComponent } from './ng4-calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng4CalendarComponent],
  exports:[Ng4CalendarComponent]
})
export class Ng4CalendarModule { }
