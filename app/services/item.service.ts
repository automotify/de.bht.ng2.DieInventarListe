import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


@Injectable()
export class ItemService {

    private blizzKey = "?locale=de_DE&apikey=4hszupqr2sctzvvadhmvf2vwhm2cgjmr";
    private blizzUrl = "https://eu.api.battle.net/wow/item/";
    
    constructor(private http: Http) {
        
        /*
        Generierung eigenen HTTP Service mit hilfe der Http-Klasse aus der doc.
        funktioniert aber leider noch nicht
         */
        /*console.log("start");
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
*/

    }

    getBlizzData(){
        return this.http.get(this.blizzUrl + 18803 + this.blizzKey)
            .toPromise()
            .then(res=>res.json())
            .catch(ItemService.handleError);
    };
    /*
    getAllItems(): Promise<Item[]> {
        return this.http.get(this.blizzUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }*/

    getItem(id: number | string){
        return this.http.get(this.blizzUrl + id + this.blizzKey)
            .toPromise()
            .then(res=>res.json())
            .catch();
    }
    /* Altes getItem (mit mock-Daten)
    getItem(id: number | string) {
        return this.getAllItems()
            .then(items => items.filter(item => item.id === +id)[0]);
    }
    */


    /* Altes getItemsFromHero (mit mock-Daten)
    getAllItemsFromHero(id: number/* | string ) {
        let hero: Hero;
        this.heroService.getHero(id)
            .then(h => hero = h);
        return this.getAllItems()
            .then(items => items.filter(item => item._heroId === hero.id));
    }*/

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