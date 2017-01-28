
import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {Story} from "./story";
import {Response, Http} from "@angular/http";



// Component decorator
@Component({
  selector: 'comment-list',
  template: `
   <!--      <span>{{oneStory | json}}</span>-->
         <span>{{oneStory ?.description}}</span>
         <span>{{oneStory ?.begin | date:'d MMMM y'}}</span>
           <br/>
           
            <li *ngFor="let st of stories">
           <span>{{st.description}}</span>
            <span>{{st.begin | date:'d MMMM y'}}</span>
             <span>{{st.address.firstLine}}</span>
           <br/>
            </li>
    `,

})
// Component class
export class CommentListComponent implements OnInit {
  // Constructor with injected service
  constructor(
    private commentService: DataService,
    public http: Http
  ){}

  stories: Story[];
  oneStory: Story;

  ngOnInit(){
    this.loadStori();
    this.loadStories();
  }

  loadStories(){
    this.commentService.getNewStories()
      .subscribe(
        comments => this.stories = comments, //Bind to view
        err => { console.log(err);
        });
  }

  loadStori(){
    this.http.get('http://localhost:8090/story/one')
      .subscribe((res: Response) => {
         this.oneStory = res.json() as Story;
         });

    console.log('calling oneStory....:'+this.oneStory);

    /*  .subscribe(
        comments => this.oneStory = comments, //Bind to view
        err => { console.log(err);
        });*/
  }



}
