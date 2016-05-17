/**
 * Created by padawan on 12.05.16.
 */
import {Component} from "angular2/core"
import {HeroList} from "./hero-list"
import {Hero} from "./hero"
import {HeroDetailComponent} from "./hero-detail.component"
import {BagComponent} from "../item/bag.component";

@Component({
    selector: 'hero-list',
    template: `<h1>Heros</h1>
                <ul class="items">
                    <li *ngFor="#hero of heroList.heroList"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero.level}}</label> {{hero.name}}
                    </li>
                </ul>
                <div *ngIf="selectedHero" >
                    <hero-detail [hero]="selectedHero"></hero-detail>
                    <heros-bag [hero]="selectedHero"></heros-bag>
                </div>
                
                
    `,
    directives: [HeroDetailComponent, BagComponent]
})

export class HeroListComponent {
    private heroList: HeroList;
    private selectedHero: Hero;
    
    constructor() {
        this.heroList = new HeroList(3);
        this.heroList.addHero(new Hero("Van Helsing", 80));
        this.heroList.addHero(new Hero("Super Mario", 150));
        this.heroList.addHero(new Hero("Hulk", 999));
        this.heroList.addHero(new Hero("Son Goku", 700))
    }

    private onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}