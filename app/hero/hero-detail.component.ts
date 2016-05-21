/**
 * Item Detail Component
 *
 * @author András Bucsi, Daniel Schleußner
 */
import {Component, Input}   from 'angular2/core';
import {Hero}               from './hero.model';

@Component({
    selector: 'hero-detail',
    template: `<div class="details">
                    <h2>{{hero.name}} details!</h2>
                    <ul class="items">
                            <li class="item"><span class="badge">ID</span>{{hero.id}}</li>
                            <li class="item"><span class="badge">NAME</span><input [(ngModel)]="hero.name" placeholder="name"></li>
                            <li class="item"><span class="badge">LEVEL</span>{{hero.level}}</li>
                    </ul>
                    <span>HERO</span>
                    <div class="hero-img" [ngSwitch]="hero.name">
                          <template [ngSwitchWhen]="'Van Helsing'"><img src="http://www.renders-graphiques.fr/image/upload/normal/van_helsing1.png" width="200"></template>
                          <template [ngSwitchWhen]="'Super Mario'"><img src="https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png" width="200"></template>
                          <template [ngSwitchWhen]="'Hulk'"><img src="http://www.pngall.com/wp-content/uploads/2016/03/Hulk-PNG.png" width="200"></template>
                          <template ngSwitchDefault><i>default case</i></template>
                    </div>
                  </div>`
})

export class HeroDetailComponent {
    @Input()
    private hero: Hero;

    constructor(){

    }
}
