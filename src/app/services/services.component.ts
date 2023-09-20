import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('imageAnimation', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-out')),
    ]),
  ],
})

export class ServicesComponent {
  images: string[] = [
   '../assets/service1.jpg',
    '../assets/service2.jpg',
    '../assets/service3.jpg',
    '../assets/service4.jpg',
    
  ];
  activeImage: number = 0;

  ngOnInit() {
    
    setInterval(() => {
      this.activeImage = (this.activeImage + 1) % this.images.length;
    }, 3000); 
  }
 

}
