import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenuComponent,
    AccountComponent,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
