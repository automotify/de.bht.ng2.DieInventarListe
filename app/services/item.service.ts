import {Injectable}     from "@angular/core";
import {Http}           from "@angular/http";
import                  "rxjs/add/operator/map";
import                  "rxjs/add/operator/toPromise";
import {ITEMS}          from "./db-in-memory.service"
import {Item}           from "../models/item/item.model";
import {Hero}           from "../models/hero/hero.model";
import {HeroService}    from "./hero.service";
import {Weapon}         from "../models/item/weapon.model";
import {Gear}           from "../models/item/gear.model";


@Injectable()
export class ItemService {

    private blizzKey = "?locale=de_DE&apikey=4hszupqr2sctzvvadhmvf2vwhm2cgjmr";
    private blizzUrl = "https://eu.api.battle.net/wow/item/";

    constructor(private http:Http) {
    }

    /**
     * helper function -- random number from min till max
     * @param min
     * @param max
     * @returns {any} a random number
     */
    private randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * helper function -- the first letter should be upper case
     * @param s complete string
     * @returns {string} complete string where the first letter is an upper cas letter
     */
    private capitalizeFirstLetter(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    /**
     * 1 - get an item from the blizzard api
     * 2 - it return a gear or a weapon item
     * 3 - the blizzard item will be contain if it is equipable(3.1), if it is a weapon(3.2) or a gear item(3.3)
     * 4 - if it´s a gear item it will be contain if this amror value > 0
     * 5 - the blizzard item will be filter which category it is
     * 6 - if it return no weapon or gear item than it call itself
     * @param heroId
     * @returns {Promise<TResult>|PromiseLike<TResult>}
     */
    getBlizzData(heroId:number) {
        //1
        return this.http.get(this.blizzUrl + this.randomIntFromInterval(1001, 150000) + this.blizzKey)
            .toPromise()
            .then(res=>{
                    var item = res.json();
                    //3.1
                    if (item.equippable) {

                        //ToDo: catch the get error if the blizzard api cannot found an item

                        var category = "";
                        let string = item.icon;
                        //key words for item category
                        let subStringArray = ["helm", "helmet", "chest", "shoulder", "cape", "glove", "boot", "boots",
                            "pant", "belt", "wand", "axe", "staff", "sword", "mail", "bracer", "misc", "shield", "mace",
                            "gauntlets", "ring", "shortblade", "shirt"];
                        //5
                        for (var i = 0; i < subStringArray.length; i++) {
                            if (string.indexOf(subStringArray[i]) > -1)
                                category = this.capitalizeFirstLetter(subStringArray[i]);
                                if (category == "Ring") return this.getBlizzData(heroId); // more than ring?
                        }
                        //3
                        if (item.weaponInfo == undefined) {
                            //4
                            if (item.armor == 0) {
                                //6
                                this.getBlizzData(heroId);
                            } else {
                                //console.log("this item is a gear");
                                //3.3
                                var gearItem = new Gear(this.getNextFreeIndex(), item.name,
                                    item.itemLevel, heroId, item.id, item.icon, category,
                                    item.armor);
                                //console.log(gearItem)
                                this.save(gearItem);
                                //2
                                return gearItem;
                            }
                        } else {
                            //console.log("this item is a weapon");
                            //3.2
                            var weaponItem = new Weapon(this.getNextFreeIndex(), item.name,
                                item.itemLevel, heroId, item.id, item.icon, category,
                                item.weaponInfo.dps);
                            //console.log(weaponItem)
                            this.save(weaponItem);
                            //2
                            return weaponItem;
                        }
                    } else {
                        //console.log("not an item..")
                        //6
                        return this.getBlizzData(heroId);
                    }
            }
            , err=>{
                err = null;
                //6
                return this.getBlizzData(heroId);
            });
    }

    /**
     * return an item array which have all items
     * @returns {Promise<Item[]>}
     */
    getAllItems():Promise<Item[]> {
        return Promise.resolve(ITEMS);
    }

    /**
     * return one item
     * @param id
     * @returns {Promise<TResult>}
     */
    getItem(id:number | string) {
        return this.getAllItems()
            .then(items => items.filter(item => item.id === +id)[0]);
    }

    /**
     * return all item from one hero
     * @param id is the id from the hero
     * @returns {Promise<TResult>}
     */
    getAllItemsFromHero(id:number/* | string*/) {
        let hero:Hero;
        HeroService.getHero(id)
            .then(h => hero = h);
        return this.getAllItems()
            .then(items => items.filter(item => item._heroId === hero.id));
    }

    /**
     * return the size of the item array
     * @returns {number}
     */
    getNextFreeIndex() {
        return ITEMS.length;
    }

    /**
     * save an item to the item array
     * @param item
     */
    save(item:Item) {
        if (item.id >= ITEMS.length) {
            ITEMS.push(item);   // new Item
            //console.log("save : " + item);
            //console.log("next free index is " + ITEMS.length);
        }
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

    private static handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}