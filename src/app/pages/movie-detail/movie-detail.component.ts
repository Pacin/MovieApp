import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail = null;
  genres: any[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;

      this.http
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3dc94529e160ce0bc5d154a4a7f2ba24`
        )
        .subscribe((data: any) => {
          console.log(data);
          this.movieDetail = data;

          const genreNames = [
            ...new Set(this.movieDetail.genres.map((genre: any) => genre.name)),
          ];
          this.genres = genreNames;
        });
    });
  }
}
