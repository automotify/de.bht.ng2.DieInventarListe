import {Component}              from 'angular2/core';
import {Hero}                   from './hero.model';
import {HeroDetailComponent}    from './hero-detail.component';

@Component({
    selector: 'hero-tag',
    template: `<h2>Available Heroes</h2>
                <ul class="items">
                    <li *ngFor="#hero of HEROES"  [class.selected]="hero === selectedHero" (click)="onSelect(hero)" class="items">
                        <label class="badge">{{hero.id}}</label> {{hero.name}}
                    </li>
                </ul>
                <hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>`,
    directives: [HeroDetailComponent]
})

export class HeroComponent{
    private HEROES       :Hero[];
    private selectedHero :Hero;

    constructor(){
        this.HEROES = [new Hero(1,'Captain America', 75), new Hero(2, 'Hulk', 30), new Hero(3, 'Deadpool', 32)];
    }

    private onSelect(hero:Hero){
        this.selectedHero = hero;
    }
}