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
    template: `<div class="row">
                    <!--<div class="col-md-4" >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        
                    </div>-->
                    <div class="col-md-4" [ngStyle]="style">
                       <h2>{{hero._name}}'s Equipment</h2>
                       <ul>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            <img src="http://icons.iconarchive.com/icons/double-j-design/shiny/64/packet-icon.png" width="15%"/>
                            
                       </ul>
                   
                    </div>
                   
                   <item-detail *ngIf="selectedItem" [item]="selectedItem" (modal)="notSelected($event)"></item-detail>
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

            'background-position' : 'center' };
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