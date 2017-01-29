import { MenuBarService } from './menu-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-other',
  templateUrl: './some-other.component.html',
  styleUrls: ['./some-other.component.css']
  // providers : [MenuBarService]
})
export class SomeOtherComponent implements OnInit {

  menus = [];
  constructor(
    private menuBar : MenuBarService
  ) { }

  ngOnInit() {
    this.menus = this.menuBar.getMenus();
  }

  newMenu(menu : string) {
    this.menuBar.addMenu(menu);
  }

}
