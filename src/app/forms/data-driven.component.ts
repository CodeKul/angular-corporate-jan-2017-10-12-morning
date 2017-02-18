import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

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
      country : ['India']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
