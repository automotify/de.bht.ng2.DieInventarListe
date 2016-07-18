import { Component, OnInit }    from "@angular/core"
import { Router }               from "@angular/router"

import { Hero }                 from "../../models/hero/hero.model";
import { HeroService }          from "../../services/hero.service";
import { HeroDetailComponent }  from "./hero-detail.component";
import {NewHeroDetailComponent} from "./new-hero-detail.component";

@Component({
    template: `
                <div class="wrapper container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <h1>Heroes</h1>
                            <button class="btn btn-success btn-lg btn-block" (click)="addHero()">Add New Hero</button>
                            <div >
                                <div >
                                    <ul class="list-group">
                                        <a class="list-group-item" role="button" *ngFor="let hero of heroList"  [class.active]="hero === selectedHero" (click)="onSelect(hero)">
                                            <h2><label class="label label-primary cursor-pointer">{{hero._level}}</label> {{hero._name}}</h2>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
    `,
    providers: [HeroService],
    precompile: [HeroDetailComponent, NewHeroDetailComponent]
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