import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Hero} from "./hero.model"
import {BagComponent} from "../bag/bag.component";
import {EquipmentComponent} from "../equipment/equipment.component";

@Component({
    selector: 'hero-detail',
    template: ` <!-- The Modal -->
                <div id="myModal" class="modal" style="display: block">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close" (click)="modal.emit()">X</span>
                            <div class="modal-title">{{hero.name}}</div>
                        </div>
                        <div class="modal-body">
                            <div class="hero-detail">
                                <ul class="items">
                                    <li class="item"><span class="badge">ID</span>         {{hero.id}}</li>
                                    <li class="item"><span class="badge">Name</span>       <input [(ngModel)]="hero.name" placeholder="name"></li>
                                    <li class="item"><span class="badge">Level</span>      {{hero.level}}</li>
                                </ul>
                                <my-equipment [hero]="hero"></my-equipment>
                                <div class="hero-img" [ngSwitch]="hero.name">
                                      <template [ngSwitchWhen]="'Van Helsing'"><img src="http://www.renders-graphiques.fr/image/upload/normal/van_helsing1.png" width="200"></template>
                                      <template [ngSwitchWhen]="'Super Mario'"><img src="https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"></template>
                                      <template [ngSwitchWhen]="'Hulk'"><img src="http://www.pngall.com/wp-content/uploads/2016/03/Hulk-PNG.png" width="200"></template>
                                      <template ngSwitchDefault><i ></i></template>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <heros-bag [hero]="hero"></heros-bag>
                        </div>
                    </div>
                </div>`,
    directives: [BagComponent, EquipmentComponent]
})

export class HeroDetailComponent {
    @Input()
    private hero:Hero;
    @Output()
    private modal = new EventEmitter();

    constructor() {
    }
}