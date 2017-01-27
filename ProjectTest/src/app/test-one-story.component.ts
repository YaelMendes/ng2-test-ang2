/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {DataService} from "./data.service";
import {Commenty} from "./comment";
import {Story} from "./story";



// Component decorator
@Component({
  selector: 'comment-list',
  template: `
             <li *ngFor="let st of stories">
           <span>{{st.description}}</span>
           <br/>
            </li>
    `,

})
// Component class
export class CommentListComponent implements OnInit {
  // Constructor with injected service
  constructor(
    private commentService: DataService
  ){}
  // Local properties
  stories: Story[];


  ngOnInit(){
    // Load comments
    this.loadStories();
  }

  loadStories(){
    // Get all comments
    this.commentService.getNewStories()
      .subscribe(
        comments => this.stories = comments, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }





}
