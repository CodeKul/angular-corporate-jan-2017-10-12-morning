import { MenuBarService } from './menu-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
  // providers: [MenuBarService]
})
export class ServiceComponent implements OnInit {

  menus = [];
  constructor(
    private menuBar?: MenuBarService
  ) {

  }

  ngOnInit() {
    this.menus = this.menuBar.getMenus();
  }

  newMenu(menu: string) {
    this.menuBar.addMenu(menu);
  }
}
