import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent  implements OnInit {
  series: any[] = [];
  searchText = '';
  errorMessage = '';
  sortOrder = 'year'; 

  constructor(private omdbService: OmdbService, private router: Router) { }
  
  ngOnInit() {
    this.defaultSeries()
  }

  defaultSeries() {
    console.log("default")
    this.omdbService.defaultSeries().subscribe(
      data => {
        this.series = data.Search;
        this.errorMessage = '';
      },
      error => {console.error('Error: ' + error);
      this.errorMessage = 'An error occurred while fetching default series';
    });
    this.sortSeries()
  }

  searchSeries() {
    this.omdbService.searchSeries(this.searchText).subscribe(
      data => {
        if (data.Search) {
          this.series = data.Search;
          this.errorMessage = '';
        } else {
          this.errorMessage = 'No results found';
        }
      },
      error => {
        console.error('Error: ' + error);
        this.errorMessage = 'No results found';
      });
      this.sortSeries()
  }

  openDetails(id: number) {
    console.log(id)
    const serieDetailUrl = `/tabs/details/${id}`;
    this.router.navigateByUrl(serieDetailUrl);
  }

  sortSeries() {
    if (this.sortOrder === 'year') {
      this.series.sort((a, b) => b.Year - a.Year);
      //this.series.sort((a, b) => (a.Year > b.Year) ? 1 : -1);
    } else if (this.sortOrder === 'alphabetical') {
      this.series.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
    } else if (this.sortOrder === 'rating') {
      this.series.sort((a, b) => (a.imdbRating > b.imdbRating) ? 1 : -1);
    }
  }
}
