/**
 * Created by padawan on 12.05.16.
 */

import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Hero} from "./hero.model"
import {BagComponent} from "../bag/bag.component";

@Component({
    selector: 'hero-detail',
    template: ` <!-- The Modal -->
                <div id="myModal" class="modal" style="display: block">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close" (click)="modal.emit()">X</span>
                            <h2>{{hero.name}}</h2>
                        </div>
                        <div class="modal-body">
                            <div class="hero-detail">
                                <ul class="items">
                                    <li class="item"><span class="badge">ID</span>         {{hero.id}}</li>
                                    <li class="item"><span class="badge">Name</span>       <input [(ngModel)]="hero.name" placeholder="name"></li>
                                    <li class="item"><span class="badge">Level</span>      {{hero.level}}</li>
                                </ul>
                                <span>HERO</span>
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
    directives: [BagComponent]
})

export class HeroDetailComponent {
    @Input()
    private hero:Hero;
    @Output()
    private modal = new EventEmitter();

    constructor() {
    }
}