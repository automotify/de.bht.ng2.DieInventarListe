import { Component, OnInit }    from "@angular/core"
import { Router }               from "@angular/router"

import { Hero }                 from "../../models/hero/hero.model";
import { HeroService }          from "../../services/hero.service";

@Component({
    template: `<h1>Heroes</h1>
                <button (click)="addHero()">Add New Hero</button>
                <div id="heroes">
                <ul class="items">
                    <li *ngFor="let hero of heroList"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero._level}}</label> {{hero._name}}
                    </li>
                </ul>
                </div>
    `,
    providers: [HeroService]
})

export class HeroesComponent implements OnInit{
    private heroList: Hero[];
    private selectedHero: Hero;

    constructor(private router : Router) {}

    getHeroes(){
        HeroService.getHeroes().then(heroes => this.heroList = heroes);
    }

    ngOnInit(){
        this.getHeroes();

    }

    /**
     * Call the route /hero/:id
     */
    private onSelect(hero: Hero) {
        this.selectedHero = hero;
        //console.log(this.selectedHero);
        this.router.navigate([ '/hero', hero.id ]);
    }

    /**
     * Call the route /newHero
     */
    private addHero() {
        this.router.navigate( ['/newHero'] );
    }

}