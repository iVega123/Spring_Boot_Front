import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SecurityService {
    private authorizeEndpoint = '/oauth2/authorization/google';
    private tokenEndpoint = '/oauth2/code/google';
    private baseUrl = environment.baseUrl;
    private tokenKey = 'token';
    constructor(private http: HttpClient){

    }
    login(){
        window.open(this.baseUrl + this.authorizeEndpoint, '_self');
    }
    updateToken(token){
        localStorage.setItem(this.tokenKey, token);
    }
    fetchToken(code, state): Observable<any> {
      console.log(this.tokenKey);
       return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state='+ state);
    }

    getToken(){
        return localStorage.getItem(this.tokenKey);
    }
    isLoggedIn(): boolean {
        const token = this.getToken();
        return token != null
    }
}
