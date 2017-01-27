import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Observable} from "rxjs";
import {Story} from "./story";
import {Commenty} from "./comment";

@Injectable()
export class DataService {

  private storiesUrlTest = 'api/storiesList';  // URL to web api
  private storiesUrl = 'http://localhost:8090';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getStories(): Promise<Story[]> {
    return this.http.get('http://localhost:8090/story/all')
      .toPromise()
      .then(response => response.json() as Story[])
      .catch(this.handleError);
  }

  getOneStory(): Promise<Story> {
    return this.http.get('http://localhost:8090/story/one')
      .toPromise()
      .then(response => response.json() as Story)
      .catch(this.handleError);
  }

  createStory(description: string, address: string, begin: Date) {
    return this.http
      .post(
        'http://localhost:8090/story/insert',
        JSON.stringify({description: description, address: address, begin: begin}),
        {headers: this.headers}
        )
      .toPromise()
      .then(res => res.json() as Story)
      .catch(this.handleError);
  }

  getComments() : Observable<Commenty[]>{
    // ...using get request
    return this.http.get('http://localhost:8090/story/all')
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getNewStories() : Observable<Story[]>{
    return this.http.get('http://localhost:8090/story/all')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
