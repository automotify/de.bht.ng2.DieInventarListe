/**
 * Created by Andreas Burger on 03.05.2016.
 */

import {Component, Input}  from "@angular/core";
import {ItemDetailComponent} from "../item/item-detail.component";
import {Hero} from "../../models/hero/hero.model";
import {Gear} from "../../models/item/gear.model";
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item/item.model";
import {PopoverComponent} from "../popover/popover";
import {Popup} from "../../directives/popup";
import {Dragula, DragulaService} from "ng2-dragula/ng2-dragula";


@Component({
    selector: 'my-equipment',
    template: `
                    <div class="wrapper container">
                        <h2 class="text-center">{{hero._name}}'s Equipment</h2>
                        <div [ngStyle]="style">
                            <div class="row">
                                <div class="container" >
                                    <div *ngFor="let item of gears" class="col-md-3 col-md-offset-3" [dragula]='"another-bag"'>
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
                        </div>
                    </div>`,

    directives: [ItemDetailComponent, Popup, PopoverComponent, Dragula],

})

export class EquipmentComponent {
    @Input()
    private hero:Hero;
    public gears: Item[];

    private style;

    //private selectedItem:Gear;
    constructor(private itemService:ItemService, private dragulaService: DragulaService) {
        dragulaService.dropModel.subscribe((value)=> {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value)=>{
            this.onRemoveModel(value.slice(1));
        });
    }

    private onDropModel(args){
        let [el, target, source] = args;
        console.log(el, target, source);
    }

    private onRemoveModel(args){
        let [el, target, source] = args;
    }


    private getAllItemsFromHero() {
        this.itemService.getAllItemsFromHero(this.hero.id)
            .then(items =>this.gears = items
            );
    }

    ngOnInit() {
        this.getAllItemsFromHero();

        this.style = {'background-image': 'url(' + this.hero._imgURL + ')',
            'background-size': '15%',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center'
            };
    }

/*
    private onSelect(item:Gear) {
        this.selectedItem = item;

    }
/*
    private notSelected() {
        this.selectedItem = null;
    }
*/




}