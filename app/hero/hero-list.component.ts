import {Component}           from 'angular2/core';
import {Hero}                from './hero.model';
import {HeroList}            from './hero-list.model';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service"
import {heroList} from "./mock-heroes";

@Component({
    selector: 'hero-list',
    template: `<h1>Heros</h1>
                <ul class="items">
                    <li *ngFor="let hero of heroList.heroList"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero.level}}</label> {{hero.name}}
                    </li>
                </ul>
                <div *ngIf="selectedHero" >
                    <hero-detail [hero]="selectedHero" 
                            (modal)="notSelected($event)">
                    </hero-detail>
                </div>
    `,
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroListComponent {
    private heroList: HeroList;
    private selectedHero: Hero;

    constructor(private heroService : HeroService) {
    }

    getHeroes(){
        this.heroList = new HeroList();
        this.heroService.getHeroes().then(heroList => this.heroList = heroList);
    }

    ngOnInit(){
        this.getHeroes()
    }

    private onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    private notSelected(){
        this.selectedHero = null;
    }
}