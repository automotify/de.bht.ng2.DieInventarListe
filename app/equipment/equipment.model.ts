/**
 * Shows all stuff which is equipted and so not in the bag.
 * Created by Andreas Burger on 03.05.2016.
 */
<<<<<<< HEAD
<<<<<<< Updated upstream

import {Item} from "./../item/item";
=======
import {Item} from "../item/index";
>>>>>>> Stashed changes
=======
import {Item} from "./../item/item.model";
>>>>>>> de7fff6b259fc4dbaa43d7dd50eabfbbcf1c161d

export class Equipment {
    private equip = Item[7];

    //equip[0] = helmet ;
    private helmet      :Item;
    private shoulders   :Item;
    private legs        :Item;
    private chest       :Item;
    private boots       :Item;
    private weapon      :Item;
    private offhand     :Item;

    constructor(helmet?:Item, shoulders?:Item, legs?:Item, chest?:Item, boots?:Item, weapon?:Item, offhand?:Item) {
        this.helmet     = helmet    || null;
        this.shoulders  = shoulders || null;
        this.legs       = legs      || null;
        this.chest      = chest     || null;
        this.boots      = boots     || null;
        this.weapon     = weapon    || null;
        this.offhand    = offhand   || null;
    }

}