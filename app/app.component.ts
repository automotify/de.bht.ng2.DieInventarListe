import { Component }                 from '@angular/core';
import {HTTPTestComponent} from './http/http-test.component'
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
    <div style="padding-left:50px;margin-top:10px">
  <h2>Test Blizzard Items</h2>
  <h3>HTTP GET</h3>
  <br/>
  <!-- <contact-list></contact-list> -->
    <header class="main">
      <router-outlet></router-outlet>
      <http-test></http-test>
  </header>
</div>
  `,
    directives: [ROUTER_DIRECTIVES, HTTPTestComponent]
})


export class AppComponent{
    title       : string;
    developers  : string;

    constructor() {
        this.title = "Die Inventarliste";
        this.developers = "Andreas Burger | András Bucsi | Daniel Schleußner";
    }
}