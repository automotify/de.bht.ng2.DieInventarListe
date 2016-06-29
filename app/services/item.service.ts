import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero }         from "../models/hero/hero.model";
import { HeroService }  from "./hero.service";
import { Item }         from "../models/item/item.model";

@Injectable()
export class ItemService {

    private itemsUrl = 'app/items';  // URL to web api = DB

    constructor(private http: Http, private heroService : HeroService) { }

    getAllItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getItem(id: number | string) {
        return this.getAllItems()
            .then(items => items.filter(item => item.id === +id)[0]);
    }

    getAllItemsFromHero(id: number/* | string  /*hero._name?*/) {
        let hero: Hero;
        this.heroService.getHero(id)
            .then(h => hero = h);
        return this.getAllItems()
            .then(items => items.filter(item => item._heroId === hero.id));
    }

    save(item: Item): Promise<Item>  {
        
        if (item.id) {
            return this.put(item);
        }
        return this.post(item);
    }

    delete(item: Item) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.itemsUrl}/${item.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Hero
    private post(item: Item): Promise<Item> {
        let headers = new Headers({
            'Content-Type': 'application/json'});


        return this.http
            .post(this.itemsUrl, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(item: Item) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.itemsUrl}/${item.id}`;

        return this.http
            .put(url, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}