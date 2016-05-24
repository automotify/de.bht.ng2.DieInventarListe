/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
import {Component, Input, Output, EventEmitter} from "angular2/core"
import {Item}             from './item.model';

@Component({
    selector: 'item-detail',
    template: ` <!-- The Modal -->
                <div id="myModal" class="modal" style="display: block">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close" (click)="modal.emit()">X</span>
                            <h2>{{item.name}}</h2>
                        </div>
                        <div class="modal-body">
                            <div class="items">
                                <ul class="items">
                                    <li class="item"><span class="badge">ID</span>   {{item.id}}</li>
                                    <li class="item"><span class="badge">Name</span> <input [(ngModel)]="item.name" placeholder="name"></li>
                                    <li class="item"><span class="badge">Type</span> <input [(ngModel)]="item.type" placeholder="type"></li>
                                    </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <li *ngIf="item.type == 'weapon'" class="item"><span class="badge">Weapontype</span> {{item.weaponType}}</li>
                            <li *ngIf="item.type == 'weapon'" class="item"><span class="badge">Weapondamagevalue</span> {{item.weaponDamageValue}}</li>
                            <li *ngIf="item.type == 'gear'" class="item"><span class="badge">Geartype</span> {{item.gearType}}</li>
                            <li *ngIf="item.type == 'gear'" class="item"><span class="badge">Geardefensevalue</span> {{item.gearDefenseValue}}</li>
                        </div>
                    </div>
                </div>`
})

export class ItemDetailComponent {
    @Input()
    private item:Item;
    @Output()
    private modal = new EventEmitter();

    constructor() {
    }

}
