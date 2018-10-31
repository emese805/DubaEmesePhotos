import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {NewProjectComponent} from './new-project/new-project.component';

const navigation: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'gallery', component: GalleryComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(navigation)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
