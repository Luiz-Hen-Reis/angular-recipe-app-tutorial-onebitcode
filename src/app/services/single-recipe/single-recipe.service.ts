import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleRecipeService {
  constructor(private http: HttpClient) {}

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=f0ea8676cd4843d18322aa3d2a3652e4&`;

    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=f0ea8676cd4843d18322aa3d2a3652e4&`;

    return this.http.get(apiUrl);
  }
}
