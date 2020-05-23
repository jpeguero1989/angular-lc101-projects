import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures to Relax';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg';
  image4 = 'https://media.giphy.com/media/zOvBKUUEERdNm/200.gif';

  constructor() { }

  ngOnInit() {
  }

}
