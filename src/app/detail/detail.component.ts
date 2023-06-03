import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  imdbID: string = '';
  content: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private omdbService: OmdbService, private router: Router) { }

  ngOnInit() {
    console.log("init detail")
    const id = this.route.snapshot.paramMap.get('id');
    this.imdbID = id !== null ? id : this.imdbID;
    this.getDetails();
  }

  getDetails() {
    this.omdbService.getDetails(this.imdbID).subscribe(
      data => {
        this.content = data;
      },
      error => {
        console.error('Error: ' + error);
      });
  }

  goBack() {
    console.log("go back");
    let path = "";
    if (this.content.Type == "movie") {
      console.log("go movies");
      path = '/tabs/movies';
      this.router.navigate(['tabs/movies'])
    } else if (this.content.Type == "series") {
      console.log("go series");
      path = 'tabs/series';
      this.router.navigate(['/tabs/series'])
    }
    console.log("this.router.navigate([path]) ", path)    
  }
  
}
