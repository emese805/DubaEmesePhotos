import { Component, OnInit } from '@angular/core';

export interface Gallery {
  galleryName: string;
  folderName: string;
  defaultPicture: number;
  id: string;
  pictures: Picture[];
}

export interface Picture {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public galleryStructure: Gallery[];

  constructor() {
    this.galleryStructure = [
      {
        galleryName: 'Természet',
        folderName: '../../assets/picture/nature/',
        defaultPicture: 1,
        id: this.randomID(),
        pictures: [
          { url: 'DSC_3660.jpg', caption: 'Kép 1'},
          { url: 'DSC_3674.jpg', caption: 'Kép 2'},
          { url: 'DSC_3682.jpg', caption: 'Kép 3'},
          { url: 'DSC_3698.jpg', caption: 'Kép 3'},
          { url: 'DSC_3784.jpg', caption: 'Kép 4'},
          { url: 'DSC_4304.jpg', caption: 'Kép 4'},
          { url: 'DSC_4486.jpg', caption: 'Kép 4'},
          { url: 'DSC_4506.jpg', caption: 'Kép 4'},
          { url: 'DSC_4609.jpg', caption: 'Kép 4'},
          { url: 'DSC_5840.jpg', caption: 'Kép 4'},
          { url: 'DSC_5874.jpg', caption: 'Kép 4'},
          { url: 'DSC_6420.jpg', caption: 'Kép 4'},
          { url: 'DSC_6459.jpg', caption: 'Kép 4'},
          { url: 'DSC_6462.jpg', caption: 'Kép 4'},
          { url: 'DSC_6623.jpg', caption: 'Kép 4'},
          { url: 'DSC_6726.jpg', caption: 'Kép 4'}
        ]
      },
      {
        galleryName: 'Gyerekek',
        folderName: '../../assets/picture/children/',
        defaultPicture: 6,
        id: this.randomID(),
        pictures: [
          { url: 'DSC_5122.jpg', caption: 'Kép 2'},
          { url: 'DSC_5165.jpg', caption: 'Kép 3'},
          { url: 'DSC_5199.jpg', caption: 'Kép 3'},
          { url: 'DSC_5416.jpg', caption: 'Kép 3'},
          { url: 'DSC_5417.jpg', caption: 'Kép 3'},
          { url: 'DSC_6042.jpg', caption: 'Kép 3'},
          { url: 'DSC_6074.jpg', caption: 'Kép 3'},
          { url: 'DSC_6166.jpg', caption: 'Kép 3'},
          { url: 'DSC_6221.jpg', caption: 'Kép 3'},
          { url: 'DSC_6262.jpg', caption: 'Kép 3'},
          { url: 'DSC_6316.jpg', caption: 'Kép 3'},
          { url: 'DSC_6324.jpg', caption: 'Kép 3'},
          { url: 'DSC_6333.jpg', caption: 'Kép 4'}
        ]
      },
      {
        galleryName: 'Portré',
        folderName: '../../assets/picture/people/',
        defaultPicture: 1,
        id: this.randomID(),
        pictures: [
          { url: 'DSC_3454.jpg', caption: 'Kép 1'},
          { url: 'DSC_4971.jpg', caption: 'Kép 2'},
          { url: 'DSC_5592.jpg', caption: 'Kép 3'},
          { url: 'DSC_5593.jpg', caption: 'Kép 3'},
          { url: 'tami.jpg', caption: 'Kép 3'},
          { url: 'DSC_5834.jpg', caption: 'Kép 4'}
        ]
      },
      {
        galleryName: 'Életkép',
        folderName: '../../assets/picture/streetpicture/',
        defaultPicture: 1,
        id: this.randomID(),
        pictures: [
          { url: 'DSC_5763.jpg', caption: 'Kép 1'},
          { url: 'DSC_5768.jpg', caption: 'Kép 1'},
          { url: 'DSC_5479.jpg', caption: 'Kép 2'},
          { url: 'DSC_5518.jpg', caption: 'Kép 3'},
          { url: 'DSC_5533.jpg', caption: 'Kép 3'},
          { url: 'DSC_5541.jpg', caption: 'Kép 3'},
          { url: 'DSC_5568.jpg', caption: 'Kép 3'},
          { url: 'DSC_5625.jpg', caption: 'Kép 4'}
        ]
      }
    ];
  }
  ngOnInit() {}

  randomID = function() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
