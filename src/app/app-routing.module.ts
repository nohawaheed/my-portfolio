import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' },
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { state: 'work' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 'contact' },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
