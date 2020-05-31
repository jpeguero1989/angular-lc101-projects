import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver:boolean = false;
   inactiveCopper: boolean = false;
   disabledFrustration:boolean = false;
   location:string;
   constructor() { }

   ngOnInit() { }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

   


}
