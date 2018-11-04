import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../gallery.component';
import {faChevronRight, faChevronLeft, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public rightArrow = faChevronRight;
  public leftArrow = faChevronLeft;
  public close = faTimes;

  @Input() album: Album;

  private dom;
  private currentPicture;

  public hideAlbumContainer: boolean;

  constructor() {
    this.hideAlbumContainer = true;
  }

  public nextPic() {
    const image = <HTMLImageElement>this.DOM().getElementsByClassName('image-holder')[0].firstChild;
    this.currentPicture = (this.currentPicture + 1) % this.album.pictures.length;
    image.src = this.album.folderName + this.album.pictures[this.currentPicture].url;
  }
  public prevPic() {
    const image = <HTMLImageElement>this.DOM().getElementsByClassName('image-holder')[0].firstChild;
    this.currentPicture = (this.currentPicture === 0 ? this.album.pictures.length - 1 : this.currentPicture - 1);
    image.src = this.album.folderName + this.album.pictures[this.currentPicture].url;
  }

  private DOM(): HTMLElement {
    if (!this.dom) {
      this.dom = <HTMLElement>document.getElementById(this.album.id);
    }
    return this.dom;
  }

  ngOnInit() {
    this.currentPicture = this.album.defaultPicture;
  }

}
