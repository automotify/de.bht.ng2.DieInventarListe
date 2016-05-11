/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
import {Component, Input} from '../../node_modules/angular2/core.d';
import {Item} from './item';

@Component({
    selector: 'item-detail',
    template: `<div>
                    <h2>{{item.name}} details!</h2>
                    <ul class="items">
                            <li class="items"><span class="badge">ID</span>     {{item.id}}</li>
                            <li class="items"><span class="badge">NAME</span>   {{item.name}}</li></ul>

                    <h2>Edit details of {{item.name}}</h2>
                    <div>
                      <label>name: </label> <input [(ngModel)]="item.name" placeholder="name">
                    </div>
                  </div>`
})

export class ItemDetailComponent {
    @Input()
    private item: Item;

    constructor(){

    }
}