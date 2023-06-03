import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  searchText = '';
  errorMessage = '';

  constructor(private omdbService: OmdbService, private router: Router) { }

  ngOnInit() {
    this.defaultMovies()
  }

  defaultMovies() {
    console.log("default")
    this.omdbService.defaultMovies().subscribe(
      data => {
        this.movies = data.Search;
        this.errorMessage = '';
      },
      error => {
        console.error('Error: ' + error);
        this.errorMessage = 'An error occurred while fetching default movies';
      });
  }

  searchMovies() {
    this.omdbService.searchMovies(this.searchText).subscribe(
      data => {
        if (data.Search) {
          this.movies = data.Search;
          this.errorMessage = '';
        } else {
          this.errorMessage = 'No results found';
        }
      },
      error => {
        console.error('Error: ' + error);
        this.errorMessage = 'No results found';
      });
  }

  openDetails(data: any) {
    console.log(data)
    this.router.navigate(['/details', data.imdbID]);
  }

}
