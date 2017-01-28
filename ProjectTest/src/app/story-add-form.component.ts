import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {Story} from "./story";

@Component({
  selector: 'demo-form-sku',
  template: `
     <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku</h2>
      <form [formGroup]="myFormGroup"
            (ngSubmit)="onSubmit(myFormGroup.value)"
            class="ui form">
  
             <div *ngIf="!myFormGroup.valid"
               class="ui error message">Form is invalid</div>

             <div class="field" [class.error]="!skuControl.valid && skuControl.touched">>
             <label for="skuInput">SKU</label>
             <input  type="text"
                     id="skuInput"
                     placeholder="enter SKU here ..."
                     [formControl]="skuControl">
                     <div *ngIf="skuControl.hasError('required')"
                         class="ui error message">SKU is required</div>
             </div>
            
           <!--  <div class="field" [class.error]="!createdStory.description.valid">>
             <label for="storyInput">Story description</label>
             <input  type="text"
                     id="storyInput"
                     placeholder="enter SKU here ..."
                     [formControl]="createdStory">
                     <div *ngIf="createdStory.description.hasError('required')"
                         class="ui error message">description is required</div>
             </div>-->
            
             <button type="submit" class="ui button">Submit</button>
           </form>
       </div> 
 `
})
export class DemoFormSku {
  myFormGroup: FormGroup;
  skuControl: AbstractControl;

  createdStory: Story;

  public constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group(
      {'sku' : ['ABCD 1233', Validators.required]}
    );
    this.skuControl = this.myFormGroup.controls['sku'];

    this.createdStory = new Story("", "", new Date(1979,10,27));
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
