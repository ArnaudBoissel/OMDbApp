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
  }

  openDetails(data: any) {
    console.log(data)
    this.router.navigate(['/details', data.imdbID])
  }

}
