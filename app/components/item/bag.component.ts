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
import {getCanActivateHook} from "@angular/router-deprecated/esm/src/lifecycle/route_lifecycle_reflector";

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
                        <div class="col-md-1" *ngFor="let item of bagList">
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
                    <div class="row">
                        
                    </div>
               </div>`,
    directives: [NewItemComponent, Popup, PopoverComponent]
})

export class BagComponent implements OnInit {

    private bagList:Item[];

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
            .then(items => this.bagList = items)
    }

    private randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /*
     private onSelect(item:Item) {
     this.selectedItem = item;
     this.router.navigate(['/item', this.selectedItem.id]);
     }*/

    private capitalizeFirstLetter(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    private createANewItemModal() {
        //this.createANewItem = true;
        var rnd = this.randomIntFromInterval(1001, 150000);

        this.itemService.getBlizzData(rnd)
            .then(item => {
                //if (item.indexOf("err") > -1) {
                    //console.log("error");
                    //this.createANewItemModal();
                //} else {
                    //console.log("item");
                    console.log(item);
                    if (item.equippable) {

                        /*
                         ToDo: catch the get error if the blizzard api cannot found an item
                         ToDo: implement this method in item.service
                         */
                        var category = "";
                        let string = item.icon;
                        let subStringArray = ["helm", "helmet", "chest", "shoulder", "cape", "glove", "boot", "boots",
                            "pant", "belt", "wand", "axe", "staff", "sword", "mail", "bracer", "misc"];
                        for(var i = 0; i < subStringArray.length; i++){
                            if (string.indexOf(subStringArray[i]) > -1)
                                category = this.capitalizeFirstLetter(subStringArray[i]);
                        }

                        if (item.weaponInfo == undefined) {
                            if (item.armor == 0) {
                                //throw "try again2.."
                                this.createANewItemModal();
                            } else {
                                //console.log("this item is a gear");
                                var gearItem = new Gear(this.itemService.getNextFreeIndex(), item.name,
                                    item.itemLevel, this.hero.id, item.id, item.icon, category,
                                    item.armor);
                                //console.log(gearItem)
                                this.itemService.save(gearItem)
                            }
                        } else {
                            //console.log("this item is a weapon");
                            var weaponItem = new Weapon(this.itemService.getNextFreeIndex(), item.name,
                                item.itemLevel, this.hero.id, item.id, item.icon, category,
                                item.weaponInfo.dps);
                            //console.log(weaponItem)
                            this.itemService.save(weaponItem)
                        }
                    } else {
                        //console.log("not an item..")
                        //throw "try again2.."
                        this.createANewItemModal();
                    }

                    this.getAllItemsFromHero();
                //}

            }).catch(function (e) {
            console.log("HalloFehler " + e);
            //this.createANewItemModal(); // == null --> second To.Do
        });
    }

}