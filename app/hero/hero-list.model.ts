<<<<<<< HEAD
/**
 * Hero-List representation
 *
 * @author András Bucsi, Daniel Schleußner, Andreas Burger
 */
import {Hero} from './index';
=======
import {Hero} from './hero.model';
>>>>>>> de7fff6b259fc4dbaa43d7dd50eabfbbcf1c161d

export class HeroList {
    private size: number;
    public heroList: Hero[];
    private currentHeroId: number = 0;

    constructor(size: number) {
        this.size = size;
        this.heroList = [];
    }

    public addHero( hero:Hero ){
        if( this.heroList.length < this.size ) {
            this.currentHeroId++;
            hero.id = this.currentHeroId;
            this.heroList.push(hero);
            //console.log(hero + " : ID = " + hero.id)
        } else {
            console.log('List full. '+hero+' could not be added to heroList\n'+this.heroList);
        }
    }

    public removeHero( hero:Hero ){
        if( this.heroList.length < this.size ) {
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