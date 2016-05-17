/**
 * A sample component using the Inventarlist directive
 * @author Andreas Burger
 */
import {Component}          from 'angular2/core';
import {Hero, HeroComponent}from "./hero/index";
import {BagComponent}       from './bag/index';
import {EquipmentComponent} from "./equipment/index";

@Component({
    selector: 'inventarlist-app',
    template: `<h1>{{name}}</h1>
               <hero-tag></hero-tag>
               <my-bag></my-bag>
               <my-equipment></my-equipment>
               `,
    directives: [BagComponent, EquipmentComponent, HeroComponent]
})

export class AppComponent {
    name: string;

    constructor() {
        this.name = "Die Inventarliste";
    }
}