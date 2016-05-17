/**
 * Created by padawan on 12.05.16.
 */

import {Component, Input} from 'angular2/core'
import {Hero} from "./hero"

@Component({
    selector: 'hero-detail',
    template: ` <div class="hero-detail">
                    <h2>{{hero.name}}</h2>
                    <ul class="items">
                        <li class="item"><span class="badge">ID</span>         {{hero.id}}</li>
                        <li class="item"><span class="badge">Name</span>       <input [(ngModel)]="hero.name" placeholder="name"></li>
                        <li class="item"><span class="badge">Level</span>      {{hero.level}}</li>
                    </ul>
                    <span>HERO</span>
                    <div class="hero-img" [ngSwitch]="hero.name">
                          <template [ngSwitchWhen]="'Van Helsing'"></template>
                          <template [ngSwitchWhen]="'Super Mario'"><img src="https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"></template>
                          <template [ngSwitchWhen]="'Hulk'"></template>
                          <template ngSwitchDefault><i ></i></template>
                    </div>
                </div>`,
    directives: []
})

export class HeroDetailComponent {
    @Input()
    private hero:Hero;

    constructor() {
    }
}