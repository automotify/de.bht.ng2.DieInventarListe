/**
 * Created by padawan on 13.05.16.
 */

import {Item} from "./item"

export class Equipment {
    private equip = Item[7];

    //equip[0] = helmet ;
    private helmet:Item;
    private shoulders:Item;
    private legs:Item;
    private chest:Item;
    private boots:Item;
    private weapon:Item;
    private offhand:Item;

    constructor(helmet?:Item, shoulders?:Item, legs?:Item, chest?:Item, boots?:Item, weapon?:Item, offhand?:Item) {
        this.helmet = helmet || null;
        this.shoulders = shoulders || null;
        this.legs = legs || null;
        this.chest = chest || null;
        this.boots = boots || null;
        this.weapon = weapon || null;
        this.offhand = offhand || null;
    }

}