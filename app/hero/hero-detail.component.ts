/**
 * Item Detail Component
 *
 * @author András Bucsi
 */
<<<<<<< Updated upstream
import {Component, Input} from 'angular2/core';
import {Hero} from './hero.model';
=======
import {Component, Input}   from 'angular2/core';
import {Hero}               from './index';
>>>>>>> Stashed changes

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