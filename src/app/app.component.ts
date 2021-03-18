import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./assets/styles.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
