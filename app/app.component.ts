/**
 * A sample component using the Inventarlist directive
 */
import {Component}          from 'angular2/core';
import {HeroListComponent}  from './hero/hero-list.component';


@Component({
    selector: 'inventarlist-app',
    template: `<h1>{{name}}</h1>
               <hero-list></hero-list>
               `,
    directives: [HeroListComponent]
})

export class AppComponent {
    name:string;

    constructor() {
        this.name = "Die Inventarliste";
    }
}