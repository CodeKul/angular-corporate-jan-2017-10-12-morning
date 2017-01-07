import { ServiceFirstService } from './../service-first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist',
  templateUrl: './frist.component.html',
  styleUrls: ['./frist.component.css']
})
export class FristComponent implements OnInit {

  constructor(private service : ServiceFirstService) { }

  ngOnInit() {
  }

}
