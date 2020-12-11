import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponentRoutingModule } from './quiz-component-routing.module';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { MatCardModule } from '@angular/material/card';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
// MDB Angular Pro
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [ExamCardComponent],
  imports: [
    CommonModule,
    QuizComponentRoutingModule,
    MatCardModule,
    CarouselModule, 
    WavesModule,
    ButtonsModule, 
    CardsModule,
    MatCardModule,
  ]
})
export class QuizComponentModule { }
