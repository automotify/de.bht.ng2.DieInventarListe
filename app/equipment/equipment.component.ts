/**
 * Created by Andreas Burger on 03.05.2016.
 */

import {Component, Input}  from "angular2/core";
import {Equipment}  from "./equipment.model";
import {Hero}       from "../hero/index";
import {Gear, GearService, ItemDetailComponent } from "../item/index";


@Component({
    selector: 'my-equipment',
    template: `<h1>Equipment</h1>
               <ul class="items">
                    <li *ngFor="let gear of gears" [class.selected]="gear === selectedItem" (click)="onSelect(gear)" class="items">
                        <label class="badge">{{gear.type}}</label>{{gear.name}} {{gear.gearDefenseValue}}
                    </li>
               </ul>
               <!--<div class="equipment">
                    
                    <a class="tooltip" href="#">
                        <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png"/>
                        <span class="classig">test {{hero.equip}}</span>
                    </a>
               </div>
               <div class="equipment">
                   
                    <a class="tooltip" href="#">
                        <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png"/>
                        <span class="classig">test</span>
                    </a>
               </div>
               <div class="equipment">
                    
                    <a class="tooltip" href="#">
                        <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png"/>
                        <span class="classig">test</span>
                    </a>
               </div>-->
               <item-detail *ngIf="selectedItem" [item]="selectedItem" (modal)="notSelected($event)"></item-detail>`,
    providers: [GearService],
    directives: [ItemDetailComponent]
})

export class EquipmentComponent{
    @Input()
    private hero : Hero;
    private gears: Gear[];
    private selectedItem: Gear;
    //private equipment : Equipment = new Equipment();

    getGears(){
        this.gearService.getGear().then(gears => this.gears = gears);
    }

    ngOnInit(){
        this.getGears();
    }
    private onSelect(item: Gear) {
        this.selectedItem = item;

    }
    private notSelected() {
        this.selectedItem = null;
    }

    constructor(private gearService: GearService){
        
    }
}
