import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxAreaComponent } from "./box-area/box-area.component";
import { TimelineComponent } from "./timeline/timeline.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [BoxAreaComponent, TimelineComponent]
})
export class AppComponent {
  title = 'interactive_one_pager';
}
