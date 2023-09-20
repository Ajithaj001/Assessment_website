import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isvisible:boolean= false
  @Output() sidenavToggle = new EventEmitter<boolean>();

  toggleSidenav() {
    this.isvisible = !this.isvisible;
    this.sidenavToggle.emit(this.isvisible);
    console.log(this.isvisible);
    

   
    

  }

}
