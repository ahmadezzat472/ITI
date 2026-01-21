import { Component, signal } from '@angular/core';

import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Home],
})
export class App {
  protected readonly title = signal('first-project');
}
