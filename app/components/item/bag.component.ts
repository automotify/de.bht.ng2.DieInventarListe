/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */
import { Component, Input } from "@angular/core";
import { Router }           from "@angular/router"

import {Hero}   from "../../models/hero/hero.model";
import {Item}   from "../../models/item/item.model";
import {ItemService} from "../../services/item.service";
import {NewItemComponent} from "./new-item.component";

@Component({
    selector: 'heros-bag',
    template: `<div id="bag">
                    <h2>{{hero._name}}'s bag </h2>
                    <button (click)="createANewItemModal()">Create a new item</button>
                    <new-item 
                        *ngIf="createANewItem" 
                        [hero]="hero" 
                        (modal)="backFromNewItemCreation($event)">
                    </new-item>
                    <ul class="items"> 
                        <li class="item" *ngFor="let item of bagList" [class.selected]="item === selectedItem" (click)="onSelect(item)">
                            <span class="badge">{{item.id}}</span> {{item._itemName}}
                        </li>
                    </ul>
               </div>`,
    directives: [NewItemComponent]
})

export class BagComponent {

    private bagList         : Item[];

    @Input() hero           : Hero;
    private createANewItem  : boolean;

    private selectedItem    : Item;

    constructor(private router: Router, private itemService: ItemService) {
        this.getAllItemsFromHero();
        this.createANewItem = false;
    }
    
    private getAllItemsFromHero(){
        this.itemService.getAllItemsFromHero(this.hero.id)
            .then(items => this.bagList = items);
    }

    private onSelect(item: Item) {
        this.selectedItem = item;
        this.router.navigate(['/item', this.selectedItem.id]);
    }

    private createANewItemModal(){
        this.createANewItem = true;
    }

    private backFromNewItemCreation(){
        this.createANewItem = false;
    }
    
}