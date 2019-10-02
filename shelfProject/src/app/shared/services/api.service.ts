import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProject } from "src/app/models/projects.interface";
import { ICreateUser } from "src/app/models/create-user.interface";
import { ILogin } from "src/app/models/login.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  protected basePath = environment.api;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {}

  public getProjects(): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}project`, {
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

  public getSpecificProject(id: any): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.get<any>(`${this.basePath}project/${id}`, {
      withCredentials: null,
      headers: headers
    });
  }

  public postNewUser(user: ICreateUser): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.post<any>(`${this.basePath}users`, user, {
      withCredentials: null,
      headers: headers
    });
  }

  public postNewProject(project: IProject): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.post<any>(`${this.basePath}project`, project, {
      withCredentials: null,
      headers: headers
    });
  }

  public authenticateUser(user: ILogin): Observable<any> {
    let headers = this.defaultHeaders;
    let params = new HttpParams();
    params = params.append('email', user.name);
    params = params.append('password', user.password);
    return this.httpClient.get<any>(`${this.basePath}users`, { params: params });
  }

  public putSpecificProject(id: any, project: IProject): Observable<any> {
    let headers = this.defaultHeaders;

    return this.httpClient.put<any>(`${this.basePath}project/${id}`, project, {
      withCredentials: null,
      headers: headers
    });
  }
}
