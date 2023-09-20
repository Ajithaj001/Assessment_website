import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultshow:boolean= true
 isShown:boolean | undefined;
  title = 'Assessment';
  showButton: boolean = false;
  constructor(){
    
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolling down
    this.showButton = window.scrollY > 30;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  isNavVisible(val:boolean){
   this.isShown= val 
   
   console.log(this.isShown);
   
    
  }
  
  
}
