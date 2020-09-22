import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mochaAngular';
  value = 0;

  onIncrementClick() {
    this.value = Math.min(100, ++this.value);
  }

  onDecrementClick() {
    this.value = Math.max(-100, --this.value);
  }
}
