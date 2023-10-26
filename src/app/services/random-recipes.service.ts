import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=f0ea8676cd4843d18322aa3d2a3652e4&&number=${take}`;

    return this.http.get(apiUrl);
  }
}
