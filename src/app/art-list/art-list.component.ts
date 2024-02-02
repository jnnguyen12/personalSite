import { Component } from '@angular/core';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent {
    
  imgLinks: string[] = [
    '../assets/img/fishgirl.JPG',
    '../assets/img/eye.jpeg',
    '../assets/img/girls.JPG',
    '../assets/img/ocean.jpg',
    '../assets/img/orchid.png',
    '../assets/img/hands.jpg',
  ]
}
