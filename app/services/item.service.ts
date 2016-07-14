import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {ITEMS} from "./db-in-memory.service"
import {Item} from "../models/item/item.model";
import {Hero} from "../models/hero/hero.model";
import {HeroService} from "./hero.service";


@Injectable()
export class ItemService {

    private blizzKey = "?locale=de_DE&apikey=4hszupqr2sctzvvadhmvf2vwhm2cgjmr";
    private blizzUrl = "https://eu.api.battle.net/wow/item/";
    
    constructor(private http: Http) {}

    getBlizzData(id : number | string){
        return this.http.get(this.blizzUrl + id + this.blizzKey)
            .toPromise()
            .then(res=>res.json()/*,err=>{"get error"}*/);
    };

    getAllItems(): Promise<Item[]> {
        return Promise.resolve(ITEMS);
    }

    getItem(id: number | string) {
        return this.getAllItems()
            .then(items => items.filter(item => item.id === +id)[0]);
    }

    getAllItemsFromHero(id: number/* | string*/ ) {
        let hero: Hero;
        HeroService.getHero(id)
            .then(h => hero = h);
        return this.getAllItems()
            .then(items => items.filter(item => item._heroId === hero.id));
    }

    getNextFreeIndex() {
        return ITEMS.length;
    }

    save(item: Item): Promise<Item> {
        if(item.id >= ITEMS.length) {
            ITEMS.push(item);   // new Item
            console.log("save : " + item);
            console.log("next free index is " + ITEMS.length);
        }
        return;
    }

    //save Item
    /*save(item: Item): Promise<Item>  {
        item.id = this.itemId++;
        if (item.id) {
            return this.put(item);
        }
        return this.post(item);
    }*/

    //delete Item
    /*delete(item: Item) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.itemsUrl}/${item.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);

    }*/

    // Add new Hero
    /*private post(item: Item): Promise<Item> {

        let headers = new Headers({
            'Content-Type': 'application/json'});


        return this.http
            .post(this.itemsUrl, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);

    }*/

    // Update existing Hero
    /*private put(item: Item) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.itemsUrl}/${item.id}`;

        return this.http
            .put(url, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);

    }*/

    private static handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}