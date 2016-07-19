/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */
import {Dragula}                    from "ng2-dragula/ng2-dragula";
import {Component, Input, OnInit}   from "@angular/core";
import {Router}                     from "@angular/router";
import {Hero}                       from "../../models/hero/hero.model";
import {Item}                       from "../../models/item/item.model";
import {ItemService}                from "../../services/item.service";
import {NewItemComponent}           from "./new-item.component";
import {Gear}                       from "../../models/item/gear.model";
import {Weapon}                     from "../../models/item/weapon.model";
import {Popup}                      from "../../directives/popup";
import {PopoverComponent}           from "../popover/popover";

@Component({
    selector: 'heros-bag',
    template: `<div class="wrapper container">
                    <div class="row">
                        <h2 class="text-center">{{hero._name}}'s bag </h2>
                        <div class="col-md-2 col-md-offset-5">
                             <button class="btn btn-success btn-block" (click)="createANewItemModal()">Loot Item</button>                        
                        </div>
                    </div>
                    <div class="row">
                        <div class="container">
                            <div class="col-md-1" *ngFor="let item of bagList" [dragula]='"another-bag"'>
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
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                    </div>
               </div>`,

    directives: [NewItemComponent, Popup, PopoverComponent, Dragula]
})

export class BagComponent implements OnInit {

    public bagList:Item[];

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

    /**
     * call all items from this hero
     */
    private getAllItemsFromHero() {
        this.itemService.getAllItemsFromHero(this.hero.id)
            .then(items => this.bagList = items)
    }

    /*
     private onSelect(item:Item) {
     this.selectedItem = item;
     this.router.navigate(['/item', this.selectedItem.id]);
     }*/

    /**
     * call the blizzard api to create an item for this hero
     */
    private createANewItemModal() {
        /*this.itemService.getBlizzData(this.hero.id, this.itemService.randomIntFromInterval(1001, 150000)).then(i=> {
            if (i != undefined) {
                //console.log(i);
                this.getAllItemsFromHero();
            }
        });*/
    }

}