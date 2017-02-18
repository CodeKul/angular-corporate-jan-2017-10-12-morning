import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';

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
        userName: [''],
        email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      password: ['', Validators.required],
      country : ['India'],
      nums : formBuilder.array([
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
}
