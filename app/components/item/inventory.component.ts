/**
 * Created by Phenax on 18.07.2016.
 */
import {Component, Input, OnInit}   from "@angular/core";
import {Hero}                       from "../../models/hero/hero.model";
import {Item}                       from "../../models/item/item.model";
import {ItemService}                from "../../services/item.service";
import {Gear}                       from "../../models/item/gear.model";
import {Weapon}                     from "../../models/item/weapon.model";
import {Popup}                      from "../../directives/popup";
import {PopoverComponent}           from "../popover/popover";
import {DND_DIRECTIVES}             from 'ng2-dnd/ng2-dnd';

@Component({
    selector: 'hero-inventory',
    template: `<div class="wrapper container">
                    <div class="row">
                        <div class="container">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="panel-heading"><h2>{{hero._name}}'s equipment</h2></div>
                                </div>
                                <div [ngStyle]="style">
                                    <div class="row" >
                                        <div class="col-md-11" dnd-sortable-container 
                                            (onDropSuccess)="addToEquipment($event)"
                                            [dropZones]="['boxers-zone']">
                                                <div class="col-md-3 col-md-offset-3"
                                                    *ngFor="let item of hero._equip; let i = index" 
                                                    [dragData]="item" (onDropSuccess)="addToEquipment($event)"
                                                    dnd-sortable [sortableIndex]="i">
                                                   
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
                                                        category="{{item._weaponCategory}}"   value="{{item._weaponDamageValue}}">
                                                        <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                                        <my-popover></my-popover>
                                                    </span>
                                                </div>
                                        </div>
                                    </div>       
                                </div>
                            </div>
                    
                            <div class="col-md-6">                    
                                <div class="row">
                                    <div class="panel-heading"><h2>{{hero._name}}'s bag</h2></div>
                                    <div ><button class="btn btn-success btn-block" (click)="createANewItemModal()">Loot Item</button></div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-11" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="bagList"
                                    (onDropSuccess)="itemDrag($event)">
                                        <div class="col-md-2" *ngFor="let item of hero._bag; let i = index" 
                                            dnd-sortable [sortableIndex]="i" [dragData]="item" (onDropSuccess)="itemDrag($event)"
                                            (onDragStart)="currentDrag($event)">
                                            <!--(onDropSuccess)="dragItem($event)"-->
                                            <span popup *ngIf="(item._itemType == 'Gear' && item._itemDonned == false)"
                                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                                type="{{item._itemType}}" donned="{{item._itemDonned}}"
                                                category="{{item._gearCategory}}"   value="{{item._gearDefenseValue}}">
                                                <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                                <my-popover></my-popover>
                                            </span>
                                            <span popup *ngIf="(item._itemType == 'Weapon' && item._itemDonned == false)" 
                                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                                type="{{item._itemType}}" donned="{{item._itemDonned}}" 
                                                category="{{item._weaponCategory}}" value="{{item._weaponDamageValue}}">
                                                <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                                <my-popover></my-popover>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                </div>
             `,
    directives: [Popup, PopoverComponent, DND_DIRECTIVES]

})

export class HeroInventoryComponent implements OnInit {

    @Input() hero:Hero;

    equipmentList:Item[] = [];
    bagList:Item[] = [];

    private style;
    d0:Item;
    d1:Item;
    d2:Item;
    d3:Item;
    d4:Item;
    d5:Item;

    currentItem:Item;

    constructor(private itemService:ItemService) {
        this.d0 = new Gear(0, "No Item", 0, 0, 0, "inv_helmet_leather_raiddruid_k_01", "Helmet", 0);
        this.d1 = new Gear(1, "No Item", 0, 0, 0, "inv_shoulder_leather_raiddruid_k_01", "Shoulders", 0);
        this.d2 = new Gear(2, "No Item", 0, 0, 0, "inv_chest_leather_raiddruid_k_01", "Chest", 0);
        this.d3 = new Gear(3, "No Item", 0, 0, 0, "inv_glove_leather_raiddruid_k_01", "Glove", 0);
        this.d4 = new Gear(4, "No Item", 0, 0, 0, "inv_pant_leather_raiddruid_k_01", "Boots", 0);
        this.d5 = new Weapon(5, "No Item", 0, 0, 0, "inv_hammer_15", "Sword", 0);
        this.d0._itemDonned = true;
        this.d1._itemDonned = true;
        this.d2._itemDonned = true;
        this.d3._itemDonned = true;
        this.d4._itemDonned = true;
        this.d5._itemDonned = true;
        this.equipmentList = [this.d0, this.d1, this.d2, this.d3, this.d4, this.d5];
    }

    ngOnInit() {
        if (this.hero._equip.length <= 0) {
            for (var i = 0; i < this.equipmentList.length; i++) {
                this.equipmentList[i]._heroId = this.hero.id;
            }
            this.hero._equip = this.equipmentList;
        }

        //hero as background
        this.style = {
            'background-image': 'url(' + this.hero._imgURL + ')',
            'background-size': '30%',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        };

    }
    /**
     * call the blizzard api to create an item for this hero
     */
    private createANewItemModal() {
        this.itemService.getBlizzData(this.hero.id).then(i=> {
            if (i != undefined) {
                this.hero._bag.push(i);
            }
        });
    }

