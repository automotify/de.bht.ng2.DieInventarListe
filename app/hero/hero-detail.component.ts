/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'hero-detail',
    template: `<div class="details">
                    <h2>{{hero.name}} details!</h2>
                    <ul class="items">
                            <li class="item"><span class="badge">ID</span>     {{hero.id}}</li>
                            <li class="item"><span class="badge">NAME</span>
                            <input [(ngModel)]="hero.name" placeholder="name"></li>
                    </ul>
                  </div>`
})

export class HeroDetailComponent {
    @Input()
    private hero: Hero;

    constructor(){

    }
}