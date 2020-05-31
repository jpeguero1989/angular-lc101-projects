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
  confirmation = false;
  takeOffEnabled = true;
  disableUp = false;
  disableDown = false;
  disableRight = false;
  disableLeft = false;

  gutterCheck(width, height) {
    if (width > 420000 || width < 30000 || height < 50000 || height > 310000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }

    if (width==470000)
    {
      this.disableRight = true;
    }else{
      this.disableRight = false;
    }

    if (width==-20000)
    {
      this.disableLeft = true;
    }else{
      this.disableLeft = false;
    }

    if (height==340000)
    {
      this.disableUp = true;
    }else{
      this.disableUp = false;
    }

    if (height<=10000)
    {
      this.disableDown = true;
    }else{
      this.disableDown = false;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.gutterCheck(this.width, this.height);
  }

  handleTakeOff()
  {
    this.confirmation = confirm("Confirm that the shuttle is ready for takeoff")
    if (this.confirmation)
    {
      this.message = "Shuttle in flight.";
      this.color = "blue";
      this.takeOffEnabled = false;
      this.height = 10000;
      this.width = 0;
    }
  }

  handleLand(rocketImage)
  {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = true;
  }

  handleMissionAbort(rocketImage)
  {
    this.confirmation = confirm("Confirm that you want to abort the mission.");
    if (this.confirmation)
    {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  }
}
