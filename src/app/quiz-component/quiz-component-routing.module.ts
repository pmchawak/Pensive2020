import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamCardComponent } from './exam-card/exam-card.component';


const routes: Routes = [
  {
    path: 'exam-card',
    component: ExamCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizComponentRoutingModule { }
