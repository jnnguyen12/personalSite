import { Component } from '@angular/core';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent {
    
  imgLinks: {name: string, medium: string, year: number, link: string}[] = [
    {name: "Fish girl", medium: 'Watercolor on canvas', year: 2019, link: 'assets/img/fishgirl.JPG'},
    {name: "Eye", medium: 'Oil on canvas', year: 2020, link: 'assets/img/eye.jpeg'},
    {name: "Girls on bicycle", medium: 'Watercolor', year: 2018, link: 'assets/img/girls.JPG'},
    {name: "Ocean", medium: 'Oil on canvas', year: 2019, link: 'assets/img/ocean.jpg'},
    {name: "Orchid", medium: 'Micron Ink', year: 2020, link: 'assets/img/orchid.png'},
    {name: "Pottery hands", medium: 'Watercolor', year: 2018, link: 'assets/img/hands.jpg'},
  ]
}
