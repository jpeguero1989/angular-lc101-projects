import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   emptyOrDuplicate = false;
   constructor() { }

   ngOnInit() {
   }
   addMovie (newTitle: string) {
      this.emptyOrDuplicate = false;
      if (newTitle !== ''){
      if(!this.movies.includes(newTitle)){
         this.movies.push(newTitle);
      }
      else
      {
         this.emptyOrDuplicate = true;
      }

      }
      else
      {
         this.emptyOrDuplicate = true;
      }
   }
}
