import { Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [AccountComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
