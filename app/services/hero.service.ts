import {Injectable} from "@angular/core";
import {HEROES} from "./db-in-memory.service";
import {Hero} from "../models/hero/hero.model";


@Injectable()
export class HeroService {

    static getHeroes(){
        return Promise.resolve(HEROES);
    }

    static getHero(id){
        return Promise.resolve(HEROES[id])
    }
    static save(hero: Hero): Promise<Hero> {
        hero.id = HEROES.length;
        HEROES.push(hero);   // new Hero
        console.log("save : " + hero);
        console.log("next free index is " + HEROES.length);
        return;
    }

    /*
    private heroesUrl = 'app/heroes';  // URL to web api = DB

    constructor(private http: Http) { }




    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getHero(id: number | string) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === +id)[0]);
    }



    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({
            'Content-Type': 'application/json'});


        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }*/
}