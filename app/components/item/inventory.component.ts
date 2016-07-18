/**
 * Created by Phenax on 18.07.2016.
 */
import {Component, Input, OnInit}   from "@angular/core";
import {Router}                     from "@angular/router";
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
                                                    *ngFor="let item of equipmentList; let i = index" 
                                                    [dragData]="item" (onDropSuccess)="addToEquipment($event)"
                                                    dnd-sortable [sortableIndex]="i">
                                                   
                                                    <span><img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" /></span> 
                                                      
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
                                    <div class="col-md-11" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="bagList">
                                        <div class="col-md-2" *ngFor="let item of bagList; let i = index" 
                                            dnd-sortable [sortableIndex]="i" [dragData]="item" (onDragSuccess)="itemDrag($event)">
                                            <span popup *ngIf="item._itemType == 'Gear'"
                                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                                type="{{item._itemType}}" donned="{{item._itemDonned}}"
                                                category="{{item._gearCategory}}"   value="{{item._gearDefenseValue}}"
                                                [hidden]="item._itemDonned == true">
                                                <img src="http://media.blizzard.com/wow/icons/56/{{item._blizzItemIcon}}.jpg" height="100%" />
                                                <my-popover></my-popover>
                                            </span>
                                            <span popup *ngIf="item._itemType == 'Weapon'" 
                                                name="{{item._itemName}}" level="{{item._itemLevel}}" 
                                                type="{{item._itemType}}" donned="{{item._itemDonned}}" 
                                                category="{{item._weaponCategory}}" value="{{item._weaponDamageValue}}"
                                                [hidden]="item._itemDonned == true">
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

    d0: Item; d1: Item; d2: Item; d3: Item; d4: Item; d5: Item;

    equipmentList   :Item[] = [];
    bagList         :Item[] = [];

    private e : Boolean[] = [false, false, false, false, false, false];
    private style;

    constructor(private router:Router, private itemService:ItemService) {}

    ngOnInit() {


        this.getAllItemsFromHero();
        this.d0 = new Gear(0, "No Item" , 0, this.hero.id, 0, "inv_helmet_leather_raiddruid_k_01", "Helmet", 0);
        this.d1 = new Gear(1, "No Item" , 0, this.hero.id, 0, "inv_shoulder_leather_raiddruid_k_01", "Shoulders", 0);
        this.d2 = new Gear(2, "No Item" , 0, this.hero.id, 0, "inv_chest_leather_raiddruid_k_01", "Chest", 0);
        this.d3 = new Gear(3, "No Item" , 0, this.hero.id, 0, "inv_glove_leather_raiddruid_k_01", "Glove", 0);
        this.d4 = new Gear(4, "No Item" , 0, this.hero.id, 0, "inv_pant_leather_raiddruid_k_01", "Boots", 0);
        this.d5 = new Weapon(5, "No Item" , 0, this.hero.id, 0, "inv_hammer_15", "Sword", 0);
        this.equipmentList = [this.d0, this.d1, this.d2, this.d3, this.d4, this.d5];

        //hero as background
        this.style = {'background-image': 'url(' + this.hero._imgURL + ')',
            'background-size'       : '30%',
            'background-repeat'     : 'no-repeat',
            'background-position'   : 'center',
        };

    }

    /**
     * call all items from this hero
     */
    private getAllItemsFromHero() {
        this.itemService.getAllItemsFromHero(this.hero.id)
            .then(items => {
                this.bagList = items;
                this.getEquipedItemsFromHero(this.bagList)
            })
    }

    //ToDo: shift to the itemServe
    private getEquipedItemsFromHero(bagList:Item[]) {
        for(var i = 0; i < bagList.length; i++){
            if(bagList[i]._itemDonned) {
                if(bagList[i]._itemType == "Gear"){
                    /*
                     "helm", "helmet", "chest", "shoulder", "cape", "glove", "boot", "boots",
                     "pant", "belt", "wand", "axe", "staff", "sword", "mail", "bracer", "misc", "shield", "mace",
                     "gauntlets", "ring", "shortblade", "shirt"
                     */
                    var gearItem = bagList[i] as Gear;
                    switch (gearItem._gearCategory){
                        case "Helmet" || "Helm":
                            this.equipmentList[0] = gearItem;
                            this.e[0] = true;
                            break;
                        case "Shoulder" || "Cape" || "Misc":
                            this.equipmentList[1] = gearItem;
                            this.e[1] = true;
                            break;
                        case "Chest" || "Belt" || "Shirt":
                            this.equipmentList[2] = gearItem;
                            this.e[2] = true;
                            break;
                        case "Glove" || "Bracer" || "Gauntlets" || "Ring":
                            this.equipmentList[3] = gearItem;
                            this.e[3] = true;
                            break;
                        case "Boot" || "Boots" || "Pant":
                            this.equipmentList[4] = gearItem;
                            this.e[4] = true;
                            break;
                        default:
                    }

                } else {
                    var weaponItem = bagList[i] as Weapon;
                    this.equipmentList[5] = weaponItem;
                    this.e[5] = true;
                }
            }
        }

    }

    /**
     * call the blizzard api to create an item for this hero
     */
    private createANewItemModal() {
        this.itemService.getBlizzData(this.hero.id).then(i=> {
            if (i != undefined) {
                //console.log(i);
                this.getAllItemsFromHero();
            }
        });
    }

    /**
     * Drag an item from the equipmentList to the bagList
     * @param item
     */
    private itemDrag(item: Item){
        console.log("1" + item._itemName);
        if(item._itemName != undefined) {
            item._itemDonned = false;
            this.getAllItemsFromHero();
        }
    }

    /**
     * Drag an item from the bagList to the equipmentList
     * @param item
     */
    private addToEquipment(item: Item){
        console.log("2" + item._itemName);
        item._itemDonned = true;
        this.getAllItemsFromHero();
    }

}