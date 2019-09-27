import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(private route: Router) {

  }
  task1() {
    this.route.navigate(['/task1'])
  }
  task2() {
    this.route.navigate(['/task2'])
  }
  task3() {
    this.route.navigate(['/task3'])
  }
}
