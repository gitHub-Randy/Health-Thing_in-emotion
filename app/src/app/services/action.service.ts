import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
const API_URL = `${environment.apiUrl}/actions`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  addAction(action: any): Observable<any>{

    return this.http.post(`${API_URL}`,action, httpOptions)

  }

  getActions(): Observable<any> {
    return this.http.get(API_URL, httpOptions);
  }

  updateAction(actionName: string,newActionName: string) {
    return this.http.put(`${API_URL}:${actionName}`, {newGoalNme: newActionName}, httpOptions)
  }

  deleteAction(actionName: String): Observable<any> {
    return this.http.delete(`${API_URL}/${actionName}`, httpOptions)

  }
}
