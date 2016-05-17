/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
import {Component, Input} from 'angular2/core';
import {Item} from './item';

@Component({
    selector: 'item-detail',
    template: `<div class="details">
                    <h2>{{item.name}} details!</h2>
                    <ul class="items">
                            <li class="item"><span class="badge">ID</span>     {{item.id}}</li>
                            <li class="item"><span class="badge">NAME</span>
                            <input [(ngModel)]="item.name" placeholder="name"></li>
                    </ul>
                  </div>`
})

export class ItemDetailComponent {
    @Input()
    private item: Item;

    constructor(){

    }
}