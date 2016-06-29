import {Component, OnInit}      from '@angular/core';
import { RouteSegment, Router } from '@angular/router';

import { Hero }         from "../../models/hero/hero.model";
import { HeroService }  from "../../services/hero.service";
import { BagComponent } from "../item/bag.component";

//noinspection JSAnnotator
@Component({
    template: ` <div *ngIf="hero" id="herodetails">
                    <h2>{{hero._name | uppercase}} details:</h2>
                    <button (click)="goBack()">Back</button>
                    <button (click)="save()">Save</button>
                    <div class="hero-detail">
                        <ul class="items">
                            <li class="item"><span class="badge">ID</span>         {{hero.id}}</li>
                            <li class="item"><span class="badge">Name</span>       <input [(ngModel)]="hero._name" placeholder="name"></li>
                            <li class="item"><span class="badge">Level</span>      {{hero._level}}</li>
                            <li class="item"><span class="badge">Image</span>      <input [(ngModel)]="hero._imgURL" placeholder="image url"></li>
                        </ul>
                        <!--<my-equipment [hero]="hero"></my-equipment>-->
                        <!--<heros-bag [hero]="hero"></heros-bag>-->
                        <div class="hero-img" >
                            <img src={{hero._imgURL}} width="200" >
                        </div>
                    </div>
                </div>
                <div *ngIf="!hero" id="noherodetails">
                    <h1>Hero not found!</h1>
                    <button (click)="goToHeroes()">Heroes</button>
                </div>`,
    directives: [BagComponent]
})

export class HeroDetailComponent implements OnInit {
    
    private hero:Hero;

    /**
     * create the services
     * @param router
     * @param heroService
     */
    constructor(private router:Router,
                private routeParams:RouteSegment,
                private heroService:HeroService) {
    }

    /**
     * called the hero service and save these data in the db
     */
    private save() {

        if (this.hero._name == "") this.hero._name = "<default>";
        
        this.heroService.save(this.hero).then(hero => {
            this.hero = hero;
        });

        this.goToHeroes()
    }

    /**
     * get the hero with id
     */
    ngOnInit() {
        if(+this.routeParams.getParam('id') != null){
            let id = +this.routeParams.getParam('id');
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        }
    }

    /**
     * navigate us to the hero list
     */
    goToHeroes() {
        this.router.navigate(['/heroes']);
    }

    goBack(){
        window.history.back();
    }

}