import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.w3schools.com/css/css_dimension.asp','https://www.launchcode.org','https://www.linkedin.com/'];
  constructor() { }

  ngOnInit() {
  }

}
