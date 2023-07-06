import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  users: any[] = [];
  
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '?results=5').pipe(
      map(response => response.results)
    );
  }

}