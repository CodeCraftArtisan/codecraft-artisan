import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodecraftNavbar } from './components/codecraft-navbar/codecraft-navbar.component';
import { CodecraftFooter } from './components/codecraft-footer/codecraft-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodecraftNavbar, CodecraftFooter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codecraft-artisan';
}
