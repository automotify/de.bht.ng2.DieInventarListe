/**
 * Hero-List representation
 *
 * @author András Bucsi, Daniel Schleußner, Andreas Burger
 */
import {Hero} from './hero.model';

export class HeroList {
    public heroList: Hero[];
    private currentHeroId: number = 0;

    constructor() {
        this.heroList = [];
    }

    public addHero( hero:Hero ){
        if( this.heroList.length < 10 ) {
            this.currentHeroId++;
            hero.id = this.currentHeroId;
            this.heroList.push(hero);
            //console.log(hero + " : ID = " + hero.id)
        } else {
            console.log('List full. '+hero+' could not be added to heroList\n'+this.heroList);
        }
    }

    public removeHero( hero:Hero ){
        if( this.heroList.length < 10 ) {
            let index:number = this.heroList.indexOf(hero,0);
            if( index > -1 ){
                this.heroList.splice(index,1)
            }else {
                console.log('Hero is not contained in heroList');
            }
        } else {
            console.log('List empty. '+hero+' is not contained in heroList\n'+this.heroList);
        }
    }
}
