import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  constructor() { }

  ngOnInIt() { }

  confirmationWindow() {
    if (confirm("Confirm that the shuttle is ready for takeoff.")) {
      this.message = "Shuttle in flight.";
      this.color = 'blue';
      this.height = 10000;
      this.takeOffEnabled = false;
    }
  }

  alertWindow(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0';

  }

  abortWindow(rocketImage) {
    if (confirm("Do you want to Abort Mission?")) {
      this.message = "Mission aborted!";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = '0';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;

    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
    }

    this.takeOffEnabled = false;
    if (this.height == 300000 || this.height < 0 || this.width < 0 || this.width == 430000) {
      this.color = 'orange';
    }
    if (this.height == 340000 || this.height < 0 || this.width < 0 || this.width == 450000) {
      this.takeOffEnabled = true;
    }
  }
}

