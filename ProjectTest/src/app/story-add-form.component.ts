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

             <div class="field" [class.error]="!myFormGroup.controls['sku'].valid && myFormGroup.controls['sku'].touched">
             <label for="skuInput">SKU</label>
             <input  type="text"
                     id="skuInput"
                     placeholder="enter SKU here ..."
                     [formControl]="myFormGroup.controls['sku']">
                     <div *ngIf="myFormGroup.controls['sku'].hasError('required')"
                         class="ui error message">SKU is required</div>
             </div>
            
            <!-- description --> 
             <div class="field" [class.error]="!myFormGroup.controls['description'].valid">>
             <label for="descriptionInput">Story description</label>
             <input  type="text" required
                     id="descriptionInput"
                     placeholder="enter description here ..."
                     [formControl]="myFormGroup.get('description')"
                     [(ngModel)]="description">
             </div>
             
              <!-- address --> 
             <div class="field" [class.error]="!myFormGroup.controls['address'].valid">>
             <label for="addressInput">Story address</label>
             <input  type="text" required
                     id="addressInput"
                     placeholder="enter address here ..."
                     [formControl]="myFormGroup.get('address')"
                     [(ngModel)]="address">
             </div>
             
              <!-- begin --> 
             <div class="field" [class.error]="!myFormGroup.controls['begin'].valid">>
             <label for="beginInput">Story begin</label>
             <input  type="date" required
                     id="beginInput"
                     placeholder="enter begin here ..."
                     [formControl]="myFormGroup.get('begin')"
                     [(ngModel)]="begin">
             </div>
            
             <button type="submit" class="ui button">Submit</button>
           </form>
       </div> 
 `
})
export class DemoFormSku {
  myFormGroup: FormGroup;

  description: string;
  address: string;
  begin: Date;

  public constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group(
      {
        'sku' : ['', Validators.required],
        'description' : ['', Validators.required],
        'address' : ['', Validators.required],
        'begin' : ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  addStory(description: string, address: string, begin: Date): void {
    console.log('you addStory value:', description);
    console.log('you addStory value:', address);
    console.log('you addStory value:', begin);
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);

    console.log('you submitted value:',   form.get('description'));
    console.log('you submitted value:',   form.get('address'));
    console.log('you submitted value:',   form.get('begin'));


  }
}
