import {Injectable, ReflectiveInjector} from "@angular/core";
import {Headers, Http, XHRBackend, BaseRequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Hero} from "../models/hero/hero.model";
import {HeroService} from "./hero.service";
import {Item} from "../models/item/item.model";


@Injectable()
export class ItemService {


    private itemsUrl = 'app/items';  // URL to web api = DB
    private blizzUrl = 'https://eu.api.battle.net/wow/item/18803?locale=de_DE&apikey=4hszupqr2sctzvvadhmvf2vwhm2cgjmr'; //url to blizz api with only 1 item

    private itemId: number = 100;
    private injector;
    private http2;
    
    constructor(private http: Http, private heroService : HeroService) {
        
        /*
        Generierung eigenen HTTP Service mit hilfe der Http-Klasse aus der doc.
        funktioniert aber leider noch nicht
         */
        console.log("start");
        this.injector = ReflectiveInjector.resolveAndCreate([
            BaseRequestOptions,
            XHRBackend,
            {provide: Http, useFactory:
                function(backend, defaultOptions) {
                    return new Http(backend, defaultOptions);
                },
                deps: [XHRBackend, BaseRequestOptions]}
        ]);

        this.http2 = this.injector.get(Http);


    }

    getBlizzData(){
        return this.http2.get(this.blizzUrl)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    };
    
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
        item.id = this.itemId++;
        /*if (item.id) {
            return this.put(item);
        }*/
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