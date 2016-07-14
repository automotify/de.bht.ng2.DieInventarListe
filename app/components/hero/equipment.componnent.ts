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
                   <h2 class="text-center">{{hero._name}}'s Equipment</h2>
                   <div [ngStyle]="style">
                        <div class="row">
                            <div class="col-md-5 col-md-offset-3">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
                            <div class="col-md-4">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
                            <div class="col-md-5 col-md-offset-3">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
                            <div class="col-md-4">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
                            <div class="col-md-5 col-md-offset-3">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
                            <div class="col-md-4">
                                <img class="img-rounded" src="http://wow.zamimg.com/images/wow/icons/large/ability_fomor_boss_shout.jpg" height="100%" />
                            </div>
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
            'background-size': '15%',
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