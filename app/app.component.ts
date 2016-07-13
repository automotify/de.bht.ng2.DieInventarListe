import { Component }                 from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService }              from "./services/hero.service";
import { ItemService }              from "./services/item.service";

import { DashboardComponent }       from "./components/dashboard.component";
import { HeroesComponent }          from "./components/hero/heroes.component";
import { HeroDetailComponent }      from "./components/hero/hero-detail.component";
import { NewHeroDetailComponent }   from "./components/hero/new-hero-detail.component";
import { ItemDetailComponent }      from "./components/item/item-detail.component";

@Component({
    selector: 'my-app',
    template: `
    <header class="col-md-4 col-md-offset-4"><h2>{{title}}</h2>
        <nav>
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/heroes']">Heroes</a>
        </nav>
    </header>
    <router-outlet></router-outlet>
    <router-outlet name="modal" ></router-outlet>
    <footer>This project was developed by {{developers}}</footer>
  `,
    providers:  [HeroService, ItemService],
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/',             component: DashboardComponent},
    {path: '/heroes',       component: HeroesComponent},
    {path: '/hero/:id',     component: HeroDetailComponent      /*, outlet: 'modal'*/ },
    {path: '/newHero',      component: NewHeroDetailComponent   /*, outlet: 'modal'*/ },
    {path: '/item/:id',     component: ItemDetailComponent      /*, outlet: 'modal'*/ }
])

export class AppComponent{
    title       : string;
    developers  : string;

    constructor() {
        this.title = "Die Inventarliste";
        this.developers = "Andreas Burger | András Bucsi | Daniel Schleußner";
    }
}