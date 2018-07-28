import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { AcademicsComponent } from './academics/academics.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
    {path:'' ,component:HomeComponent},
    {path:'about' ,component:AboutComponent},
    {path:'event' ,component:EventsComponent},
    {path:'academics' ,component:AcademicsComponent},
    {path:'contact' ,component:ContactComponent},
    {path:'gallery' ,component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
}) 
export class RouteModule {

  constructor() { }
}
