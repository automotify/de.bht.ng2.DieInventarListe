import {Component}           from 'angular2/core';
import {Hero}                from './hero.model';
import {HeroList}            from './hero-list.model';
import {HeroDetailComponent} from './hero-detail.component';
import {BagComponent}        from '../bag/index';

@Component({
    selector: 'hero-list',
    template: `<h1>Heroes</h1>
                <ul class="items">
                    <li *ngFor="let hero of heroes.heroList"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero.level}}</label> {{hero.name}}
                    </li>
                </ul>
                <div *ngIf="selectedHero" >
                    <hero-detail [hero]="selectedHero"></hero-detail>
                    <heros-bag [hero]="selectedHero"></heros-bag>
                </div>`,
    directives: [HeroDetailComponent,BagComponent]
})

export class HeroListComponent{
    private heroes       :HeroList;
    private selectedHero :Hero;

    constructor(){
        this.heroes = new HeroList(3);
        this.heroes.addHero(new Hero("Van Helsing", 80));
        this.heroes.addHero(new Hero("Super Mario", 150));
        this.heroes.addHero(new Hero("Hulk", 999));
        this.heroes.addHero(new Hero("Son Goku", 700))
    }

    private onSelect(hero:Hero){
        this.selectedHero = hero;
    }
}
