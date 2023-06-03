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
  sortOrder = 'year'; 

  constructor(private omdbService: OmdbService, private router: Router) { }

  ngOnInit() {
    this.defaultMovies()
  }

  defaultMovies() {
    this.omdbService.defaultMovies().subscribe(
      data => {
        this.movies = data.Search;
        this.errorMessage = '';
      },
      error => {
        console.error('Error: ' + error);
        this.errorMessage = 'An error occurred while fetching default movies';
      });
      this.sortMovies()
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
      this.sortMovies()
  }

  openDetails(id: number) {
    const movieDetailUrl = `/tabs/details/${id}`;
    this.router.navigateByUrl(movieDetailUrl);
  }

  sortMovies() {
    if (this.sortOrder === 'year') {
      this.movies.sort((a, b) => b.Year - a.Year);
      //this.movies.sort((a, b) => (a.Year > b.Year) ? 1 : -1);
    } else if (this.sortOrder === 'alphabetical') {
      this.movies.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
    } else if (this.sortOrder === 'rating') {
      this.movies.sort((a, b) => (a.imdbRating > b.imdbRating) ? 1 : -1);
    }
  }
  

}
