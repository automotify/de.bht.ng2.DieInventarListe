/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */

import {Component}  from "angular2/core";
import {Bag}        from "./bag";
import {Item}       from "./item";
import {ItemDetailComponent}       from "./item-detail.component";


@Component({
    selector: 'my-bag',
    template: `<h2>Unselected Items! - bag</h2>
                <ul class="items">
                    <li *ngFor="#item of bag.itemList"  [class.selected]="item === selectedItem" (click)="onSelect(item)" class="items">
                        <label class="badge">{{item.id}}</label> {{item.name}}
                    </li>
                </ul>
                <item-detail *ngIf="selectedItem" [item]="selectedItem"></item-detail>
    `,
    directives: [ItemDetailComponent]
})

export class BagComponent {
    private bag  :Bag;
    private selectedItem: Item;

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

    private onSelect(item:Item){
        this.selectedItem = item;
    }
}