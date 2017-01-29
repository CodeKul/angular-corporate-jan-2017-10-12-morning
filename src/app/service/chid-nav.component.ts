import { MenuBarService } from './menu-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chid-nav',
  template: `
    <ul *ngFor="let menu of menus">
      <li>{{menu}}</li>
    </ul>

  `,
  styles: []
})
export class ChidNavComponent  {

  constructor(
    private menuBar : MenuBarService
  ) { }


}
