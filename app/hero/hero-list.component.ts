import {Component}           from 'angular2/core';
import {Hero}                from './hero.model';
import {HeroList}            from './hero-list.model';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'hero-list',
    template: `<h1>Heros</h1>
                <ul class="items">
                    <li *ngFor="#hero of heroList.heroList"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero.level}}</label> {{hero.name}}
                    </li>
                </ul>
                <div *ngIf="selectedHero" >
                    <hero-detail [hero]="selectedHero" 
                            (modal)="notSelected($event)">
                    </hero-detail>
                </div>
    `,
    directives: [HeroDetailComponent]
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

    private notSelected(){
        this.selectedHero = null;
    }
}