import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { TokenStorageService } from './token-storage-service.service';


const API_URL = `${environment.apiUrl}/emotion/anders`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
export class AndersService {

  constructor(private http: HttpClient) { }


  addAndersChipData(newEmotions: Object): Observable<any>{
    console.log(newEmotions)

    return this.http.post(`${API_URL}`,newEmotions, httpOptions)

  }

  getAndersChipData(): Observable<any> {
    return this.http.get(API_URL, httpOptions);
  }

  updateAndersChip(emotionName: string,newEmotionName: string) {
    return this.http.put(`${API_URL}:id`, {newEmotionName: newEmotionName}, httpOptions)
  }

  deleteAndersChip(emotionName: String): Observable<any> {
    console.log("delete Service")
    return this.http.delete(`${API_URL}/${emotionName}`, httpOptions)

  }

}






