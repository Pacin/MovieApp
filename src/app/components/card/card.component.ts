import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  movies: any[] = null;
  @Output() movieId = new EventEmitter();

  constructor(private http: HttpClient, router: Router) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=3dc94529e160ce0bc5d154a4a7f2ba24'
      )
      .subscribe((data: any) => (this.movies = data.results));
  }
}
