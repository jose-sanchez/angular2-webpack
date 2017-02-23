import { Component,Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../exercise/exercise';


@Component({

  selector: 'exercise-dashboard',
  templateUrl: './exercise-dashboard.component.html',
  styleUrls: [ './exercise-dashboard.component.css' ]
})


export class ExerciseDashboardComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(
    private router: Router) { }



  ngOnInit(): void {

  }


  gotoDetail(): void {
    this.router.navigate(['/dashboard']);
  }
}
