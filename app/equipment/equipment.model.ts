/**
 * Shows all stuff which is equipted and so not in the bag.
 * Created by Andreas Burger on 03.05.2016.
 */

import {Item} from "./../item/item";

export class Equipment {
    private id_equipment: number;
    private helmet      : Item;
    private shoulder    : Item;
    private chest       : Item;
    private hands       : Item;
    private legs        : Item;
    private feet        : Item;
    private weapon1     : Item;
    private weapon2     : Item;


    constructor( id_equipment :number, helmet:Item, shoulder:Item, chest:Item,
                 hands:Item, legs:Item, feet:Item, weapon1:Item, weapon2:Item) {
        this.id_equipment   = id_equipment;
        this.helmet         = helmet;
        this.shoulder       = shoulder;
        this.chest          = chest;
        this.hands          = hands;
        this.legs           = legs;
        this.feet           = feet;
        this.weapon1        = weapon1;
        this.weapon2        = weapon2;
    }
}