/**
 * A sample component using the Inventarlist directive
 * @author Andreas Burger
 */
import {Component} from 'angular2/core';
import {Bag} from './bag.component';
import {EquipmentComponent} from "./equipment.component";

@Component({
    selector: 'inventarlist-app',
    template: `<h1>{{name}}</h1>
               <my-bag></my-bag>
               <my-equipment></my-equipment>`,
    directives: [Bag, EquipmentComponent]
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = "Die Inventarliste";
    }
}