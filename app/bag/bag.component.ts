/**
 * Hero´s bag for the detailed view
 *
 * @author Daniel Schleußner
 */

import {Component, Input, ChangeDetectionStrategy} from "angular2/core"
import {Bag} from "./bag.model"
import {Item, Weapon, Gear, ItemDetailComponent} from "../item/index";
import {Hero} from "../hero/index";
import {ControlGroup, FormBuilder, Validators, AbstractControl} from "angular2/common";

@Component({
    selector: 'heros-bag',
    template: `<div class="bag">
                    <ul class="items">
                        <label class="badge">Create a new item</label>
                        <form [ngFormModel]="newItem" (ngSubmit)="createANewItem(newItem.value)" >
                            <label>name:  
                                <input type="text" [ngFormControl]="newItem.controls['name']"></label>
                            <label>type:
                                <select [ngFormControl]="newItem.controls['type']" required>
                                    <option selected>gear</option>
                                    <option>weapon</option>
                                </select>
                            </label>
                            
                            <div [hidden]="newItem.valid || !newItem.dirty">
                                name is required
                            </div>
                            <br>
                            <button type="submit" [disabled]="!newItem.valid">do it!</button>
                        </form>
                    </ul>
                    <ul class="items">
                       <h2>{{hero.name}}'s bag</h2>
                        <li 
                                *ngFor="#item of hero.bag.itemList" 
                                [class.selected]="item === selectedItem" 
                                (click)="onSelect(item)"
                            >
                            <label class="badge">{{item.id}}</label> {{item.name}}
                        </li>
                        <item-detail 
                            *ngIf="selectedItem && bag == hero.bag" 
                            [item]="selectedItem" 
                            (modal)="notSelected($event)">
                        </item-detail>
                    </ul>
               </div>`,
    directives: [ItemDetailComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BagComponent {
    private bag             : Bag;
    @Input()
    private hero            : Hero;
    private selectedItem    : Item;
    private newItem         : ControlGroup;
    name: AbstractControl;
    type: AbstractControl;

    constructor(fb: FormBuilder) {
        this.newItem = fb.group({
            'name': ['', Validators.required],
            'type': ['gear', Validators.required]
        });
        this.name = this.newItem.controls['name'];
        this.type = this.newItem.controls['type'];
    }

    private onSelect(item: Item) {
        this.selectedItem = item;
        this.bag = this.hero.bag;
    }

    private notSelected() {
        this.selectedItem = null;
    }

    private createANewItem(value: any) {
        //console.log(value);
        //console.log(this.name);
        this.name.updateValueAndValidity('');
        if(value["type"] == 'gear'){
            this.hero.bag.addItem(new Gear(value["name"], "helmet", 25));
        } else {
            this.hero.bag.addItem(new Weapon(value["name"], "onehand", 200));
        }
    }

}