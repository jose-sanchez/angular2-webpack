import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({

  selector: 'profile-Info',
  templateUrl: './profileInfo.component.html',
  styleUrls: [ './profileInfo.component.css' ]
})


export class ProfileInfo implements OnInit {
  name: string;
  age:string;

  constructor(
    private router: Router) { }

  getProfileInfo(): void {
      this.name = "Jose";
      this.age = "32"
  }

  ngOnInit(): void {
    this.getProfileInfo();
  }

  gotoDetail(): void {
    this.router.navigate(['/dashboard']);
  }
}
