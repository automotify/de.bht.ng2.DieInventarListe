/**
 * A sample component using the Inventarlist directive
 * @author Andreas Burger
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'inventarlist-app',
    template: '<h1>{{name}}</h1>'
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = "Die Inventarliste";
    }
}