import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Hero} from "../../models/hero/hero.model";
import {Item} from "../../models/item/item.model";
import {ItemService} from "../../services/item.service";


//noinspection JSAnnotator
@Component({
    selector : 'new-item',
    template: ` <div class="item">                    
                    <!--<li class="item"><span class="badge">ID</span> {{newItem.id}}</li>-->
                    <li class="item"><span class="badge">Name</span> 
                        <input [(ngModel)]="newItem._itemName" placeholder="name">
                    </li>
                    <li class="item"><span class="badge">Type</span> 
                            <select [(ngModel)]="newItem._itemType" (ngModelChange)="whichType(newItem._itemType)">
                                <option *ngFor="let typen of itemTypes">{{typen}}</option>
                            </select>
                    </li>
                    <li *ngIf="newItem._itemType == 'gear'" class="item">
                        <span class="badge">Category</span>
                        <select [(ngModel)]="newItem._gearCategory" (ngModelChange)="whichType(newItem._gearCategory)">
                            <option *ngFor="let typen of gearType">{{typen}}</option>
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
                
                    <button (click)="modal.emit()">Back</button>
                    <button (click)="save()">Save</button>
                    <button (click) = "getBlizzData()">Get BlizzData</button><br/>
                    <div>Output:{{getPromiseData}}</div><br/>
                </div>
                `,
   
})

export class NewItemComponent implements OnInit{

    getPromiseData:string;

    @Input()
    private hero:Hero;
    @Output()
    private modal = new EventEmitter();

    private newItem : Item;

    public itemTypes = ["gear", "Weapon"];
    public gearType = ["helmet", "shoulder", "hands", "chest", "leg", "boots"];
    public weaponTypes = ["oneHand", "twoHand", "offhand"];



    static whichType(type: string){
        console.log(type);
    }


    constructor(public itemService : ItemService) {
    }

    ngOnInit(){
        //this.newItem = new Item(300, "test", "gear", this.hero.id);
    }
    /*
    getBlizzData(){
        console.log('Getting user based on promise now.');
        this.itemService.getBlizzData()
            .then(
                res=>this.getPromiseData = JSON.stringify(res),
                err=>alert(err.message)
            );

    }*/
    /**
     * called the hero service and save these data in the db
     */
    private save(){
        /*
        this.newItem._heroId = this.hero.id;
        this.itemService.save(this.newItem).then(item => {
            this.newItem = item;
        });
        console.log(this.newItem);
        //this.modal.emit();*/
    }

}