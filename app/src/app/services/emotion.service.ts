import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { choosenEmotions } from '../interfaces/chosenEmotions';
import { environment } from "../../environments/environment";

const API_URL = `${environment.apiUrl}/emotion/chosenEmotions`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmotionService {

  constructor(private http: HttpClient) { }

  addNewEmotion(newEmotionsData: any): Observable<any> {
    console.log(newEmotionsData);
    
    return this.http.post(`${API_URL}`,newEmotionsData, httpOptions)
  }

}
