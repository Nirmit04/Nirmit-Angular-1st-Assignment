import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../urls/urls'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private service: HttpClient) { }
  fetchUsers() {
    return this.service.get(`${environment.baseUrlRest}/${urls.restUrl}`)
  }
  fetchUser(index) {
    return this.service.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
  }
}
