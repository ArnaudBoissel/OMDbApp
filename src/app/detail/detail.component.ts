import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  imdbID: string = ''//"tt3896198";
  movie: any;

  constructor(private route: ActivatedRoute, private omdbService: OmdbService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.imdbID = id !== null ? id : this.imdbID;
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.omdbService.getMovieDetails(this.imdbID).subscribe(
      data => {
        this.movie = data;
      },
      error => {
        console.error('Error: ' + error);
      });
  }
}
