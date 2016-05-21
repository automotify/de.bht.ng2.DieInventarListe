import {Component, Input} from "angular2/core"
import {Bag} from "./bag"
import {Item, Weapon, Gear, ItemDetailComponent} from "../item/index";
import {Hero} from "../hero/index";

@Component({
    selector: 'heros-bag',
    template: `<div class="bag">
                    <ul class="items">
                        <label class="badge">Create a new item</label>
                        <form >
                            <!--<label>
                              <input [(ngModel)]="newItem.name" placeholder="name"></label>
                            <label for="type">type:
                                <select id="type">
                                    <option>gear</option>
                                    <option>weapon</option>
                                </select>
                               </label>
                            <br>-->
                            <button type="button" (click)="createANewItem()">do it!</button>
                        </form>
                    </ul>
                    <ul class="items">
                       <h2>{{hero.name}}'s bag</h2>
                        <li *ngFor="#item of hero.bag.itemList" [class.selected]="item === selectedItem" (click)="onSelect(item)" class="item">
                        <label class="badge">{{item.id}}</label> {{item.name}}
                        </li>
                        <item-detail *ngIf="selectedItem && bag == hero.bag" [item]="selectedItem"></item-detail>
                    </ul>
               </div>`,
    directives: [ItemDetailComponent]
})

export class BagComponent {
    private bag             : Bag;
    @Input()
    private hero            : Hero;
    private selectedItem    : Item;
    //private newItem         : Item;

    constructor() {
    }

    private onSelect(item: Item) {
        this.selectedItem = item;
        this.bag = this.hero.bag;
    }

    private createANewItem() {
        console.log("new Item");
        this.hero.bag.addItem(new Weapon("Excalibur", "onehand", 200));
        this.hero.bag.addItem(new Gear("Basecap", "helmet", 25));
    }
}