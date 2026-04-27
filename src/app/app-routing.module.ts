import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
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

const routerOptions: ExtraOptions = {
  // Enables scrolling to anchors (e.g., /page#section1)
  anchorScrolling: 'enabled',
  // restores the previous scroll position on back navigation
  scrollPositionRestoration: 'enabled',
  // Set [x, y] offset. Adjust the 'y' value to match your header height.
  scrollOffset: [0, 56],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
