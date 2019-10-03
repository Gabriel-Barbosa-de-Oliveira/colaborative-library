import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICreateUser } from "src/app/models/create-user.interface";
import { ILogin } from "src/app/models/login.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  protected basePath = environment.api;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {}

  public getBooks(): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}books`, {
      withCredentials: null,
      headers: headers
    });
  }

  public getUsers(): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}user`, {
      withCredentials: null,
      headers: headers
    });
  }

  public getUserProjects(): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}my-projects`, {
      withCredentials: null,
      headers: headers
    });
  }

  public getMyBooks(id: any): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}books?userId=${id}`, {
      withCredentials: null,
      headers: headers
    });
  }

  public postNewBook(book): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.post<any>(`${this.basePath}books`, book, {
      withCredentials: null,
      headers: headers
    });
  }

  // public postNewProject(project: IProject): Observable<any> {
  //   let headers = this.defaultHeaders;

  //   return this.httpClient.post<any>(`${this.basePath}project`, project, {
  //     withCredentials: null,
  //     headers: headers
  //   });
  // }

  public authenticateUser(user: ILogin): Observable<any> {
    let headers = this.defaultHeaders;
    let params = new HttpParams();
    params = params.append('email', user.name);
    params = params.append('password', user.password);
    return this.httpClient.get<any>(`${this.basePath}users`, { params: params });
  }

  // public putSpecificProject(id: any, project: IProject): Observable<any> {
  //   let headers = this.defaultHeaders;

  //   return this.httpClient.put<any>(`${this.basePath}project/${id}`, project, {
  //     withCredentials: null,
  //     headers: headers
  //   });
  // }
}
