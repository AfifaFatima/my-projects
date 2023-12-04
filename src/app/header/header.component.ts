import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isFeaturesDropdownOpen = false;

  toggleDropdown() {
    this.isFeaturesDropdownOpen = !this.isFeaturesDropdownOpen;
  }
}
