
import {Hero} from "./hero";
import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';

@Component({
selector: "hero-detail",
template: ` <h1>Hero Details</h1>
            <ul class="items">
                <li class="items"><label class="badge">ID:      </label>{{privHero.id}}</li>
                <li class="items"><label class="badge">Name:    </label>{{privHero.name}}</li>
                <li class="items"><label class="badge">Age:     </label>{{privHero.age}}</li>
                <li class="items"><label class="badge">Health:  </label>{{privHero.health}}</li>
            </ul>
            `

})

export class HeroDetailComponent implements OnInit, OnChanges {
    @Input() public hero:Hero;
    private privHero:Hero;

    constructor() {
    }

    /**
     * This callback-function will be called right after the very first ngOnChanges.
     * it initialises the variable privHero with the Input of the parent Component arriving as hero-variable
     */
    ngOnInit() {
        this.privHero = this.hero;
    }

    /**
     * Interface OnChanges (LifeCycle Hook) tracks changes of this Component
     * if there is the first initialisation of here, the if-body won't be entered... after that ngOnInit is called
     * This mechanism is used to simulate Angular 1.x One-Time-Binding
     * (variable only Changes once)
     * @param changes
     */
    ngOnChanges(changes:{ [key: string]: SimpleChange }):void {
        if (!changes["hero"].isFirstChange()) {
            this.hero = this.privHero;
        }
    }
}

