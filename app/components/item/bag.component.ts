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
import {Gear} from "../../models/item/gear.model";
import {Weapon} from "../../models/item/weapon.model";
import {Popup} from "../../directives/popup";
import {PopoverComponent} from "../popover/popover";

@Component({
    selector: 'heros-bag',
    template: `<div id="bag">
                    <h2>{{hero._name}}'s bag </h2>
                    <button (click)="createANewItemModal()">Loot Item</button>
                    <ul class="items"> 
                        <li class="item" *ngFor="let item of bagList">
                            <span popup *ngIf="item._itemType == 'Gear'"
                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                type="{{item._itemType}}" donned="{{item._itemDonned}}"
                                category="{{item._gearCategory}}"   value="{{item._gearDefenseValue}}">
                                <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                <my-popover></my-popover>
                            </span>
                            <span popup *ngIf="item._itemType == 'Weapon'" 
                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                type="{{item._itemType}}" donned="{{item._itemDonned}}" 
                                category="{{item._weaponCategory}}" value="{{item._weaponDamageValue}}">
                                <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                <my-popover></my-popover>
                            </span>
                        </li>
                    </ul>
               </div>`,
    directives: [NewItemComponent, Popup, PopoverComponent]
})

export class BagComponent implements OnInit {

    private bagList : Item[];

    @Input()
    private hero:Hero;


    private createANewItem:boolean;

    private selectedItem:Item;

    constructor(private router:Router, private itemService:ItemService) {
        this.createANewItem = false;
    }

    ngOnInit() {
        this.getAllItemsFromHero();
    }

    private getAllItemsFromHero() {
        this.itemService.getAllItemsFromHero(this.hero.id)
            .then(items =>  this.bagList = items)
    }

    private randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /*
    private onSelect(item:Item) {
        this.selectedItem = item;
        this.router.navigate(['/item', this.selectedItem.id]);
    }*/


    private createANewItemModal() {
        //this.createANewItem = true;
        var rnd = this.randomIntFromInterval(1001, 150000);
        var newItem = [];

        this.itemService.getBlizzData(rnd)
            .then(item => {
                    newItem.push(item);
                    //console.log(newItem[0].name);
                    //console.log(item);
                    if(newItem[0].equippable) {

                        /*
                         ToDo: set item._category from the icon string
                         */

                        if(newItem[0].weaponInfo == undefined) {
                            //console.log("this item is a gear");
                            var gearItem = new Gear(this.itemService.getNextFreeIndex(), newItem[0].name,
                                newItem[0].itemLevel, this.hero.id, newItem[0].id, newItem[0].icon, "category",
                                newItem[0].armor);
                            //console.log(gearItem)
                            this.itemService.save(gearItem)
                        } else {
                            //console.log("this item is a weapon");
                            var weaponItem = new Weapon(this.itemService.getNextFreeIndex(), newItem[0].name,
                                newItem[0].itemLevel, this.hero.id, newItem[0].id, newItem[0].icon, "category",
                                newItem[0].weaponInfo.dps);
                            //console.log(weaponItem)
                            this.itemService.save(weaponItem)
                        }
                    } else {
                        //console.log("not an item..")
                    }

                    this.getAllItemsFromHero();

                },
                err=>this.createANewItemModal()
            );
    }
    /*
    private backFromNewItemCreation() {
        this.createANewItem = false;
    }*/

}