import { Component, OnInit } from '@angular/core';
import { faHome, faUserEdit, faImages, faAddressCard, faInfo } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {
  faHome = faHome;
  faUserEdit = faUserEdit;
  faImages = faImages;
  faAddressCard = faAddressCard;
  faInfo = faInfo;
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
