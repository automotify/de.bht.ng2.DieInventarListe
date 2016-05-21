/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
import {Component, Input} from 'angular2/core';
import {Item} from './item.model';

@Component({
    selector: 'item-detail',
    template: `<div class="details">
                    <h2>{{item.name}}</h2>
                    <ul class="items">
                        <li class="item"><span class="badge">ID</span>   {{item.id}}</li>
                        <li class="item"><span class="badge">Name</span> <input [(ngModel)]="item.name" placeholder="name"></li>
                        <li class="item"><span class="badge">Type</span> <input [(ngModel)]="item.type" placeholder="type">
                               <!--<span [(ngModel)]="item.type"><select><option>gear</option><option>weapon</option></select></span>-->
                        </li>
                        <li *ngIf="item.type == 'weapon'" class="item"><span class="badge">Weapontype</span> {{item.weaponType}}</li>
                        <li *ngIf="item.type == 'weapon'" class="item"><span class="badge">Weapondamagevalue</span> {{item.weaponDamageValue}}</li>
                        <li *ngIf="item.type == 'gear'" class="item"><span class="badge">Geartype</span> {{item.gearType}}</li>
                        <li *ngIf="item.type == 'gear'" class="item"><span class="badge">Geardefensevalue</span> {{item.gearDefenseValue}}</li>
                    </ul>
                </div>`
})

export class ItemDetailComponent {
    @Input()
    private item: Item;

    constructor(){

    }
}