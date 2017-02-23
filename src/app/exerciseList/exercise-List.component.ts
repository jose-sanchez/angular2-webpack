import { Component,EventEmitter,Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../exercise/exercise';


@Component({

  selector: 'exercise-List',
  templateUrl: './exercise-List.component.html',
  styleUrls: [ './exercise-List.component.css' ]
})


export class ExerciseListComponent implements OnInit {
  exercises: Exercise[];
  @Output() onExerciseSelected = new EventEmitter<Exercise>();

  constructor(
    private router: Router) { }

  getExerciseList(): void {
      this.exercises = [
        {  "id": 0, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 1, "name": "Press",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 2, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 3, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 4, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 5, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 6, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},
        {  "id": 7, "name": "Seat up",  "description":"Set down and then set up", "photourl":"emptypath"},    
        ]
  }

  ngOnInit(): void {
    this.getExerciseList();
  }

  onSelect(exercise: Exercise): void {
    this.onExerciseSelected.emit(exercise);
  }
  gotoDetail(): void {
    this.router.navigate(['/dashboard']);
  }
}
