import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=f0ea8676cd4843d18322aa3d2a3652e4&&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
