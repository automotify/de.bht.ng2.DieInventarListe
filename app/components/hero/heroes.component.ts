import { Component, OnInit }    from "@angular/core"
import { Router }               from "@angular/router"

import { Hero }                 from "../../models/hero/hero.model";
import { HeroService }          from "../../services/hero.service";

@Component({
    template: `<h1 class="col-md-4 col-md-offset-4">Heroes</h1>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <button class="btn btn-success btn-lg btn-block" (click)="addHero()">Add New Hero</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-offset-4">
                        <ul class="list-group">
                            <a class="list-group-item" *ngFor="let hero of heroList"  [class.active]="hero === selectedHero" (click)="onSelect(hero)">
                                <h2><label class="label label-default">{{hero._level}}</label> {{hero._name}}</h2>
                            </a>
                        </ul>
                    </div>
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