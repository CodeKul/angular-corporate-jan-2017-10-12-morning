import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  NgForm,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  countries = [
    'India', 'Japan', 'Chiana', 'Sri Lanka'
  ];
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userGroup: formBuilder.group({
        userName: ['', this.sampleValidatorV2('userName'), this.sampleAsync],
        email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      password: ['', [Validators.required, this.sampleValidatorV2('password')]],
      country: ['India'],
      nums: formBuilder.array([
        new FormControl('9762548833'),
        new FormControl('9762548834')
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

  addNewNum() {
    (<FormArray>this.myForm.controls['nums']).push(new FormControl())
  }

  sampleValidator(fc: FormControl): { [s: string]: boolean } {
    return fc.value === 'a' ? { sample: true } : null;
  }

  sampleValidatorV2(name: string): ValidatorFn {
    if (name === 'userName') {
      return (control: AbstractControl): { [key: string]: any } => {
        return control.value === 'a' ? { validation: true } : null;
      };
    }
    if(name === 'password' ) {
      return (control: AbstractControl): { [key: string]: any } => {
        return control.value === 'b' ? { validation: true } : null;
      };
    }
  }

  sampleAsync(control : FormControl) : Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout( () => {
        if(control.value === 'a') resolve({valid : true})
        else resolve(null);
      },1500);
    });
  }
}
