import { Routes } from '@angular/router';
import { CodecraftHomePageComponent } from './components/codecraft-home-page/codecraft-home-page.component';
import { CodecraftAboutUsComponent } from './components/codecraft-about-us/codecraft-about-us.component';
import { CodecraftContactComponent } from './components/codecraft-contact/codecraft-contact.component';

export const routes: Routes = [
    { path: '', component: CodecraftHomePageComponent },
    { path: 'about-us', component: CodecraftAboutUsComponent },
    { path: 'contact', component: CodecraftContactComponent },
];
