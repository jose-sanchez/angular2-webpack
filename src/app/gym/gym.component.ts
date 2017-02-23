import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../exercise/exercise';

@Component({
  selector: 'gym-app',
  templateUrl: './gym.component.html',
  styleUrls: [ './gym.component.css' ]
})


export class GymComponent implements OnInit {

  exercise:Exercise;

  constructor(
    private router: Router) { }

  getGymInfo(): void {
      this.exercise = {  "id": 0, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"};

  }

  ngOnInit(): void {
    this.getGymInfo();
  }

  onExerciseSelected(exercise:Exercise): void {
    this.exercise = exercise;
  }

  gotoDetail(): void {
    this.router.navigate(['/dashboard']);
  }
}
