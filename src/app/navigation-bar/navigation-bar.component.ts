import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  home = 'Kezdőlap';
  new_project = 'Új projekt';
  blog = 'Blog';
  gallery = 'Galéria';
  about = 'Rólam';
  contact = 'Kapcsolat';
  constructor() {  }
  ngOnInit() {
  }
}
