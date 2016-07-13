/**
 * Created by Andreas Burger on 03.05.2016.
 */

import {Component, Input}  from "@angular/core";
import {ItemDetailComponent} from "../item/item-detail.component";
import {Hero} from "../../models/hero/hero.model";
import {Gear} from "../../models/item/gear.model";
import {ItemService} from "../../services/item.service";


@Component({
    selector: 'my-equipment',
    template: `<div id="equip">
                   <h2>{{hero._name}}'s Equipment</h2>
                   <ul>
                        <div class="equipment" *ngFor="let gear of gears" (click)="onSelect(gear)" class="items">
                            <a class="tooltip" href="#">
                               <img src="http://media.blizzard.com/wow/icons/56/{{gear.icon}}.jpg" />
                               <span class="classig">{{gear.name}}</span>
                            </a>
                        </div>
                       
                       <div class="equipment">
                            <a class="tooltip" href="#">
                                <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="5%"/>
                                <span class="classig">test</span>
                            </a>
                       </div>
                       <div class="equipment">
                            
                            <a class="tooltip" href="#">
                                <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="5%"/>
                                <span class="classig">test</span>
                            </a>
                       </div>
                   </ul>
                   
                   <item-detail *ngIf="selectedItem" [item]="selectedItem" (modal)="notSelected($event)"></item-detail>
               </div>`,
    directives: [ItemDetailComponent]
})

export class EquipmentComponent {
    @Input()
    private hero:Hero;
    private gears = [];
    private selectedItem:Gear;
    //private equipment : Equipment = new Equipment();

    getGears() {
        //this.itemService.getBlizzData().then(gears => this.gears.push(gears));
    }

    ngOnInit() {
        this.getGears();
    }

    private onSelect(item:Gear) {
        this.selectedItem = item;

    }

    private notSelected() {
        this.selectedItem = null;
    }

    constructor(private itemService:ItemService) {

    }
}