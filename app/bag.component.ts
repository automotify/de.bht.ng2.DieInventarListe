/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */

import {Component}  from "angular2/core";
import {Bag}        from "./bag";
import {Item}       from "./item";

@Component({
    selector: 'my-bag',
    template: `<h2>Unselected Items! - bag</h2>
                <ul>
                <li *ngFor="#item of bag.itemList">{{item.id}}, {{item.name}}, {{item.type}}, {{item.itemValue}}, {{item.itemValueName}} </li>
                </ul>
    `
})

export class BagComponent {
    private bag  :Bag;

    /**
     * Constructor with sample bag and sample items added to it as dummys
     */
    constructor(){
        this.bag = new Bag(5);
        this.bag.addItem(new Item(1,'swordA','hand','coin',50));
        this.bag.addItem(new Item(2,'swordB','hand','coin',50));
        this.bag.addItem(new Item(3,'swordC','hand','coin',50));
        this.bag.addItem(new Item(4,'swordD','hand','coin',50));
        this.bag.addItem(new Item(5,'swordE','hand','coin',50));
        this.bag.addItem(new Item(6,'swordF','hand','coin',50)); // in console view, it shows that it wasnt added to the bag.itemList
    }
}