import { BComponent } from './b/b.component';
import { Component } from '@angular/core';
import { AComponent } from './a/a.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-SandBox';
}
