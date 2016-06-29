import {Component, Input, Output, EventEmitter}   from '@angular/core';

import { Hero }         from "../../models/hero/hero.model";
import {Item} from "../../models/item/item.model";
import {ItemService} from "../../services/item.service";

//noinspection JSAnnotator
@Component({
    selector : 'new-item',
    template: ` <li class="items">
                    <li class="item"><span class="badge">ID</span>   {{newItem.id}}</li>
                    <li class="item"><span class="badge">Name</span> 
                        <input [(ngModel)]="newItem._itemName" placeholder="name"></li>
                    <li class="item"><span class="badge">Type</span> 
                        <select [(ngModel)]="newItem._itemType" (ngModelChange)="whichType(newItem._itemType)">
                            <option *ngFor="let typen of itemTypes">{{typen}}</option>
                        </select>
                    </li>

                    <li *ngIf="newItem._itemType == 'gear'" class="item">
                        <span class="badge">Category</span>
                        <select [(ngModel)]="newItem._gearCategory" (ngModelChange)="whichType(newItem._gearCategory)">
                            <option *ngFor="let typen of gearTypes">{{typen}}</option>
                        </select>
                    </li>
                    <li *ngIf="newItem._itemType == 'gear'" class="item">
                        <span class="badge">Damage Value</span>
                        <input [(ngModel)]="newItem._gearDefenseValue" placeholder="defense value">
                    </li>
                    
                    <li *ngIf="newItem._itemType == 'weapon'" class="item">
                        <span class="badge">Category</span>
                        <select [(ngModel)]="newItem._weaponCategory" (ngModelChange)="whichType(newItem._weaponCategory)">
                            <option *ngFor="let typen of weaponTypes">{{typen}}</option>
                        </select>
                    </li>
                    <li *ngIf="newItem._itemType == 'weapon'" class="item">
                        <span class="badge">Defense Value</span>
                        <input [(ngModel)]="newItem._weaponDamageValue" placeholder="damage value">
                    </li>
                </ul>
                <button (click)="modal.emit()">Back</button>
                <button (click)="save()">Save</button>`
})

export class NewItemComponent {

    @Input()
    private hero:Hero;
    @Output()
    private modal = new EventEmitter();

    private newItem : Item;

    public itemTypes = ["gear", "Weapon"];
    public gearType = ["helmet", "shoulder", "hands", "chest", "leg", "boots"];
    public weaponTypes = ["oneHand", "twoHand", "offhand"];

    whichType(type: string){
        console.log(type);
    }

    constructor(private itemService : ItemService) {
    }

    /**
     * called the hero service and save these data in the db
     */
    private save(){

        this.newItem._heroId = this.hero.id;
        this.itemService.save(this.newItem).then(item => {
            this.newItem = item;
        });
        console.log(this.newItem);
        //modal.emit();
    }

}