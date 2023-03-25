import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  data = "http://localhost:3000/posts";
  rent = "http://localhost:3000/rent";
  constructor(
    private http: HttpClient
  ) { }

  updateManga(id:any, input:any){
    return this.http.patch(`${this.data}/${id}`, input);
  }

  getMangas(): Observable<any>{
    return this.http.get(`${this.data}`);
  } 

  getManga(id:string): Observable<any>{
    return this.http.get(`${this.data}/${id}`); 
  }

  deleteManga(id:string): Observable<any>{
    return this.http.delete(`${this.data}/${id}`);
  }

  rentManga(input:any): Observable<any>{
    return this.http.post(`${this.rent}`, input); 
  }

  postManga(id:any, input:any): Observable<any>{
    return this.http.patch(`${this.data}/${id}`, input);
  }
}
