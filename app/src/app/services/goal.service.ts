import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
const API_URL = `${environment.apiUrl}/goals`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const updateHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text' })
};
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  addGoalData(goals: any): Observable<any>{
    console.log(goals)

    return this.http.post(`${API_URL}`,goals, httpOptions)

  }

  getGoals(): Observable<any> {
    return this.http.get(API_URL, httpOptions);
  }

  updateGoal(goals: any): Observable<any> {
    console.log(goals)
    return this.http.put(`${API_URL}`, goals, httpOptions)
  }

  deleteAndersChip(goalName: String): Observable<any> {
    return this.http.delete(`${API_URL}/${goalName}`, httpOptions)

  }
}
