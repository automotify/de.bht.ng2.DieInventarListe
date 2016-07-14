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
    template: `<div class="wrapper container">
                    <div class="row">
                        <div [ngStyle]="style">
                           <h2>{{hero._name}}'s Equipment</h2>
                           <ul>
                                <div class="col-lg-6">
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                </div>
                                <div class="col-lg-6">
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                    <img class="row" src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="10%"/>
                                </div>
                                
                           </ul>
                        </div>
                        <item-detail *ngIf="selectedItem" [item]="selectedItem" (modal)="notSelected($event)"></item-detail>
                    </div>
                    
               </div>`,
    directives: [ItemDetailComponent]
})

export class EquipmentComponent {
    @Input()
    private hero:Hero;
    private gears = [];

    private style;

    private selectedItem:Gear;
    //private equipment : Equipment = new Equipment();
//
    getGears() {
        //this.itemService.getBlizzData().then(gears => this.gears.push(gears));
    }

    ngOnInit() {
        this.getGears();
        this.style = {'background-image': 'url(' + this.hero._imgURL + ')',
            'background-size': '50%',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center'
            };
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