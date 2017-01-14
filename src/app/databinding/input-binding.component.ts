import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  ipVal = 'Android';

  @Input() backColor  = '#ff0000';

  constructor() { }

  ngOnInit() {
  }

}
