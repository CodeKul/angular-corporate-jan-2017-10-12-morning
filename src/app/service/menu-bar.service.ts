import { Injectable } from '@angular/core';
import { MouseService } from './mouse.service';

@Injectable()
export class MenuBarService {

  menus = [];

  constructor(
    private mouse : MouseService
  ) { }

  getMenus(){
    return this.menus;
  }

  addMenu(menu : string) {
    this.menus.push(menu);
  }
}
