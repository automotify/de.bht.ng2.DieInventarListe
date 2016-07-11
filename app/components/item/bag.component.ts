/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */
import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../../models/hero/hero.model";
import {Item} from "../../models/item/item.model";
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
                            <img src="http://media.blizzard.com/wow/icons/56/{{item.icon}}.jpg" height="100%" /> {{item.name}}
                        </li>
                    </ul>
               </div>`,
    directives: [NewItemComponent]
})

export class BagComponent implements OnInit{

    private bagList = [];

    @Input()
    private hero           : Hero;


    private createANewItem  : boolean;

    private selectedItem    : Item;

    constructor(private router: Router, private itemService: ItemService) {
        this.createANewItem = false;
    }
    ngOnInit(){
        this.getAllItemsFromHero();
        //this.getBlizzItem();
    }
    /*
    private getBlizzItem(){
        this.itemService.getBlizzData()
            .then(item => this.bagList.push(item));
    }*/

    private getAllItemsFromHero(){

        for(var i = 0; i < this.hero._bag.length; i++ ){
            //console.log(this.hero._bag[i]);
            this.itemService.getItem(this.hero._bag[i])
                .then(item => this.bagList.push(item));
        }


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