    /**
     * get an item from hero´s bag and put this item in a category
     * @param item
     */
    private setItemToHeroEquipment(item:Item) {
        if (item._itemType == "Gear") {
            /*
             "helm", "helmet", "chest", "shoulder", "cape", "glove", "boot", "boots",
             "pant", "belt", "wand", "axe", "staff", "sword", "mail", "bracer", "misc", "shield", "mace",
             "gauntlets", "ring", "shortblade", "shirt"
             */
            var gearItem = item as Gear;
            switch (gearItem._gearCategory) {
                case "Helmet":
                case "Helm":
                    if(this.hero._equip[0]._itemName != "No Item"){
                        this.hero._equip[0]._itemDonned = false;
                        this.hero._bag.push(this.hero._equip[0]);
                    }
                    this.hero._equip[0] = gearItem;
                    break;
                case "Shoulder":
                case "Cape":
                case "Misc":
                    if(this.hero._equip[1]._itemName != "No Item"){
                        this.hero._equip[1]._itemDonned = false;
                        this.hero._bag.push(this.hero._equip[1]);
                    }
                    this.hero._equip[1] = gearItem;
                    break;
                case "Chest":
                case "Belt":
                case "Shirt":
                    if(this.hero._equip[2]._itemName != "No Item"){
                        this.hero._equip[2]._itemDonned = false;
                        this.hero._bag.push(this.hero._equip[2]);
                    }
                    this.hero._equip[2] = gearItem;
                    break;
                case "Glove":
                case "Bracer":
                case "Gauntlets":
                case "Ring":
                    if(this.hero._equip[3]._itemName != "No Item"){
                        this.hero._equip[3]._itemDonned = false;
                        this.hero._bag.push(this.hero._equip[3]);
                    }
                    this.hero._equip[3] = gearItem;
                    break;
                case "Boot":
                case "Boots":
                case "Pant":
                case "Mail":
                    if(this.hero._equip[4]._itemName != "No Item"){
                        this.hero._equip[4]._itemDonned = false;
                        this.hero._bag.push(this.hero._equip[4]);
                    }
                    this.hero._equip[4] = gearItem;
                    break;
                default:
            }

        } else {
            var weaponItem = item as Weapon;
            if(this.hero._equip[5]._itemName != "No Item"){
                this.hero._equip[5]._itemDonned = false;
                this.hero._bag.push(this.hero._equip[5]);
            }
            this.hero._equip[5] = weaponItem;
        }
    }

    /**
     * get an item which will be delete and set a dummy item
     * @param item
     */
    private setDummyItem(item: Item){
        if (item._itemType == "Gear") {
            var gearItem = item as Gear;
            switch (gearItem._gearCategory) {
                case "Helmet":
                case "Helm":
                    this.hero._equip[0] = this.d0;
                    break;
                case "Shoulder":
                case "Cape":
                case "Misc":
                    this.hero._equip[1] = this.d1;
                    break;
                case "Chest":
                case "Belt":
                case "Shirt":
                    this.hero._equip[2] = this.d2;
                    break;
                case "Glove":
                case "Bracer":
                case "Gauntlets":
                case "Ring":
                    this.hero._equip[3] = this.d3;
                    break;
                case "Boot":
                case "Boots":
                case "Pant":
                case "Mail":
                    this.hero._equip[4] = this.d4;
                    break;
                default:
            }

        } else {
            //var weaponItem = item as Weapon;
            this.hero._equip[5] = this.d5;

        }
    }


    /**
     * Drag an item from the equipmentList to the bagList
     * @param item
     */
    private itemDrag(item:Item) {
        if(this.currentItem._itemDonned){
            //console.log("1" + item._itemName);
            item._itemDonned = false;
            this.hero._bag.push(item);
            this.setDummyItem(item);
        }

    }

    /**
     * Drag an item from the bagList to the equipmentList
     * @param item
     */
    private addToEquipment(item:Item) {
        if(!this.currentItem._itemDonned){
            //console.log("2 " + item._itemName + " state: " + item._itemDonned);
            item._itemDonned = true;
            this.setItemToHeroEquipment(item);
            let index:number = this.hero._bag.indexOf(item, 0);
            if (index > -1) {
                this.hero._bag.splice(index, 1)
            }
            if(this.hero._bag.length <= 0) {
                this.createANewItemModal();
            }
        }


    }

    private currentDrag(item:Item) {
        //console.log("current drag item " + item._itemDonned);
        this.currentItem = item;
    }

    private loggingItems(items:Item[], nameOfTheList:string) {
        for (var i = 0; i < items.length; i++) {
            console.log(nameOfTheList + ": " + items[i].id + " name: " + items[i]._itemName);
        }
    }

}